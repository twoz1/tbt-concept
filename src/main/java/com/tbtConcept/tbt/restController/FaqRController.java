package com.tbtConcept.tbt.restController;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.Faq;
import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.entity.QnA1on1;
import com.tbtConcept.tbt.service.FaqService;
import com.tbtConcept.tbt.service.QnA1on1Service;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/faq")
@RestController
@Log4j2
public class FaqRController {
	FaqService faqService;

	// List =====================================================
	@GetMapping("/fList")
	public List<Faq> getFList(Model model) {
		return faqService.selectList();
	}
	
	// Detail =====================================================
	@PostMapping("/fDetail/{faq_id}")
	public Faq postFDetail(@PathVariable("product_id") int id, Model model) {
		return faqService.selectDetail(id);
	}
	

}
