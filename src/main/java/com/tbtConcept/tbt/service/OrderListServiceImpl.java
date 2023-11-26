package com.tbtConcept.tbt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.repository.OrderListRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderListServiceImpl implements OrderListService {
	
	private final OrderListRepository repository;
	
	@Override
	public List<OrderList> selectList() {
		return repository.findAll();
	}
	
	@Override
	public OrderList selectDetail(String id) {
		 return repository.findById(id).get();
	}
	
	@Override
	public String save(OrderList entity) {
		repository.save(entity);
		
		return entity.getOrder_id();
	}
	
	@Override
	public String delete(String id) {
		repository.deleteById(id);
		return id;
	}
		


}
