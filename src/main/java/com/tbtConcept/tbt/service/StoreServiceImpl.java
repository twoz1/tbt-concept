package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.entity.Store;
import com.tbtConcept.tbt.repository.StoreRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService {
	private final StoreRepository repository;

	@Override
	public List<Store> selectList() {
		return repository.findAll();
	}
	
	@Override
	public PageResultDTO<Store> selectList(PageRequestDTO requestDTO, String searchType, String keyword) {
		Pageable pageable = requestDTO.getPageable();

        Page<Store> result = repository.selectList(pageable, searchType, keyword);
		
		return new PageResultDTO<>(result);
	}
	
	@Override
	public Store selectDetail(String store_id) {
		Optional<Store> result = repository.findById(store_id);
		
		if(result.isPresent()) {
			return result.get();
		}else {
			return null;
		}
	}
	
	@Override
	public String save(Store entity) {
		repository.save(entity);
		return entity.getStore_id();
	}
	
	@Override
	public String delete(String store_id) {
		repository.deleteById(store_id);
		return store_id;
	}

}
