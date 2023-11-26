package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;

public interface OrderDetailService {
	
	List<OrderDetail> selectList();
	
	OrderDetail selectDetail(String id);
	
	String save(OrderDetail entity);
	
	String delete(String id);
	
	
	
}
