package com.tbtConcept.tbt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.repository.OrderDetailRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService {
	private final OrderDetailRepository repository;


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