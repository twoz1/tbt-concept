package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.service.OrderListService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/master/order")
@Controller

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
	
}
