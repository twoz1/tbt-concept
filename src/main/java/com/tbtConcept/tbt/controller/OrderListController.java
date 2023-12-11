package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.entity.UserCoupon;
import com.tbtConcept.tbt.service.OrderDetailService;
import com.tbtConcept.tbt.service.OrderListService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/master/order")
@Log4j2
@Controller
public class OrderListController {

	OrderListService orderService;
	OrderDetailService dorderService;

	@GetMapping("/orderList")
	public void getOrderList(Model model) {
		model.addAttribute("orderList", orderService.findAllDesc());
	}

	// ========================================================================

	@GetMapping("/orderListDetail")
	public String getOrderListDetail (Model model, OrderList entity, OrderDetail dentity, HttpServletRequest request) {
		model.addAttribute("orderListDetail", orderService.selectDetail(entity.getOrder_id()));
		model.addAttribute("orderDetailList", dorderService.findByIdDetails(entity.getOrder_id()));
		System.out.println("*********orderListDetail" + entity);
		if ("O".equals(request.getParameter("jCode"))) {
			return "master/order/orderListUpdate";
		} else {
			return "master/order/orderListDetail";
		}
	}

	// ========================================================================

	@GetMapping("/orderListInsert")
	public void getOrderListInsert() {

	}

	@PostMapping("/orderListInsert")
	public String postOrderListInsert(OrderList entity, Model model, RedirectAttributes rttr){
		String uri = "redirect:orderList";

		System.out.println("********" + entity);

		try {
			if (orderService.save(entity) != null) {
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
	@PostMapping(value="/orderListUpdate")
	public String posrMemberUpdate(HttpSession session,
			OrderList entity, Model model) {

		model.addAttribute("orderListDetail", entity);
		String uri="master/order/orderListDetail";

		try {
			log.info("** updat 성공 id => " + orderService.save(entity));
			session.setAttribute("loginName", entity.getOrder_id());
			model.addAttribute("message", "~~ 주문정보 수정 성공 ~~");
		} catch (Exception e) {
			log.info("** update Exception => "+e.toString());
			model.addAttribute("message", "~~ 주문정보 수정 실패 !! 다시 하세요 ~~");
			uri="master/order/orderListUpdate";
		}

		return uri;
	} 

	// ========================================================================


}
