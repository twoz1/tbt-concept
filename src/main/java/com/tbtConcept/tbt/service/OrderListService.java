package com.tbtConcept.tbt.service;


import java.util.List;

import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListService {
	
	
	List<OrderList> selectList();
	
	OrderList selectDetail(String id);
	
	String save(OrderList entity);
	
	String delete(String id);
	
	
	
}