package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.entity.Coupon;

public interface CouponService {
	
	@Transactional
	List<Coupon> selectList();

	Coupon selectDetail(int coupon_id);

	int save(Coupon entity);

	int delete(int Coupon_id);
	
}
