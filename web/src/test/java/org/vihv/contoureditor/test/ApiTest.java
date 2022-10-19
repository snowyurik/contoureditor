package org.vihv.contoureditor.test;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.vihv.contoureditor.ApiController;
import org.vihv.contoureditor.IndexController;
import org.vihv.contoureditor.User;
import org.vihv.contoureditor.Users;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.security.test.context.support.WithMockUser;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@ExtendWith(SpringExtension.class)
@WebMvcTest({ IndexController.class, ApiController.class })
public class ApiTest {

    @Autowired
    MockMvc mvc;

    @BeforeEach
    public void createMockUser() {
        org.vihv.contoureditor.User user = new User() {{
            login = "testLogin";
            password = "testPassword";
        }};
        Users users = new Users();
        users.save(user);
    }

    @Test
    void rootWhenUnauthenticatedThen401() throws Exception {
        this.mvc.perform(get("/"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser
    public void rootWithMockUserStatusIsOK() throws Exception {
        this.mvc.perform(get("/")).andExpect(status().isOk());
    }

    @Test
    @WithMockUser
    public void loadContours() throws Exception {
        this.mvc.perform(get("/api/contour/list"))
                .andExpect( status().isOk() )
                .andExpect(content().json("[]"));
    }

    @Test
    @WithMockUser(username="testLogin") //, setupBefore=TestExecutionEvent.TEST_EXECUTION)
    public void saveContours() throws Exception {
        String contourListJson = """
                [{
                title: "TestContour 1",
                vertexes: []
                }]
                """;
        this.mvc.perform(put("/api/contour/list")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content( contourListJson )
        ).andExpect( status().isOk() );

        this.mvc.perform(get("/api/contour/list"))
                .andExpect( status().isOk() )
                .andExpect(content().json(contourListJson));
    }
}
