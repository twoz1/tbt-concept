package com.tbtConcept.tbt.service;

import java.util.List;


import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.UserCoupon;
import com.tbtConcept.tbt.entity.UserCouponId;


public interface UserCouponService {
	
	
	PageResultDTO<UserCoupon> selectList(PageRequestDTO requestDTO);
		
	List<Object> couponJoinList(String user_id);
	
	List<UserCoupon> couponListInUser(String user_id);

	UserCoupon selectDetail(UserCouponId id);

	int save(UserCoupon entity);		

	int delete(UserCouponId Coupon_id);
	
	void deleteByCouponId(int coupon_id);
	
}
