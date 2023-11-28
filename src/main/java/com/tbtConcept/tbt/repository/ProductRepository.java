package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query("SELECT p FROM Product p order by p.product_id desc")
	List<Product> findAllDesc();
	
	@Query("SELECT p FROM Product p where code ='S' order by p.product_id desc")
	List<Product> selectSDesc();
}
