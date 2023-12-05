package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.service.CartService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cart")
@Controller
public class CartController {

	CartService cartService;

	// List =====================================================

//	@GetMapping("/cartList")
//	public void getCartList(Model model) {
//		model.addAttribute("cartList", cartService.findAllDesc());
//	}
//	
//	// => cartList search
//	@GetMapping("/searchCartListA")
//	public String searchCartListA(Model model, @RequestParam("searchType") String searchType,
//									@RequestParam("keyword") String keyword) {
//		
//		System.out.println("searchType -> " + searchType +  ", keyword -> " + keyword);
//		
//		String uri = "master/cart/cartList";
//		List<Cart> searchList = cartService.searchByCartLikeA(keyword);
//		
//		if ("userId".equals(searchType)) {
//			searchList = cartService.searchByCartLikeU(keyword);
//		} else if ("prodId".equals(searchType)) {
//			searchList = cartService.searchByCartLikeP(keyword);
//		}
//		
//		model.addAttribute("cartList", searchList);
//		
//		return uri;
//	}

	// =====================================================
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
