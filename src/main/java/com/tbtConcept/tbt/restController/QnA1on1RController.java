package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.entity.QnA1on1;
import com.tbtConcept.tbt.service.QnA1on1Service;

//@AllArgsConstructor
@RequestMapping(value = "/qna1on1")
@RestController
public class QnA1on1RController {
	
	QnA1on1Service qna1on1Service;
	
	// =====================================================
	@GetMapping("/qna1on1Insert")
	public void getqna1on1Insert() {

	}
	
	@PostMapping("/qna1on1Insert")
	public String postqna1on1Insert(QnA1on1 entity, Model model, RedirectAttributes rttr) {
		
		try {
			if (qna1on1Service.save(entity) > 0) {
				model.addAttribute("message", "1:1문의 등록성공");
				System.out.println("** QnA1on1 insert 성공");
				return "성공";
			} else {
				model.addAttribute("message", "장바구니등록 실패");
				return "실패";
			}
		} catch (Exception e) {
			System.out.println("** QnA1on1 insert Exception => " + e.toString());
			return "실패";
		}
		
	}

	// =====================================================
	
	@PostMapping("/qna1on1List")
	public List<QnA1on1> postQList(Model model) {
		return qna1on1Service.selectList();
	}

	
}
