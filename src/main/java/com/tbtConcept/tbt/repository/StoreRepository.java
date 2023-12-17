package com.tbtConcept.tbt.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.Store;

public interface StoreRepository extends JpaRepository<Store, String> {
	
	@Query("SELECT s FROM Store s WHERE (:keyword = '' OR :searchType = 'all' OR" +
		       "(:searchType = 'store_id' AND s.store_id LIKE %:keyword%) OR " +
		       "(:searchType = 'store_address' AND s.store_address LIKE %:keyword%))")
	Page<Store> selectList(Pageable pageable, @Param("searchType") String searchType, @Param("keyword") String keyword);
}
