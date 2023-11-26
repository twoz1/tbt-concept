package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.Store;

public interface StoreService {
	
	List<Store> selectList();

	Store selectDetail(String store_id);

	String save(Store entity);

	String delete(String store_id);
}
