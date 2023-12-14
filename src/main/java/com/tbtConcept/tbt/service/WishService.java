package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import com.tbtConcept.tbt.domain.WishProdDTO;
import com.tbtConcept.tbt.entity.Wish;
import com.tbtConcept.tbt.entity.WishId;

public interface WishService {
	
	List<WishProdDTO> selectListDesc(String user_id);

	Optional<Wish> selectDetail(WishId wish_id);

	int save(Wish entity);

	WishId delete(WishId wish_id);
	
}
