package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListRepository extends JpaRepository<OrderList, String> {
	
	@Query(nativeQuery = true, value = "SELECT * FROM order_list WHERE user_id = :id ORDER BY order_date DESC")
	List<OrderList> userOrderList(@Param("id") String id);
}
