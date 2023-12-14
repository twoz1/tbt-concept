package com.tbtConcept.tbt.restController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
import com.tbtConcept.tbt.entity.UserCoupon;
import com.tbtConcept.tbt.entity.UserCouponId;
import com.tbtConcept.tbt.service.CartService;
import com.tbtConcept.tbt.service.OrderDetailService;
import com.tbtConcept.tbt.service.OrderListService;
import com.tbtConcept.tbt.service.ProductService;
import com.tbtConcept.tbt.service.UserCouponService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/order")
@RestController
@Log4j2
public class OrderListRController {

	OrderListService orderService;
	OrderDetailService orderdService;
	ProductService productService;
	CartService cartService;
	UserCouponService userCouponService;

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
			orderList.setOrder_date(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"+" "+"HH:mm")));

			for (OrderDetail dentity : orderDetail) {
				dentity.setOrder_id(orderId);

				orderdService.save(dentity);

				System.out.println(dentity);

				Product product = productService.selectDetail(dentity.getProduct_id());
				int currentStock = product.getProduct_stock();
				int cartQuantity = dentity.getOrder_quan();
				int updatedStock = currentStock - cartQuantity;
				
				UserCoupon uentity = userCouponService.selectDetail(new UserCouponId(orderList.getCoupon_id(),orderList.getUser_id()));
				
				if(uentity != null) {
					uentity.setCouponEnd("사용완료");
				}
				

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

	// ==============================================================================================
	
	
	@DeleteMapping("orderlistdelete/{order_id}")
	public String orderlistdelete(@PathVariable("order_id") String id, OrderList entity, OrderDetail dentity, Model model) {
		entity.setOrder_id(id);
		dentity.setOrder_id(id);
		
		
		try {
			// 디테일 삭제
			orderdService.allDelte(id);
			log.info("~~ allDelete 성공 !!");
			// 총주문 삭제
			log.info("~~ orderList Delete 성공 ID =>" + orderService.delete(id));
			return "삭제성공";
			
		} catch (Exception e) {
			log.info("** allDelte Exception => "+e.toString());
			model.addAttribute("message", "~~ 주문정보 수정 실패 !! 다시 하세요 ~~");
			return "삭제실패";
		}
	
	}

}