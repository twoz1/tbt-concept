package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.service.OrderListService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/order")
@RestController
public class OrderListRController {
	
	OrderListService orderService;
	
	@GetMapping("oListDesc")
	public List<OrderList> getOListDesc(Model model){
		return orderService.findAllDesc();
	}
}

