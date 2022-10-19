package org.vihv.contoureditor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name="user")
public class User {
    static final Integer UNDEFINED_ID = null;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer id = null;

    public String login;
    public String password;
    @ManyToOne
    public Collection<Contour> contours= new ArrayList<>();


}