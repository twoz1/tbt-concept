package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.service.OrderDetailService;
import com.tbtConcept.tbt.service.OrderListService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@Log4j2
@RequestMapping(value = "/order")
@RestController
public class OrderDetailRController {

	OrderDetailService orderDetailService;

	@GetMapping("oDetailListDesc")
	public List<OrderDetail> getOListDesc(Model model){
		return orderDetailService.findAllDesc();
	}

	// ====================================================================

	@GetMapping("/oDetailListInsert")
	public void getorderListInsert() {

	}

	@PostMapping("/oDetailListInsert")
	public String postorderListInsert(OrderDetail entity, Model model, RedirectAttributes rttr){
		System.out.println("********"+ entity);

		try {
			orderDetailService.save(entity); 
			model.addAttribute("message", "주문등록 성공");
			System.out.println("** orderList insert 성공");
			return "";

		} catch (Exception e) {
			System.out.println("** OrderList insert Exception => " + e.toString());
			return "실패";
		}
	}

	// ====================================================================

	@DeleteMapping("orderDetaildelete/{order_detail_id}")
	public ResponseEntity<?> axOrderListDelete(@PathVariable("order_detail_id") String id, OrderDetail entity) {
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
