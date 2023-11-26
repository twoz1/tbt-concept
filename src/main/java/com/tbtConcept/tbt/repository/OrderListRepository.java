package com.tbtConcept.tbt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListRepository extends JpaRepository<OrderList, String> {
	
}
