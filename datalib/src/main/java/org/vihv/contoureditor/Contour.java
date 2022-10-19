package org.vihv.contoureditor;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="contour")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Contour {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Integer id = null;
    public String title;
    @ManyToOne
    public Collection<Vertex> vertexes = new ArrayList<>();
}
