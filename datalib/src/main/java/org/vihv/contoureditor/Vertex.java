package org.vihv.contoureditor;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import javax.persistence.*;

@Entity
@Table(name="vertex")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Vertex {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Integer id = null;
    public Integer x;
    public Integer y;
}
