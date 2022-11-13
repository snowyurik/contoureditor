package org.vihv.contoureditor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;


@SpringBootApplication
@Configuration

@ComponentScan({"org.vihv.contoureditor"})
@EntityScan(basePackages = "org.vihv.contoureditor")
@EnableJpaRepositories(basePackages = "org.vihv.contoureditor")
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.csrf().disable()
//			.and()
			.authorizeHttpRequests((authz) -> authz
//			.anyRequest().permitAll()
			.anyRequest().authenticated()
			)
			.httpBasic(withDefaults())

		;
		return http.build();
	}


}


