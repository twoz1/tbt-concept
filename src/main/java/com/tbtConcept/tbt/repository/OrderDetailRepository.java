package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tbtConcept.tbt.domain.OrderProdDTO;
import com.tbtConcept.tbt.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer> {
	@Query(nativeQuery = true, 
			value =  "SELECT * FROM order_detail  where order_id = :id order by order_detail_id")
	List<OrderDetail> findByIdDetails(@Param("id") String order_id);
	
	@Transactional
	@Modifying
	@Query(nativeQuery = true, 
			value =  "delete FROM order_detail  where order_id = :id")
	void allDelete(@Param("id") String order_id);
	
	@Query("SELECT new com.tbtConcept.tbt.domain.OrderProdDTO(o.order_id, o.order_detail_id, p.product_img1, p.product_id, "
			+ "p.product_name, o.order_quan,  o.order_price,  o.review_state )"
			+ " From OrderDetail o JOIN Product p ON o.product_id = p.product_id " 
			+ "where order_id = :id order by order_detail_id")
	List<OrderProdDTO> perOrderUser(@Param("id") String order_id);
}
