package com.tbtConcept.tbt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tbtConcept.tbt.entity.User;

public interface UserRepository 
				extends JpaRepository<User, String>{

}