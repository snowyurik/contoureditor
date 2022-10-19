package org.vihv.contoureditor;
import java.security.Principal;
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

    private static final Logger log = LoggerFactory.getLogger(ApiController.class);

    @GetMapping("/contour/list")
    public List<Contour> readList() {
        log.debug("ApiController.readList");
        List<Contour> list = new ArrayList<Contour>(){{
            add(new Contour() {{
                title="TestContour 1";
                vertexes= new ArrayList<Vertex>();
            }});
        }};
        return list;
    }

    @PutMapping("/contour/list")
    public int saveList(Principal principal) {
        log.debug("ApiController.saveList, principal={}", principal.getName());
        return 1;
    }
}
