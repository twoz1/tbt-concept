package com.tbtConcept.tbt.restController;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.domain.CartProdDTO;
import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.entity.CartId;
import com.tbtConcept.tbt.service.CartService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/rCart")
@RestController
public class CartRController {

	CartService cartService;

	// Insert =====================================================
	@GetMapping("/cInsert")
	public void getCInsert() {

	}

	@PostMapping("/cInsert")
	public String postCInsert(@RequestBody Cart entity, Model model, RedirectAttributes rttr) {

		try {
			if (cartService.cartUpdateCount(entity.getUser_id(), entity.getProduct_id(), entity.getCart_quan()) > 0) {
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
	
	@GetMapping("/cpJList/{loginUser}")
	public List<CartProdDTO> getShowDetailCart(@PathVariable("loginUser") String user_id, Model model) {
		return cartService.perCartUser(user_id);
	}
	
	// Delete =====================================================
	@DeleteMapping("/qDelete/{user_id}")
	public ResponseEntity<?> axPDelete(@PathVariable("user_id") String user_id, @RequestParam("product_id") int[] product_id, Cart entity) {
		
		String encodedUserId = URLEncoder.encode(user_id, StandardCharsets.UTF_8);
		
		System.out.println(product_id);
		
		if (product_id != null) {
			for (int p : product_id) {
				cartService.delete(new CartId(encodedUserId, p));
	        }
			System.out.println("삭제 성공");
			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		} else {
			System.out.println("삭제 실패");
			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
	
	
	

}
