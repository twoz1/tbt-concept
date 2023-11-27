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
	public List<Cart> searchByCartLikeU(String keyword) {
		return repository.searchByCartLikeU(keyword);
	}
	
	@Override
	public List<Cart> searchByCartLikeP(String keyword) {
		return repository.searchByCartLikeP(keyword);
	}
	
	@Override
	public List<Cart> searchByCartLikeA(String keyword) {
		return repository.searchByCartLikeA(keyword);
	}

	@Override
	public Cart selectDetail(int cart_id) {
		Optional<Cart> result = repository.findById(cart_id);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public int save(Cart entity) {
		repository.save(entity);
		return entity.getCart_id();
	}

	@Override
	public int delete(int cart_id) {
		repository.deleteById(cart_id);
		return cart_id;
	}

}
