package com.tbtConcept.tbt.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.OrderListService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/master/order")
@Controller
@Log4j2

public class OrderListController {
	
	OrderListService orderService;
	
	@GetMapping("/orderList")
	public void getOrderList(Model model) {
		model.addAttribute("orderList", orderService.selectList());
	}
	
	// ========================================================================
	
	@GetMapping("/orderDetail")
	public String getOrderDetail (Model model, OrderList entity, HttpServletRequest request) {
		model.addAttribute("orderDetail", orderService.selectDetail(entity.getOrder_id()));
		if ("U".equals(request.getParameter("jCode"))) {
			return "master/order/orderUpdate";
		} else {
			return "master/order/orderDetail";
		}
	}
	
	// ========================================================================
	
	@GetMapping("/orederListInsert")
	public void getOrderListInsert() {

	}
	
	@PostMapping("/orederListInsert")
	public String postOrderListInsert(OrderList entity, Model model, RedirectAttributes rttr)
									throws IOException{
		String uri = "redirect:orderList";
		
		
		try {
			if (orderService.save(entity) != null) {
				model.addAttribute("message", "상품등록 성공");
				System.out.println("** product insert 성공");
			} else {
				model.addAttribute("message", "상품등록 실패");
				uri = "master/order/orderInsert";
			}
		} catch (Exception e) {
			System.out.println("** OrderList insert Exception => " + e.toString());
		}
		return uri;

	}
	
	// ========================================================================
	
	@DeleteMapping("orderdelete/{order_id}")
	public ResponseEntity<?> axProductDelete(@PathVariable("order_id") String id, OrderList entity) {
		entity.setOrder_id(id);
		if (orderService.delete(id) != null) {
			log.info("axidelete HttpStatus.OK =>" + HttpStatus.OK);
			System.out.println("삭제 성공");
			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		} else {
			log.info("axidelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
			System.out.println("삭제 실패");
			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
	
}
