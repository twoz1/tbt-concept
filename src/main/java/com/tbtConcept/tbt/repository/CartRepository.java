package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tbtConcept.tbt.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	@Query("SELECT c FROM Cart c order by cart_id desc") // where절 추가하기 (user_id가 동일한 것)
	List<Cart> findAllDesc();

	/*
	 * @Query("SELECT c FROM Cart c WHERE c.user.id LIKE %:user_id%") List<Cart>
	 * findCartsByUserIdContaining(@Param("user_id") String user_id);
	 */
}