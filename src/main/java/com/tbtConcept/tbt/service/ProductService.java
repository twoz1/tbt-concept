package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.entity.Product;

public interface ProductService {
	
	@Transactional
	List<Product> findAllDesc();
	
	
	List<Product> selectList();
	
	@Transactional
	List<Product> selectSDesc();
	
	@Transactional
	List<Product> selectGDesc();
	
	Product selectDetail(int id);
	
	int save(Product entity);
	
	int delete(int id);
	
}
