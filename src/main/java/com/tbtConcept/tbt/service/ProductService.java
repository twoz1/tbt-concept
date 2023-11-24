package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.Product;

public interface ProductService {
	List<Product> selectList();
	
	Product selectDetail(int id);
	
	int save(Product entity);
	
	int delete(int id);
	
}
