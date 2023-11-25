package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, String> {
	
	@Query("SELECT c FROM Cart c order by c.product_id desc") // where절 추가하기 (user_id가 동일한 것)
	List<Cart> findAllDesc();
}
