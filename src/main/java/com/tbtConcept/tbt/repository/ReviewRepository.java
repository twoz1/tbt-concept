package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
	
	
	@Query("SELECT r FROM Review r WHERE (:keyword = '' OR :searchType = 'all' OR" +
		       "(:searchType = 'user_id' AND r.user_id LIKE %:keyword%) OR " +
		       "(:searchType = 'product_id' AND r.product_id LIKE %:keyword%)) " +
		       "ORDER BY r.review_id DESC")
	Page<Review> selectList(Pageable pageable, @Param("searchType") String searchType, @Param("keyword") String keyword);
	
	@Query("SELECT r FROM Review r Where r.product_id = :product_id order by r.review_id desc")
	List<Review> selectListByProductId(@Param("product_id") int product_id);
	
}
