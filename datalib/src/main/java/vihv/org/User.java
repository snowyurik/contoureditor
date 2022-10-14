package vihv.org;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="user")
public class User {
    static final Integer UNDEFINED_ID = null;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer id = null;



}