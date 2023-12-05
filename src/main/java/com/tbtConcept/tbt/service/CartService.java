package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.domain.CartProdDTO;
import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.entity.CartId;
import com.tbtConcept.tbt.entity.Product;

public interface CartService {
//	@Transactional
//	List<Cart> findAllDesc();

	List<Cart> selectList();

//	@Transactional
//	List<Cart> searchByCartLikeU(String keyword);
//	
//	@Transactional
//	List<Cart> searchByCartLikeP(String keyword);
//	
//	@Transactional
//	List<Cart> searchByCartLikeA(String keyword);

	List<CartProdDTO> perCartUser(String user_id);

	Cart selectDetail(CartId cart_id);

	int save(Cart entity);

	void delete(CartId cart_id);

}
