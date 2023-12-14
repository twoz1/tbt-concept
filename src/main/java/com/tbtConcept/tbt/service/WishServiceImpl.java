package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.WishProdDTO;
import com.tbtConcept.tbt.entity.Wish;
import com.tbtConcept.tbt.entity.WishId;
import com.tbtConcept.tbt.repository.WishRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WishServiceImpl implements WishService {
	private final WishRepository repository;

	@Override
	public List<WishProdDTO> selectListDesc(String user_id) {
		return repository.selectListDesc(user_id);
	}
	
	@Override
	public Optional<Wish> selectDetail(WishId wish_id) {
		return repository.findById(wish_id);
		
	
	}
	
	@Override
	public int save(Wish entity) {
		repository.save(entity);
		return entity.getProduct_id();
	}
	
	@Override
	public WishId delete(WishId wish_id) {
		repository.deleteById(wish_id);
		
		return wish_id;
	}

}
