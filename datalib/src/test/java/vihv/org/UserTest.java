package vihv.org;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

/**
 * CRUD for table users + login/password check
 */
public class UserTest 
{
    @Test
    void self() {
       assertTrue(true);// expect green
    }
    
    @Test
    void addRemove() {
        Users users = new Users();
        User user = new User();
        
        users.add( user );
    }
}
