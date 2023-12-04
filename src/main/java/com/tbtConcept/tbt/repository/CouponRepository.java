package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tbtConcept.tbt.entity.Coupon;


public interface CouponRepository extends JpaRepository<Coupon, Integer> {
	
	@Query("SELECT c FROM Coupon c order by c.coupon_id desc")
	List<Coupon> findAllDesc();
}
