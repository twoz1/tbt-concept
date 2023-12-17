package com.tbtConcept.tbt.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.Faq;

public interface FaqRepository extends JpaRepository<Faq, Integer> {
	@Query("SELECT f FROM Faq f WHERE (:keyword = '' OR :searchType = 'all' OR "
	        + "(:searchType = 'faq_title' AND f.faq_title LIKE %:keyword%) OR "
	        + "(:searchType = 'faq_content' AND f.faq_content LIKE %:keyword%) OR "
	        + "(:searchType = 'faq_type' AND f.faq_type LIKE %:keyword%)) "
	        + "ORDER BY f.faq_id DESC")
	Page<Faq> findAllDesc(Pageable pageable, @Param("searchType") String searchType, @Param("keyword") String keyword);

}
