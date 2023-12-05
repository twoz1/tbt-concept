package com.tbtConcept.tbt.restController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.Coupon;
import com.tbtConcept.tbt.entity.CouponList;
import com.tbtConcept.tbt.entity.CouponListId;
import com.tbtConcept.tbt.service.CouponListService;
import com.tbtConcept.tbt.service.CouponService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/coupon")
@RestController
@Log4j2
public class CouponRController {
	
	CouponService couponService;
	CouponListService couListService;
	
	@GetMapping("/cList")
	public List<Coupon> getPListDesc(Model model) {
		return couponService.selectList();
	}
	
	@GetMapping("/cUserList")
	public List<Object> getUserCouponList(Model model, @Param("user_id") String id) {
		
		System.out.println(id);
		return couListService.couponJoinList(id);
		
	}
	
	
	@PostMapping(value = "/cInsert")
	public String userCouponInsert(Model model, @RequestBody CouponList entity) {
		try {
			
			System.out.println(entity);
			
			CouponListId id = new CouponListId(entity.getCoupon_id(), entity.getUser_id());
			
			if(couListService.selectDetail(id) == null && couListService.save(entity) > 0) {
				return "발급완료";
			}else {
				return "기발급쿠폰";
			}
		} catch (Exception e) {
			log.info("** User CouponDownload Exception => " + e.toString());
			
			return "에러";
		}
	}
	
	
	
}
