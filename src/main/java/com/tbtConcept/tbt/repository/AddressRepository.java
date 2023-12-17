package com.tbtConcept.tbt.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.Address;
import com.tbtConcept.tbt.entity.Product;



public interface AddressRepository extends JpaRepository<Address,Integer >{
	

	@Query("SELECT a FROM Address a WHERE (:keyword = '' OR :searchType = 'all' OR" +
		       "(:searchType = 'user_id' AND a.user_id LIKE %:keyword%)) " +
		       "ORDER BY a.user_id DESC")
	Page<Address> selectAList(Pageable pageable, @Param("searchType") String searchType, @Param("keyword") String keyword);
}
