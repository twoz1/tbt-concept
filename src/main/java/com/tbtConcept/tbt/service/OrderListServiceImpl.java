package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.repository.OrderListRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderListServiceImpl implements OrderListService {

	private final OrderListRepository repository;

	@Override
	public PageResultDTO<OrderList> findAllDesc(PageRequestDTO requestDTO) {
        Pageable pageable = requestDTO.getPageable(Sort.by("orderId").descending());

        Page<OrderList> result = repository.findAll(pageable);
        
        return new PageResultDTO<>(result);
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
		return entity.getOrderId();
	}



	@Override
	public String delete(String id) {
		repository.deleteById(id);
		return id;
	}



}
