package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
	
	@Query("SELECT r FROM Review r Where r.product_id = :product_id order by r.review_id desc")
	List<Review> selectListByProductId(@Param("product_id") int product_id);
	
//	@Query("SELECT r FROM Review r Where r.user_id = :user_id")
//	int deleteReview(@Param("user_id") String user_id);
}
