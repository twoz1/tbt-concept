package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;

public interface OrderDetailService {
	
	@Transactional
	List<OrderDetail> findByIdDetails(String order_id);
	
	List<OrderDetail> selectList();
	
	OrderDetail selectDetail(int id);
	
	int save(OrderDetail entity);
	
	int delete(int id);
	

	
	
}
