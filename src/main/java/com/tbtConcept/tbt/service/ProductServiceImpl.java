package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
	
	private final ProductRepository repository;
	
	@Override
	public PageResultDTO<Product> selectList(PageRequestDTO requestDTO, String searchType, String keyword) {
		Pageable pageable = requestDTO.getPageable();

        Page<Product> result = repository.selectList(pageable, searchType, keyword);
		
		return new PageResultDTO<>(result);
	}
	
	@Override
	public List<Product> findAllDesc() {
		return repository.findAllDesc();
	}

	@Override
	public List<Product> selectSDesc(){
		return repository.selectSDesc();
	};

	@Override
	public List<Product> selectGDesc(){
		return repository.selectGDesc();
	};
	
	@Override
	public List<Product> searchByProductLikeA(String mSearBarKeyword) {
		return repository.searchByProductLikeA(mSearBarKeyword);
	}
	
	@Override
	public Product selectDetail(int id) {
		Optional<Product> result = repository.findById(id);
		
		if(result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}
	
	@Override
	public int save(Product entity) {
		repository.save(entity);
		return entity.getProduct_id();
	}
	
	@Override
	public int delete(int id) {
		repository.deleteById(id);
		return id;
	}
	
}
