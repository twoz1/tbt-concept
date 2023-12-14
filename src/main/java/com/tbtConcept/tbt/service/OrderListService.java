package com.tbtConcept.tbt.service;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListService {
	
    @Transactional
//    List<OrderList> findAllDesc();
    Page<OrderList> findAllDescPage(Pageable pageable);
	
	List<OrderList> selectList();
	
	List<OrderList> userOrderList(String id);
	
	OrderList selectDetail(String id);
	
	String save(OrderList entity);
	
	String delete(String id);
	
	
	
	
}
