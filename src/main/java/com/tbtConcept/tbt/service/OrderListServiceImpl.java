package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.repository.OrderListRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderListServiceImpl implements OrderListService {

	private final OrderListRepository repository;

    @Transactional
    @Override
    public Page<OrderList> findAllDescPage(Pageable pageable) {
    	return repository.findAllDesc(pageable);
    }
    
//    public List<OrderList> findAllDesc() {
//    	return repository.findAllDesc();
//    }
    
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
	public List<OrderList> userOrderList(String id){
		
		return repository.userOrderList(id);
	};

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
