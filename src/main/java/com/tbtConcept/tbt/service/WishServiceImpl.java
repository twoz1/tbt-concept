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
	public List<WishProdDTO> selectListDesc() {
		return repository.selectListDesc();
	}
	
	@Override
	public Wish selectDetail(WishId wish_id) {
		Optional<Wish> result = repository.findById(wish_id);
		
		if(result.isPresent()) {
			return result.get();
		}else {
			return null;
		}
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
