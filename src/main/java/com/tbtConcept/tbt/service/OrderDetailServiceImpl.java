package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.repository.OrderDetailRepository;
import com.tbtConcept.tbt.repository.OrderListRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService {
	private final OrderDetailRepository repository;
	
	
	@Override
	public List<OrderDetail> selectList() {
		return repository.findAll();
	}
	
	@Override
	public OrderDetail selectDetail(String id) {
	Optional<OrderDetail> result = repository.findById(id);
		
		if(result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public String save(OrderDetail entity) {
		repository.save(entity);
		return entity.getOrder_detail_id();
	}
	@Override
	public String delete(String id) {
		repository.deleteById(id);
		return id;
	}
}
