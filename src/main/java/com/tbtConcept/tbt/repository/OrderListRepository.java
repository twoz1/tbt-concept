package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListRepository extends JpaRepository<OrderList, String> {
	
}
