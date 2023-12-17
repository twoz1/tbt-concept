package com.tbtConcept.tbt.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.News;

public interface NewsRepository extends JpaRepository<News, Integer> {
	
	@Query("SELECT n FROM News n WHERE (:keyword = '' OR :searchType = 'all' OR"+
    		"(:searchType = 'news_title' AND n.news_title LIKE %:keyword%) OR " +
    		"(:searchType = 'news_content' AND n.news_content LIKE %:keyword%)) " + 
    		"ORDER BY n.news_id DESC")
    Page<News> findAllDesc(Pageable pageable,  @Param("searchType") String searchType, @Param("keyword") String keyword);

}
