package org.vihv.contoureditor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import javax.persistence.*;

import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.vihv.contoureditor.UserRepository;

//@SpringBootApplication
////		(exclude = {DataSourceAutoConfiguration.class }) //(scanBasePackages = "org.vihv.contoureditor")
////@EnableJpaRepositories("org.vihv.contoureditor")
////@EntityScan(basePackages = "org.vihv.contoureditor")
//@ComponentScan("org.vihv.contoureditor")
////@ComponentScan("mh.dev.blog.multi")
//@Configuration
//@EnableJpaRepositories(basePackages = {"org.vihv.contoureditor"})
////@EnableAutoConfiguration
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
//@EnableTransactionManagement
//@Import( { org.vihv.contoureditor.UserRepository.class,
//		org.vihv.contoureditor.User.class,
//		org.vihv.contoureditor.Contour.class,
//		org.vihv.contoureditor.Vertex.class
//})
@SpringBootApplication
@Configuration

@ComponentScan({"org.vihv.contoureditor"})
@EntityScan(basePackages = "org.vihv.contoureditor")
@EnableJpaRepositories(basePackages = "org.vihv.contoureditor")
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}



}


