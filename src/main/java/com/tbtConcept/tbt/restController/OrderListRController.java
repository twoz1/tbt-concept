package com.tbtConcept.tbt.restController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.domain.OrderRequest;
import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.service.AddressService;
import com.tbtConcept.tbt.service.OrderDetailService;
import com.tbtConcept.tbt.service.OrderListService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@Log4j2
@RequestMapping(value = "/order")
@RestController
public class OrderListRController {

	OrderListService orderService;
	OrderDetailService orderdService;
	AddressService addressService;

	// ==============================================================================================

	@PostMapping("/oListInsert")
	public String postorderListInsert(@RequestBody OrderRequest request) {

		OrderList orderList = request.getOrderList();
		List<OrderDetail> orderDetail = request.getOrderDetail();

		System.out.println("******** entity" + orderList);
		System.out.println("******** dentity" + orderDetail);

		try {
			Random rn = new Random();
			String num = rn.nextInt(1000) + "";

			String orderId = "T" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")) + "B"
					+ num;

			orderList.setOrderId(orderId);
			orderList.setOrder_date(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));

			for (OrderDetail dentity : orderDetail) {
				dentity.setOrder_id(orderId);

				orderdService.save(dentity);

				System.out.println(dentity);
			}

			orderService.save(orderList);

			System.out.println("** orderList insert 성공");
			return "완료";

		} catch (Exception e) {
			System.out.println("** OrderList insert Exception => " + e.toString());
			return "실패";
		}
	}
}

// ==============================================================================================
