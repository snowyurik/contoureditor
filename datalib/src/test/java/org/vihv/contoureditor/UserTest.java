package org.vihv.contoureditor;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;

import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.vihv.contoureditor.TestApplication;

import java.util.List;
import java.util.Optional;
//import org.springframework.boot.test.SpringApplicationConfiguration;

/**
 * CRUD for table users + login/password check
 */
@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class UserTest
{
    @Autowired private UserRepository userRepository;
//    @Autowired private ContourRepository contourRepository;

//    @Autowired private Datalib datalib;
    @Test
    void self() {
       assertTrue(true);// expect green
    }

    @Test
    void testCrud() {
//        Datalib datalib = new Datalib();
        User user = new User();
        assertNull( user.id);
        user = userRepository.save(user);
        assertNotNull( user.id );
        Long id = user.id;
        Optional<User> userFound = userRepository.findById(id);
        assertTrue( userFound.isPresent() );
        userRepository.delete(user);
        userFound = userRepository.findById(id);
        assertFalse( userFound.isPresent() );
    }

    @Test
    void testVertexes() {
//        Datalib datalib = new Datalib();
        User user = new User();
        user.contours.add( new Contour() );
        user.contours.add( new Contour() {{
            vertexes.add( new Vertex() {{
                        x = 1;
                        y = 2;
                    }});
            vertexes.add( new Vertex() {{
                        x = 3;
                        y = 4;
                    }});
        }});
        user = userRepository.save( user );
        Optional<User> loadedUser = userRepository.findById( user.id );
        assertTrue( loadedUser.isPresent() );
        List<Contour> contours = loadedUser.get().contours;
        assertEquals(2, contours.size());
        List<Vertex> vertexes = contours.get(1).vertexes;
        assertEquals( 2, vertexes.size() );
        assertEquals( 3, vertexes.get(1).x);
        assertEquals( 4, vertexes.get(1).y);

//        System.out.println( user.toString() );
    }
}
