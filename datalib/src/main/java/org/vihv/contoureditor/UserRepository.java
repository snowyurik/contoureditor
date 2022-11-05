package org.vihv.contoureditor;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Optional;

;
//@Component
@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    @Query("select s from User s where s.login = :login")
    public User getByLogin(@Param("login") String login);

//    public User getByLogin(String login) throws EUserNotFound  {
//        Example<User> example = Example.of( new User() {{ login = login; }} );
//        Optional<User> optional =  findOne( example );
//        if(optional.isEmpty()) {
//            throw new EUserNotFound();
//        }
//        return optional.get();
//    }
}
