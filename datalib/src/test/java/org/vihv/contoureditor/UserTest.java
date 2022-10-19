package org.vihv.contoureditor;

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
    void testCrud() {
        Users users = new Users();
        User user = new User();
        assertEquals( User.UNDEFINED_ID, user.id );
        users.save( user );
        assertNotEquals( User.UNDEFINED_ID, user.id );
        users.remove( user );
    }
}
