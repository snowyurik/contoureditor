package vihv.org;
import org.hibernate.Session;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;
import java.lang.ref.Reference;

public class Users {

    private Configuration config;
    private Session session;

    public Users() {
        config = new Configuration();
        config.configure();
//        config.setProperty("hibernate.connection.url", System.getenv("JDBC_DATABASE_URL")); // heroku postgresql

        // Hibernate session object to start the db transaction.
        session = config.buildSessionFactory().openSession();
    }
    public void save(User user) {
        session.getTransaction().begin();
        session.save(user);
        session.getTransaction().commit();
    }
}