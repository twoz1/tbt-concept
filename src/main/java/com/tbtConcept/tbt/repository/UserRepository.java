package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.User;

public interface UserRepository 
				extends JpaRepository<User, String>{
	
	@Query("SELECT u FROM User u order by u.user_birth desc")
	List<User> findAllDesc();

}
