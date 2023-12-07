package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Coupon;
import com.tbtConcept.tbt.entity.UserCoupon;
import com.tbtConcept.tbt.service.UserCouponService;
import com.tbtConcept.tbt.service.CouponService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value="/master/coupon")
@Controller
public class CouponController {
	
	CouponService couponService;
	UserCouponService couListService;	
	
	@GetMapping("/couponList")
	public void getcouponList(Model model) {
		model.addAttribute("couponList", couponService.selectList());
	}
	
	@GetMapping("/couponDownList")
	public void getUserCList(Model model) {
		PageRequestDTO requestDTO = PageRequestDTO.builder().page(1).size(5).build();
		
        PageResultDTO<UserCoupon> resultDTO = couListService.selectList(requestDTO);
		
		model.addAttribute("couponDownList", resultDTO.getEntityList());
	}
	
	// ==============================================================
	
	@GetMapping("/couponInsert")
	public void getcouponInsert() {
		
	}
	
	@PostMapping("/couponInsert")
	public String postcouponInsert(Coupon entity, Model model) {
		String uri = "redirect:couponList";
		
		try {	
			if (couponService.save(entity) > 0) {
				model.addAttribute("message", "쿠폰등록 성공");
			}else {
				model.addAttribute("message", "쿠폰등록 실패");
				uri = "master/coupon/couponInsert";
			}
			
		} catch (Exception e) {
			System.out.println("** coupon insert Exception => " + e.toString());
		}
		
		return uri;
	}
	
	// ==============================================================
	
	@GetMapping("/couponDetail")
	public String getProductDetail(Model model, Coupon entity, HttpServletRequest request) {

		model.addAttribute("couponDetail", couponService.selectDetail(entity.getCoupon_id()));

		if ("U".equals(request.getParameter("jCode"))) {
			return "master/coupon/couponUpdate";
		} else {
			return "master/coupon/couponDetail";
		}

	}
	
	// ==============================================================
	
	@PostMapping("/couponUpdate")
	public String getProductUpdate(Model model, HttpSession session, Coupon entity) {

		model.addAttribute("couponDetail", entity);
		String uri = "master/coupon/couponDetail";

		try {
			if (couponService.save(entity) > 0) {
				model.addAttribute("message", "쿠폰수정 성공");
				System.out.println("** coupon update 성공");
			} else {
				model.addAttribute("message", "쿠폰수정 실패");
				uri = "master/coupon/couponUpdate";
			}
		} catch (Exception e) {
			System.out.println("** coupon update Exception => " + e.toString());
		}

		return uri;
	}
	
	@DeleteMapping("coupondelete/{coupon_id}")
	public ResponseEntity<?> axcouponDelete(@PathVariable("coupon_id") int id, Coupon entity) {

		if (couponService.delete(id) > 0) {
			couListService.deleteByCouponId(id);
			System.out.println("삭제 성공");
			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		} else {
			System.out.println("삭제 실패");
			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
	
	
}
