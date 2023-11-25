package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.repository.CartRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
	private final CartRepository repository;
	
	@Override
	public List<Cart> findAllDesc() {
		return repository.findAllDesc();
	}
	
	@Override
	public List<Cart> selectList() {
		return repository.findAll();
	}
	
	@Override
	public Cart selectDetail(String user_id) {
		Optional<Cart> result = repository.findById(user_id);
		
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}
	
	@Override
	public int save(Cart entity) {
		repository.save(entity);
		return entity.getUser_id();
	}
	
	@Override
	public int delete(String user_id) {
		repository.deleteById(user_id);
		return user_id;
	}
	
}
