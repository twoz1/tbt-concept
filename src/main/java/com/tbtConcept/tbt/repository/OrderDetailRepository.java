package com.tbtConcept.tbt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tbtConcept.tbt.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, String> {

}
