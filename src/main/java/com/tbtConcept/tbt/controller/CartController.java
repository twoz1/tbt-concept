package com.tbtConcept.tbt.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.tbtConcept.tbt.domain.CartProdDTO;
import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.CartId;
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
	@GetMapping("/cartList")
	public void getCartList(Model model, @RequestParam(value="page", defaultValue="1") int page,
			@RequestParam(value="searchType", defaultValue = "") String searchType, @RequestParam(value="keyword", defaultValue = "") String keyword) {
		
		
		PageRequestDTO requestDTO = PageRequestDTO.builder().page(page).size(15).build();
		PageResultDTO<CartProdDTO> resultDTO = cartService.selectList(requestDTO, searchType, keyword);
		
		model.addAttribute("cartList", resultDTO.getEntityList());
	    model.addAttribute("resultDTO", resultDTO);
	    model.addAttribute("searchType", searchType);
	    model.addAttribute("keyword", keyword);
	}

	
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
