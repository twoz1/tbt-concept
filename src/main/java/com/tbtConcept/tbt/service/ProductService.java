package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.Product;

public interface ProductService {
	
	List<Product> selectList();
	
	@Transactional
	List<Product> findAllDesc();
	
	@Transactional
	List<Product> selectSDesc();
	
	@Transactional
	List<Product> selectGDesc();
	
	@Transactional
	List<Product> searchByProductLikeA(String mSearBarKeyword);
	
	Product selectDetail(int id);
	
	int save(Product entity);
	
	int delete(int id);
	
}
