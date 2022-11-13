package org.vihv.contoureditor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.vihv.contoureditor.Users;


@SpringBootApplication
@Configuration
@ComponentScan({"org.vihv.contoureditor"})
@EntityScan(basePackages = "org.vihv.contoureditor")
@EnableJpaRepositories(basePackages = "org.vihv.contoureditor")
public class SpringBootConsoleApplication
        implements CommandLineRunner
{

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    private static final Logger log = LoggerFactory.getLogger(SpringBootConsoleApplication.class);

    @Autowired
    public SpringBootConsoleApplication(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public static void main(String[] args) {
        log.info("STARTING THE APPLICATION");
        SpringApplication.run(SpringBootConsoleApplication.class, args);
        log.info("APPLICATION FINISHED");
    }

//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

    @Override
    public void run(String... args) {
        log.info("EXECUTING : command line runner");

        for (int i = 0; i < args.length; ++i) {
            log.info("args[{}]: {}", i, args[i]);
        }

        System.out.println( "Classpath:"+System.getProperty("java.class.path") );
        for (String arg : args) {
            System.out.println( arg );
        }

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

    public void createUser(String login, String password) {
        User user = new User();
        user.login = login;
        user.password = passwordEncoder.encode(password);
        userRepository.save( user );
        System.out.println("New user " +  login + " create, id="+user.id+"\n");
    }
}

/**
 * Hello world!
 *
 */
//public class App
//{
//    public static void createUser(String login, String password) {
//           Users list = new Users();
//           User user = new User();
//           user.login = login;
//           user.password = password;
//           list.save( user );
//           System.out.println("New user " +  login + " create, id="+user.id+"\n");
//    }
//
//    public static void main( String[] args )
//    {
//        System.out.println( "Classpath:"+System.getProperty("java.class.path") );
//        for (String arg : args) {
//            System.out.println( arg );
//        }
//        Users list = new Users();
//        if( args.length != 3) {
//            System.out.println("""
//                    Usage:
//                        run.sh action param1 param2
//                    Example:
//                        run.sh create username password
//                    """);
//            return;
//        }
//        createUser( args[1], args[2] );
//    }
//}
