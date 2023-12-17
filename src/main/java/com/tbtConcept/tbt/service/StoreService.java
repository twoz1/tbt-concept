package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Store;

public interface StoreService {
	
	List<Store> selectList();

	PageResultDTO<Store> selectList(PageRequestDTO requestDTO, String searchType, String keyword);
	
	Store selectDetail(String store_id);

	String save(Store entity);

	String delete(String store_id);
}
