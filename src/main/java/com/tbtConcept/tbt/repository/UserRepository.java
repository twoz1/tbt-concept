package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.User;

public interface UserRepository 
extends JpaRepository<User, String>{

	@Query("SELECT u FROM User u WHERE (:keyword = '' OR :searchType = 'all' OR"+
			"(:searchType = 'user_id' AND u.user_id LIKE %:keyword%) OR " +
			"(:searchType = 'user_name' AND u.user_name LIKE %:keyword%)) " + 
			"ORDER BY u.user_birth desc")
	Page<User> findAllDesc(Pageable pageable,  @Param("searchType") String searchType, @Param("keyword") String keyword);

	//	@Query("SELECT u FROM User u order by u.user_birth desc")
	//	List<User> findAllDesc();

	@Query("SELECT u FROM User u Where u.user_id = :user_id and u.user_name = :user_name")
	User checkUser(@Param("user_id") String user_id, @Param("user_name") String user_name);
}
