package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.service.QnA1on1Service;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cs")
@Controller
public class QnA1on1Controller {
	
	QnA1on1Service qna1on1Service;
	
	@GetMapping("/qna1on1List")
	public void getQList(Model model) {
		model.addAttribute("qna1on1List", qna1on1Service.selectList());
	}
	
	
	
	
	
	
}
