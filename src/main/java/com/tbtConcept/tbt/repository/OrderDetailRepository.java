package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer> {
	@Query(nativeQuery = true, 
			value =  "SELECT * FROM order_detail  where order_id = :id order by order_detail_id desc")
	List<OrderDetail> findByIdDetails(@Param("id") String order_id);
	
	@Query(nativeQuery = true, value="SELECT * FROM order_detail Where order_id = :order_id")
	List<OrderList> userOrderList(@Param("order_id") String order_id);
	
}
