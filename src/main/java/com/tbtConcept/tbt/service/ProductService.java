package com.tbtConcept.tbt.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Product;

public interface ProductService {
	
	PageResultDTO<Product> selectList(PageRequestDTO requestDTO, String searchType, String keyword);
	
	List<Product> findAllDesc();
	
	List<Product> selectSDesc();
	
	List<Product> selectGDesc();
	
	List<Product> searchByProductLikeA(String mSearBarKeyword);
	
	Product selectDetail(int id);
	
	int save(Product entity);
	
	int delete(int id);
	
}
