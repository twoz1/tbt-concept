package com.tbtConcept.tbt.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.entity.QnA1on1;
import com.tbtConcept.tbt.service.QnA1on1Service;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cs")
@Controller
public class QnA1on1Controller {
	
	QnA1on1Service qna1on1Service;
	
	// List =====================================================
	@GetMapping("/qna1on1List")
	public void getQList(Model model) {
		model.addAttribute("qna1on1List", qna1on1Service.selectList());
	}
	
	
	// Delete =====================================================
	@DeleteMapping("qna1on1delete/{qna_id}")
	public ResponseEntity<?> axProductDelete(@PathVariable("qna_id") int id, QnA1on1 entity) {
		entity.setQna_id(id);
		if (qna1on1Service.delete(id) > 0) {
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
