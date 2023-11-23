package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.Product;

public interface ProductService {
	List<Product> selectList();
	
	Product selectDetail(String id);
	
	String save(Product entity);
	
	String delete(String id);
	
}
