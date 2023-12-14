package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;
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
	public void getOrderList(@RequestParam(name = "id", defaultValue = "") String id,
			@RequestParam(name = "page", defaultValue = "1") int page,
			@RequestParam(name = "size", defaultValue = "1") int size,
			Model model) {
		Pageable pageable = PageRequest.of(Math.max(page - 1, 0), size);
		Page<OrderList> findAllDescPage = orderService.findAllDescPage(pageable);


		model.addAttribute("findAllDescPage", findAllDescPage.getContent());
		model.addAttribute("itemPage", findAllDescPage);
		model.addAttribute("currentPage", findAllDescPage.getNumber() + 1);
		model.addAttribute("totalPages", findAllDescPage.getTotalPages());
		model.addAttribute("totalItems", findAllDescPage.getTotalElements());

		log.info("faq_service.getFaqList(category, pageable) : " + orderService.findAllDescPage(pageable));
		log.info("faqPageList.getContent() : " + findAllDescPage.getContent());
		log.info("faqPageList : " + findAllDescPage);
		log.info("faqPageList.getNumber() : " + findAllDescPage.getNumber());
		log.info("faqPageList.getTotalElements() : " + findAllDescPage.getTotalElements());
	}
	//	public void getOrderList(Model model) {
	//		model.addAttribute("orderList", orderService.findAllDesc());
	//	}

	// ========================================================================

	@GetMapping("/orderListDetail")
	public String getOrderListDetail (String order_id, Model model, OrderList entity, OrderDetail dentity, HttpServletRequest request) {
		model.addAttribute("orderListDetail", orderService.selectDetail(entity.getOrder_id()));
		model.addAttribute("orderDetailList", dorderService.perOrderUser(order_id));
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
