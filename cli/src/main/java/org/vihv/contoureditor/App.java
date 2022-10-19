package org.vihv.contoureditor;

import org.vihv.contoureditor.Users;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void createUser(String login, String password) {
           Users list = new Users();
           User user = new User();
           user.login = login;
           user.password = password;
           list.save( user );
           System.out.println("New user " +  login + " create, id="+user.id+"\n");
    }

    public static void main( String[] args )
    {
        System.out.println( "Classpath:"+System.getProperty("java.class.path") );
        for (String arg : args) {
            System.out.println( arg );
        }
        Users list = new Users();
        if( args.length != 3) {
            System.out.println("""
                    Usage:
                        run.sh action param1 param2
                    Example:
                        run.sh create username password
                    """);
            return;
        }
        createUser( args[1], args[2] );
    }
}
