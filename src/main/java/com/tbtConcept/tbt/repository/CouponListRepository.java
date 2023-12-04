package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.CouponList;
import com.tbtConcept.tbt.entity.CouponListId;



public interface CouponListRepository extends JpaRepository<CouponList, CouponListId> {
	
	
	@Query("SELECT c FROM CouponList c where user_id=:user_id")
	List<CouponList> userCouponList(String user_id);
}
