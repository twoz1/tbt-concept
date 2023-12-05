package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.CouponList;
import com.tbtConcept.tbt.entity.CouponListId;


public interface CouponListService {
	
	
	List<CouponList> selectList();
		
	List<CouponList> userCouponList(String user_id);

	CouponList selectDetail(CouponListId id);

	int save(CouponList entity);		

	int delete(CouponListId Coupon_id);
}