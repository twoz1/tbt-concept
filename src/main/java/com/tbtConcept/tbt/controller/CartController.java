package com.tbtConcept.tbt.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.domain.CartProdDTO;
import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.entity.CartId;
import com.tbtConcept.tbt.entity.News;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.CartService;
import com.tbtConcept.tbt.service.ProductService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cart")
@Controller
public class CartController {

	CartService cartService;
	ProductService prodService;

	// List =====================================================
	@GetMapping("/cartList")
	public List<Cart> getShowDetailCart(Model model) {
		return cartService.selectList();
	}

	// search =====================================================

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

	
	// Delete =====================================================
	@DeleteMapping("/cartDelete/{user_id}/{product_id}")
	public ResponseEntity<?> axCartDelete(@PathVariable("user_id") String user_id, @PathVariable("product_id") int product_id) {
		
		System.out.println(user_id + product_id);
		
		if (cartService.delete(new CartId(user_id, product_id)) != null) {
			log.info("cartDelete HttpStatus.OK =>" + HttpStatus.OK);
			System.out.println("Cart 삭제 성공");
			return new ResponseEntity<String>("[Cart 삭제 성공]", HttpStatus.OK);
		} else {
			log.info("cartDelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
			System.out.println("Cart 삭제 실패");
			return new ResponseEntity<String>("[Cart 삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
	
	
	
	
	
	
}
