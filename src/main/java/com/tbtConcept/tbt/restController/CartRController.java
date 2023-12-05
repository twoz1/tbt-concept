package com.tbtConcept.tbt.restController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.domain.CartProdDTO;
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

//	@PostMapping("/cpJoinInsert")
//	public ResponseEntity<?> postShowDetailCart(@PathVariable String user_id) {
//		List<Cart> carts = cartService.perCartUser(user_id);
//		List<Product> products = prodService.selectList();
//
//		Map<Integer, Product> productMap = new HashMap<>();
//		for (Product product : products) {
//			productMap.put(product.getId(), product);
//		}
//
//		List<Map<String, Object>> result = new ArrayList<>();
//		for (Cart cart : carts) {
//			Map<String, Object> cartInfo = new HashMap<>();
//
//			Product product = productMap.get(cart.getProduct_id());
//
//			// 결과에 상품 정보 추가
//			cartInfo.put("cart", cart);
//			cartInfo.put("product", product);
//
//			// 결과 목록에 추가
//			result.add(cartInfo);
//		}
//
//		// 최종 결과 반환
//		return ResponseEntity.ok(result);
//
//	}
	
	@GetMapping("/cpJList/{loginUser}")
	public List<CartProdDTO> postShowDetailCart(@PathVariable("loginUser") String user_id, Model model) {
		return cartService.perCartUser(user_id);
	}

}
