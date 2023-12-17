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
import org.springframework.web.bind.annotation.RequestParam;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
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
	public void getFaqList(Model model, @RequestParam(value="page", defaultValue="1") int page,
			@RequestParam(value="searchType", defaultValue = "") String searchType, @RequestParam(value="keyword", defaultValue = "") String keyword) {
		
		PageRequestDTO requestDTO = PageRequestDTO.builder().page(page).size(15).build();
		PageResultDTO<QnA1on1> resultDTO = qna1on1Service.findAllDescPage(requestDTO, searchType, keyword);
		
		model.addAttribute("qna1on1List", resultDTO.getEntityList());
	    model.addAttribute("resultDTO", resultDTO);
	    model.addAttribute("searchType", searchType);
	    model.addAttribute("keyword", keyword);
	}
	
	// Detail =====================================================
	@GetMapping("/qna1on1Update")
	public void getQnA1on1Update(Model model, QnA1on1 entity, HttpServletRequest request) {
		model.addAttribute("qna1on1Detail", qna1on1Service.selectDetail(entity.getQna_id()));
		
	}
	
	@PostMapping("/qna1on1Update")
	public void postQnA1on1Update(Model model, QnA1on1 entity, HttpServletRequest request) {
		model.addAttribute("qna1on1Detail", entity);
		System.out.println("**** qna1on1 update => " + entity);
		try {
			if (qna1on1Service.save(entity) > 0) {
				model.addAttribute("message", "QnA수정 성공");
				System.out.println("** QnA1on1 update 성공");
			} else {
				model.addAttribute("message", "QnA수정 실패");
			}
		} catch (Exception e) {
			System.out.println("** QnA1on1 update Exception => " + e.toString());
		}
		
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
