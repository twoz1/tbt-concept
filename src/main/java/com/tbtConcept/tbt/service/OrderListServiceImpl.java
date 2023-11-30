package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.repository.OrderListRepository;
import com.tbtConcept.tbt.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderListServiceImpl implements OrderListService {

	private final OrderListRepository repository;

	@Transactional
	@Override
	public List<OrderList> findAllDesc() {
		return repository.findAllDesc();
	}
	
	@Override
	public List<OrderList> selectList() {
		return repository.findAll();
	}

	@Override
	public OrderList selectDetail(String id) {
		Optional<OrderList> result = repository.findById(id);
		
		if ( result.isPresent() ) {
			return result.get();
		}else {
			return null;
		}
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
