package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.CouponList;
import com.tbtConcept.tbt.entity.CouponListId;



public interface CouponListRepository extends JpaRepository<CouponList, CouponListId> {
	
	
	@Query(value = "SELECT c.coupon_id, c.coupon_name, c.coupon_disc, cl.user_id, cl.coupon_start, cl.coupon_end FROM coupon_list cl JOIN coupon c ON c.coupon_id = cl.coupon_id WHERE cl.user_id = :user_id", nativeQuery = true)
	List<Object> couponJoinList(@Param("user_id") String userId);
	
	@Query("SELECT cl FROM CouponList cl WHERE cl.user_id=:user_id")
	List<CouponList> couponListInUser(String user_id);
	
	@Query("SELECT c FROM CouponList c order by coupon_start desc")
	List<CouponList> selectList();
	
	@Modifying
	@Query("DELETE FROM CouponList c WHERE c.coupon_id = :coupon_id")
	void deleteByCouponId(@Param("coupon_id") int coupon_id);
}
