package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
	private final ProductRepository repository;
	
	@Override
	public List<Product> selectList() {
		return repository.findAll();
	}
	
	@Override
	public Product selectDetail(String id) {
		Optional<Product> result = repository.findById(id);
		
		if(result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}
	
	@Override
	public String save(Product entity) {
		repository.save(entity);
		return entity.getProduct_id();
	}
	
	@Override
	public String delete(String id) {
		repository.deleteById(id);
		return id;
	}
	
}
