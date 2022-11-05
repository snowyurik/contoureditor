package org.vihv.contoureditor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="user",
        uniqueConstraints={
            @UniqueConstraint(columnNames={"login"})
        })
public class User {
    static final Long UNDEFINED_ID = null;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id = null;

    public String login;
    public String password;

    @OneToMany(cascade = CascadeType.ALL)
    public List<Contour> contours= new ArrayList<>();


}