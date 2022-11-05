package org.vihv.contoureditor.test;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.vihv.contoureditor.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.security.test.context.support.WithMockUser;
import java.util.ArrayList;
import java.util.List;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes=Application.class)
@SpringBootTest(classes = { IndexController.class, ApiController.class })
@AutoConfigureMockMvc()
public class ApiTest {

    private static final Logger log = LoggerFactory.getLogger(ApiTest.class);
    private ObjectMapper objectMapper = new ObjectMapper();
    private User testUser;

    @Autowired
    MockMvc mvc;

    @BeforeEach
    @WithMockUser(username = "testLogin")
    public void createTestUser() throws Exception {
        testUser = new User() {{
            login = "testLogin";
            password = "testPassword";
        }};
        mvc.perform( put("/api/user")
                .with( csrf() )
                .contentType( MediaType.APPLICATION_JSON)
                .content( objectMapper.writeValueAsString( testUser ))
        ).andExpect(status().isCreated());
    }

    @AfterEach
    @WithMockUser(username = "testLogin")
    public void deleteTestUser() throws Exception {
        mvc.perform( delete("/api/user")
                .with( csrf() )
                .contentType( MediaType.APPLICATION_JSON)
                .content( objectMapper.writeValueAsString( testUser ))
        ).andExpect(status().isOk() );
    }

    @Test
    @WithMockUser(username="testLogin")
    public void loadContours() throws Exception {
        mvc.perform(get("/api/contour/list"))
                .andExpect( status().isOk() )
                .andExpect(content().json("[]"));
    }

    @Test
    @WithMockUser(username="testLogin") //, setupBefore=TestExecutionEvent.TEST_EXECUTION)
    public void saveContours() throws Exception {
        List<Contour> contourList = new ArrayList<Contour>() {{
            add( new Contour() {{
                title = "Test Contour 1";
            }});
        }};
        String contourListJson = objectMapper.writeValueAsString( contourList );

        this.mvc.perform(put("/api/contour/list")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content( contourListJson )
        ).andExpect( status().isOk() );

        this.mvc.perform(get("/api/contour/list"))
                .andExpect( status().isOk() )
                .andExpect( (result)->{
                    String jsonString = result.getResponse().getContentAsString();
                    List<Contour> storedContourList = objectMapper.readValue(jsonString, new TypeReference<List<Contour>>(){});
                    for( Contour storedContour : storedContourList) {
                        contourList.stream().filter( c -> storedContour.title.equals(c.title))
                            .findFirst().orElseThrow(
                                () -> {
                                    throw new AssertionError("Contour not found, expected: \n"
                                        + contourListJson + "\nactual: \n" + jsonString
                                        + "contour.id field expected to be ignored"
                                    );
                                }
                            );
                        }
                });
    } // end saveContours test
}
