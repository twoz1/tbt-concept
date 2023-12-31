package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.OrderProdDTO;
import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.repository.OrderDetailRepository;
import com.tbtConcept.tbt.repository.OrderListRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService {
	private final OrderDetailRepository repository;
	
	
	@Override
	public List<OrderProdDTO> perOrderUser(String order_id) {
		return repository.perOrderUser(order_id);
	}
	
	// @Transactional
	@Override
	public List<OrderDetail> findByIdDetails(String order_id) {
		return repository.findByIdDetails(order_id);
	}
	
	
	@Override
	public List<OrderDetail> selectList() {
		return repository.findAll();
	}
	
	@Override
	public OrderDetail selectDetail(int id) {
	Optional<OrderDetail> result = repository.findById(id);
		
		if(result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public int save(OrderDetail entity) {
		repository.save(entity);
		return entity.getOrder_detail_id();
	}
	@Override
	public int delete(int id) {
		repository.deleteById(id);
		return id;
	}
	
	@Override
	public String allDelte(String id) {
		repository.allDelete(id);
		return id;
	}
}
