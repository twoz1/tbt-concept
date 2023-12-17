package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.QnA1on1;

public interface QnA1on1Repository extends JpaRepository<QnA1on1, Integer> {
	
	@Query("SELECT q FROM QnA1on1 q Where q.user_id = :user_id order by q.qna_id desc")
	List<QnA1on1> selectListByUserId(@Param("user_id") String user_id);
	
	@Query("SELECT q FROM QnA1on1 q Where q.product_id = :product_id order by q.qna_id desc")
	List<QnA1on1> selectListByProdId(@Param("product_id") int product_id);
	
	@Query("SELECT q FROM QnA1on1 q WHERE (:keyword = '' OR :searchType = 'all' OR "
	        + "(:searchType = 'qna_title' AND q.qna_title LIKE %:keyword%) OR "
	        + "(:searchType = 'user_id' AND q.user_id LIKE %:keyword%) OR "
	        + "(:searchType = 'product_id' AND q.product_id LIKE %:keyword%) OR "
	        + "(:searchType = 'qna_type' AND q.qna_type LIKE %:keyword%) OR "
	        + "(:searchType = 'qna_content' AND q.qna_content LIKE %:keyword%)) "
	        + "ORDER BY q.qna_id DESC")
	Page<QnA1on1> findAllDesc(Pageable pageable, @Param("searchType") String searchType, @Param("keyword") String keyword);
	
	
}
