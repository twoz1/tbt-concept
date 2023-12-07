package com.tbtConcept.tbt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.UserCoupon;
import com.tbtConcept.tbt.entity.UserCouponId;



public interface UserCouponRepository extends JpaRepository<UserCoupon, UserCouponId> {
	
	@Query(value = "SELECT c.coupon_id, c.coupon_name, c.coupon_disc, cl.user_id, cl.coupon_start, cl.coupon_end FROM coupon_list cl JOIN coupon c ON c.coupon_id = cl.coupon_id WHERE cl.user_id = :user_id", nativeQuery = true)
	List<Object> couponJoinList(@Param("user_id") String userId);
	
	@Query("SELECT cl FROM UserCoupon cl WHERE cl.user_id=:user_id")
	List<UserCoupon> UserCouponInUser(String user_id);
	
	@Query("SELECT c FROM UserCoupon c order by coupon_start desc")
	List<UserCoupon> selectList();
	
	@Transactional
	@Modifying
	@Query("DELETE FROM UserCoupon c WHERE c.coupon_id = :coupon_id")
	void deleteByCouponId(@Param("coupon_id") int coupon_id);
	
	Page<UserCoupon> findAll(Specification<UserCoupon> spec, Pageable pageable);
}
