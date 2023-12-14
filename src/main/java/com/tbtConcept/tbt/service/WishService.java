package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.domain.WishProdDTO;
import com.tbtConcept.tbt.entity.Wish;
import com.tbtConcept.tbt.entity.WishId;

public interface WishService {
	
	List<WishProdDTO> selectListDesc();

	Wish selectDetail(WishId wish_id);

	int save(Wish entity);

	WishId delete(WishId wish_id);
	
}
