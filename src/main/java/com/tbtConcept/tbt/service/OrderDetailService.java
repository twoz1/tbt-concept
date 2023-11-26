package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.OrderDetail;

public interface OrderDetailService {
	
	
	String save(OrderDetail entity);
	
	String delete(String id);
	
	
	
}
