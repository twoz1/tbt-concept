package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.domain.CartProdDTO;
import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.entity.CartId;

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

	CartId delete(CartId cart_id);
	
	int cartUpdateCount1(String user_id, int product_id, int cart_quan);
	
	int cartUpdateCount2(String user_id, int product_id, int cart_quan);

}
