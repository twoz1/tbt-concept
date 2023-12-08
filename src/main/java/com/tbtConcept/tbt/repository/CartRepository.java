package com.tbtConcept.tbt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tbtConcept.tbt.domain.CartProdDTO;
import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.entity.CartId;

@Repository
public interface CartRepository extends JpaRepository<Cart, CartId> {

//	@Query("SELECT c FROM Cart c order by cart_id desc") // where절 추가하기 (user_id가 동일한 것)
//	List<Cart> findAllDesc();
//	
//	@Query("SELECT c FROM Cart c WHERE c.user_id LIKE %:keyword%")
//	List<Cart> searchByCartLikeU(@Param("keyword") String keyword);
//	
//	@Query("SELECT c FROM Cart c WHERE c.product_id LIKE %:keyword%")
//	List<Cart> searchByCartLikeP(@Param("keyword") String keyword);
//	
//	@Query("SELECT c FROM Cart c WHERE c.user_id LIKE %:keyword% OR c.product_id LIKE %:keyword% OR c.cart_id LIKE %:keyword%")
//	List<Cart> searchByCartLikeA(@Param("keyword") String keyword);

	@Query("SELECT new com.tbtConcept.tbt.domain.CartProdDTO(c.user_id, c.product_id, c.cart_quan, "
			+ "p.product_name, p.product_price, p.product_stock, p.product_img1) "
			+ "FROM Cart c JOIN Product p ON c.product_id = p.product_id " + "WHERE c.user_id = :user_id "
			+ "ORDER BY c.product_id")
	List<CartProdDTO> perCartUser(@Param("user_id") String user_id);

	@Modifying
	@Transactional
	@Query(nativeQuery = true, value = "insert into cart VALUES (:user_id, :product_id, :cart_quan)"
			+ " ON DUPLICATE KEY UPDATE cart_quan = cart_quan+:cart_quan")
	int cartUpdateCount1(@Param("user_id") String user_id, @Param("product_id") int product_id, @Param("cart_quan") int cart_quan);
	
	@Modifying
	@Transactional
	@Query(nativeQuery = true, value = "insert into cart VALUES (:user_id, :product_id, :cart_quan)"
			+ " ON DUPLICATE KEY UPDATE cart_quan = :cart_quan")
	int cartUpdateCount2(@Param("user_id") String user_id, @Param("product_id") int product_id, @Param("cart_quan") int cart_quan);

}