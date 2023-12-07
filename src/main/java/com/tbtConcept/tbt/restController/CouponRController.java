package com.tbtConcept.tbt.restController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.Coupon;
import com.tbtConcept.tbt.entity.UserCoupon;
import com.tbtConcept.tbt.entity.UserCouponId;
import com.tbtConcept.tbt.service.CouponService;
import com.tbtConcept.tbt.service.UserCouponService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/coupon")
@RestController
@Log4j2
public class CouponRController {
	
	CouponService couponService;
	UserCouponService couListService;
	
	@GetMapping("/cList")
	public List<Coupon> getPListDesc(Model model) {
		return couponService.selectList();
	}
	
	@GetMapping("/cUserList")
	public List<Object> getUserCouponList(Model model, @RequestParam("user_id") String id) {
		
		System.out.println(id);
		return couListService.couponJoinList(id);
		
	}
	
	
	@PostMapping(value = "/cInsert")
	public String userCouponInsert(Model model, @RequestBody UserCoupon entity) {
		try {
			
			System.out.println(entity);
			
			UserCouponId id = new UserCouponId(entity.getCoupon_id(), entity.getUser_id());

			entity.setCouponStart(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
			entity.setCouponEnd(LocalDateTime.now().plusYears(1).format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
			
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
