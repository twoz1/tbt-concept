package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
	
	@GetMapping("/oListInsert")
	public void getorderListInsert() {

	}
	
	@PostMapping("/oListInsert")
	public String postorderListInsert(OrderList entity, Model model, RedirectAttributes rttr){
		System.out.println("********"+ entity);
		
		try {
			orderService.save(entity); 
			model.addAttribute("message", "상품등록 성공");
			System.out.println("** orderList insert 성공");
			return "성공";
		
		} catch (Exception e) {
			System.out.println("** OrderList insert Exception => " + e.toString());
			return "실패";
		}

	}
}

