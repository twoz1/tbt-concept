package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;

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

import com.tbtConcept.tbt.entity.Faq;
import com.tbtConcept.tbt.service.FaqService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cs/")
@Controller
public class FaqController {
	
	FaqService faqService;
	
	// Insert =====================================================
	@GetMapping("/faqInsert")
	public void getFaqInsert() {

	}

	@PostMapping("/faqInsert")
	public String postFaqInsert(Faq entity, Model model, RedirectAttributes rttr) {

		String uri = "redirect:faqList";

		try {
			if (faqService.save(entity) > 0) {
				model.addAttribute("message", "FAQ등록 성공");
				System.out.println("** Faq insert 성공");
			} else {
				model.addAttribute("message", "FAQ등록 실패");
				uri = "master/cs/faqInsert";
			}
		} catch (Exception e) {
			System.out.println("** Faq insert Exception => " + e.toString());
		}

		return uri;
	}
	
	// List =====================================================

	@GetMapping("/faqList")
	public void getFaqList(Model model) {
		model.addAttribute("faqList", faqService.selectList());
	}
	
	// Detail =====================================================
	@GetMapping("/faqDetail")
	public String getFaqDetail(Model model, Faq entity, HttpServletRequest request) {

		model.addAttribute("faqDetail", faqService.selectDetail(entity.getFaq_id()));

		if ("U".equals(request.getParameter("jCode"))) {
			return "master/cs/faqUpdate";
		} else {
			return "master/cs/faqDetail";
		}

	}
	
	// Update =====================================================
	@GetMapping("/faqUpdate")
	public void getFaqUpdate(Model model, Faq entity, HttpServletRequest request) {
		model.addAttribute("faqDetail", faqService.selectDetail(entity.getFaq_id()));
	}
	
	@PostMapping("/faqUpdate")
	public void postFaqUpdate(Model model, Faq entity, HttpServletRequest request) {
		model.addAttribute("faqDetail", entity);
		
		try {
			if (faqService.save(entity) > 0) {
				model.addAttribute("message", "FAQ수정 성공");
				System.out.println("** FAQ update 성공");
			} else {
				model.addAttribute("message", "FAQ수정 실패");
			}
		} catch (Exception e) {
			System.out.println("** FAQ update Exception => " + e.toString());
		}
		
	}
	
	// Delete =====================================================
	@DeleteMapping("faqDelete/{faq_id}")
	public ResponseEntity<?> axFaqDelete(@PathVariable("faq_id") int id, Faq entity) {
		entity.setFaq_id(id);
		
		if (faqService.delete(id) > 0) {
			log.info("axFaqDelete HttpStatus.OK =>" + HttpStatus.OK);
			System.out.println("FAQ 삭제 성공");
			return new ResponseEntity<String>("[FAQ 삭제 성공]", HttpStatus.OK);
		} else {
			log.info("axFaqDelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
			System.out.println("FAQ 삭제 실패");
			return new ResponseEntity<String>("[FAQ 삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
	
	
	
	
	
	
	
}
