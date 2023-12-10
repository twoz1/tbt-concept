package com.tbtConcept.tbt.restController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.domain.OrderRequest;
import com.tbtConcept.tbt.entity.CartId;
import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.CartService;
import com.tbtConcept.tbt.service.OrderDetailService;
import com.tbtConcept.tbt.service.OrderListService;
import com.tbtConcept.tbt.service.ProductService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/order")
@RestController
public class OrderListRController {

	OrderListService orderService;
	OrderDetailService orderdService;
	ProductService productService;
	CartService cartService;

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

			String orderId = "T" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")) + "B" + num;

			orderList.setOrder_id(orderId);
			orderList.setOrder_date(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));

			for (OrderDetail dentity : orderDetail) {
				dentity.setOrder_id(orderId);

				orderdService.save(dentity);

				System.out.println(dentity);

				Product product = productService.selectDetail(dentity.getProduct_id());
				int currentStock = product.getProduct_stock();
				int cartQuantity = dentity.getOrder_quan();


				int updatedStock = currentStock - cartQuantity;
				try {
					cartService.delete(new CartId(orderList.getUser_id(), dentity.getProduct_id()));
				} catch (EmptyResultDataAccessException ex) {
					// 예외가 발생해도 주문(OrderList) 정보는 저장되어야 하므로 로깅만 수행
					System.out.println("** Cart 엔터티를 찾지 못했습니다. User_id: " + orderList.getUser_id() + ", Product_id: " + dentity.getProduct_id());
				}

				if (updatedStock >= 0) {
					product.setProduct_stock(updatedStock);
					productService.save(product);
				} else {
					throw new RuntimeException("제품 ID(" + product.getProduct_id() + ")에 대한 재고가 부족합니다.");
				}
			}

			orderService.save(orderList);


			System.out.println("** orderList insert 성공");
			return "완료";

		} catch (Exception e) {
			System.out.println("** OrderList insert Exception => " + e.toString());
			return "실패";
		}
	}


	// ==============================================================================================

	@GetMapping("/userOrderList")
	public List<OrderList> userOrderList(Model model, @RequestParam("user_id") String id) {

		return orderService.userOrderList(id);
	}


	@GetMapping("/userOrderDetail")
	public List<OrderDetail> userOrderDetailL(Model model, @RequestParam("id") String id) {

		return orderdService.findByIdDetails(id);
	}


}