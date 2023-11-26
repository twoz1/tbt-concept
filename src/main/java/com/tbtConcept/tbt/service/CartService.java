package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.entity.Cart;

public interface CartService {
	@Transactional
	List<Cart> findAllDesc();

	List<Cart> selectList();
	
	@Transactional
	List<Cart> searchList(String user_id);
	
	Cart selectDetail(int cart_id);

	int save(Cart entity);

	// => delete 구현에 대해서 생각해보기
	// 1. user별 장바구니 삭제
	// 2. user별 장바구니 안에 있는 아이템을 각각 삭제
	int delete(int cart_id);
	
}
