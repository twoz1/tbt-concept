package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListRepository extends JpaRepository<OrderList, String> {
	@Query("SELECT o FROM OrderList o order by o.order_id desc")
	List<OrderList> findAllDesc();
}
