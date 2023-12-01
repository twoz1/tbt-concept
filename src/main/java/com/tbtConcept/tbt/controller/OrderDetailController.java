package com.tbtConcept.tbt.controller;

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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.service.OrderDetailService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/master/order")
@Log4j2
@Controller
public class OrderDetailController {

	OrderDetailService orderDetailService;

	@GetMapping("/orderDetailList")
	public void getOrderDetailList(Model model) {
		model.addAttribute("orderDetailList", orderDetailService.findAllDesc());
	}

	// ========================================================================


	@GetMapping("/orderDetailInsert")
	public void getOrderDetailInsert() {

	}

	@PostMapping("/orderDetailInsert")
	public String postOrderDetailInsert(OrderDetail entity, Model model, RedirectAttributes rttr){
		String uri = "redirect:orderList";


		
		try {
			if (orderDetailService.save(entity) != null) {
				model.addAttribute("message", "상품등록 성공");
				System.out.println("** orderList insert 성공");
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

	@PostMapping(value="/orderDetailUpdate")
	public String posrOrderDetailUpdate(HttpSession session,
			OrderDetail entity, Model model) {

		model.addAttribute("orderListDetail", entity);
		String uri="master/order/orderListDetail";

		try {
			log.info("** updat 성공 id => " + orderDetailService.save(entity));
			session.setAttribute("loginName", entity.getOrder_id());
			model.addAttribute("message", "~~ 회원정보 수정 성공 ~~");
		} catch (Exception e) {
			log.info("** update Exception => "+e.toString());
			model.addAttribute("message", "~~ 회원정보 수정 실패 !! 다시 하세요 ~~");
			uri="master/user/userUpdate";
		}

		return uri;
	} 

	// ========================================================================

	@DeleteMapping("orderDetaildelete/{order_detail_id}")
	public ResponseEntity<?> axOrderListDelete(@PathVariable("order_id") String id, OrderList entity) {
		entity.setOrder_id(id);
		if (orderDetailService.delete(id) != null) {
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
