package org.vihv.contoureditor;
import java.security.Principal;
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vihv.contoureditor.Contour;
import org.vihv.contoureditor.User;
import org.vihv.contoureditor.UserRepository;

//class ContourData {
//    public Long id;
//    public String title;
//}
@RestController
@RequestMapping("/api")
public class ApiController {

    private static final Logger log = LoggerFactory.getLogger(ApiController.class);
    private UserRepository userRepository;

    public ApiController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Updata user data,
     * plus, allow authorised user to self-create itself in database, for test purposes
     * why? to avoid "violation of test scope"
     * */
    @PutMapping("/user")
    public ResponseEntity<User> updateUser(Principal principal, @RequestBody User user) {
        log.debug("User self-create ++++++++++++++++++++++");
        if( !user.login.equals(principal.getName()) ) {
            log.debug("User.login and principal.getName() not match, access denied. User: {}, Principal: {}", user.login, principal.getName());
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN );
        }
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED );
    }

    @DeleteMapping("/user")
    public ResponseEntity<?> deleteUser(Principal principal, @RequestBody User user) {
        log.debug("User self-delete ++++++++++++++++++++++ : user={}", user);
        if( !user.login.equals(principal.getName()) ) {
            log.debug("User.login and principal.getName() not match, access denied. User: {}, Principal: {}", user.login, principal.getName());
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN );
        }
        User dbuser = userRepository.getByLogin( user.login ); // because we do not have user.id in test context
        userRepository.delete(dbuser);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/contour/list")
    public ResponseEntity<List<Contour>> readList(Principal principal) {
        log.debug("ApiController.readList");
        log.debug("Principal: {}", principal);
        User user = userRepository.getByLogin(principal.getName());
        if(user == null) {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        log.debug("User {}", user);
        log.debug("User.contours {}", user.contours);
        return new ResponseEntity<>(user.contours, HttpStatus.OK);
    }

    @PutMapping("/contour/list")
    public ResponseEntity<?> saveList(Principal principal, @RequestBody List<Contour> contourList) {
        log.debug("ApiController.saveList, principal={}", principal.getName());
        log.debug("ApiController.saveList, contourList is:");
        for (Contour contour : contourList ) {
            log.debug("ApiController.saveList, contourList item = {}", contour.title );
        }

        User user = userRepository.getByLogin(principal.getName());
        if (user == null) {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        user.contours = contourList;
        userRepository.save(user);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
