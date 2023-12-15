package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.User;

public interface UserRepository 
				extends JpaRepository<User, String>{
	
	@Query("SELECT u FROM User u order by u.user_birth desc")
	List<User> findAllDesc();
	
	@Query("SELECT u FROM User u Where u.user_id = :user_id and u.user_name = :user_name")
	User checkUser(@Param("user_id") String user_id, @Param("user_name") String user_name);
}
