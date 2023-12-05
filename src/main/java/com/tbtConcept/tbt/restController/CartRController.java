package com.tbtConcept.tbt.restController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.CartService;
import com.tbtConcept.tbt.service.ProductService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/rCart")
@RestController
public class CartRController {
	
	CartService cartService;
	ProductService prodService;
	
	// Insert =====================================================
	@GetMapping("/cInsert")
	public void getCInsert() {

	}
	
	@PostMapping("/cInsert")
	public String postCInsert(@RequestBody Cart entity, Model model, RedirectAttributes rttr) {

		try {
			if (cartService.save(entity) > 0) {
				model.addAttribute("message", "장바구니등록 성공");
				System.out.println("** cart insert 성공");
				return "성공";
			} else {
				model.addAttribute("message", "장바구니등록 실패");
				return "실패";
			}
		} catch (Exception e) {
			System.out.println("** Cart insert Exception => " + e.toString());
			return "실패";
		}
	}
	
	
	@PostMapping("/cpJoinInsert")
	public ResponseEntity<?> postShowDetailCart(@PathVariable String user_id) {
		List<Cart> carts = cartService.perCartUser(user_id);
		List<Product> products = prodService.selectList();
		
		Map<String, Object> response = new HashMap<>();
		
		response.put("carts", carts);
		response.put("products", products);
		
		System.out.println(response);
		
		return ResponseEntity.ok(response);
	
	}
	
	
	
}
