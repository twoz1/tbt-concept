package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, String> {
	@Query("SELECT x FROM OrderDetail x order by x.order_id desc")
	List<OrderDetail> findAllDesc();
}
