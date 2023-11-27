package com.tbtConcept.tbt.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.service.CartService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cart")
@Controller
public class CartController {

	CartService cartService;

	// =====================================================
	@GetMapping("/cartInsert")
	public void getCartInsert() {

	}

	@PostMapping("/cartInsert")
	public String postCartInsert(Cart entity, Model model, RedirectAttributes rttr) {

		// 팝업창에 따라서 구현해야될 것 같음
		// 장바구니로 이동하시겠습니까?
		// Y -> 장바구니로 / N -> 현재 상태로 유지 (product_detail)
		String uri = "redirect:cartList";

		try {
			if (cartService.save(entity) > 0) {
				model.addAttribute("message", "장바구니등록 성공");
				System.out.println("** cart insert 성공");
			} else {
				model.addAttribute("message", "장바구니등록 실패");
				uri = "master/cart/cartInsert";
			}
		} catch (Exception e) {
			System.out.println("** Cart insert Exception => " + e.toString());
		}

		return uri;
	}

	// =====================================================

	@GetMapping("/cartList")
	public void getCartList(Model model) {
		model.addAttribute("cartList", cartService.findAllDesc());
	}
	
	// => cartList search
	@GetMapping("/searchCartListA")
	public String searchCartListA(Model model, @RequestParam("searchType") String searchType,
									@RequestParam("keyword") String keyword) {
		
		System.out.println("searchType -> " + searchType +  ", keyword -> " + keyword);
		
		String uri = "master/cart/cartList";
		List<Cart> searchList = cartService.searchByCartLikeA(keyword);
		
		if ("userId".equals(searchType)) {
			searchList = cartService.searchByCartLikeU(keyword);
		} else if ("prodId".equals(searchType)) {
			searchList = cartService.searchByCartLikeP(keyword);
		}
		
		model.addAttribute("cartList", searchList);
		
		return uri;
	}

	// =====================================================
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
