package com.tbtConcept.tbt.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.entity.Cart;
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

//	@GetMapping("/cartList")
//	public void getCartList(Model model) {
//		model.addAttribute("cartList", cartService.selectList());
//	}
	
//	@GetMapping("/cpJoinList")
//	public ResponseEntity<?> postShowDetailCart() {
//		Map<String, List> cartMap = new HashMap<>();
//		
//		List<Cart> carts = cartService.selectList();
//		List<Product> products = null;
//
//		for (Cart cart : carts) {
//			products.add(prodService.selectDetail(cart.getProduct_id()));
//		}
//		
//		cartMap.put("cart", carts);
//		cartMap.put("product", products);
//		
//		return ResponseEntity.ok(cartMap);
//
//	}
	
	@GetMapping("/cpJoinList")
	public ResponseEntity<?> postShowDetailCart() {
	    Map<String, List<?>> cartMap = new HashMap<>();

	    List<Cart> carts = cartService.selectList();
	    List<Product> products = new ArrayList<>();

	    for (Cart cart : carts) {
	        products.add(prodService.selectDetail(cart.getProduct_id()));
	    }

	    cartMap.put("cart", carts);
	    cartMap.put("product", products);

	    return ResponseEntity.ok(cartMap);
	}


	// =====================================================
	
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




}
