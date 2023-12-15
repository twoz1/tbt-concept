package com.tbtConcept.tbt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication(exclude= {SecurityAutoConfiguration.class})
@EnableJpaAuditing
public class TbtApplication {

	public static void main(String[] args) {
		SpringApplication.run(TbtApplication.class, args);
		
	}

}
