package com.tbtConcept.tbt.restController;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.QnA1on1;
import com.tbtConcept.tbt.service.QnA1on1Service;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value = "/qna1on1")
@RestController
public class QnA1on1RController {
	
	QnA1on1Service qna1on1Service;
	
	// Insert =====================================================
	@GetMapping("/qna1on1Insert")
	public void getqna1on1Insert() {

	}
	
	@PostMapping("/qna1on1Insert")
	public String postqna1on1Insert(QnA1on1 entity, Model model, RedirectAttributes rttr) throws IOException {
		System.out.println("postqna1on1Insert 확인 => " + entity);
		
		String realPath = "C:\\tbt_concept\\tbt\\src\\main\\front\\src\\images\\cs\\";
		String file1, file2;
		
		MultipartFile uploadfilef = entity.getQna_upload_filef();
		
		if (uploadfilef != null && !uploadfilef.isEmpty()) {
			file1 = realPath + uploadfilef.getOriginalFilename();
			uploadfilef.transferTo(new File(file1));
			
			file2 = uploadfilef.getOriginalFilename();
		}
		
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

	// List =====================================================
	
	@PostMapping("/qList")
	public List<QnA1on1> postQList(Model model) {
		return qna1on1Service.selectList();
	}
	
	
	// Detail =====================================================
	/*
	 * @GetMapping("/qDetail") public String getQDetail(Model model, QnA1on1 entity,
	 * HttpServletRequest request) { model.addAttribute("qna1on1Detail",
	 * qna1on1Service.selectDetail(entity.getQna_id()));
	 * 
	 * if ("U".equals(request.getParameter("jCode"))) { return
	 * "master/cs/qna1on1Update"; } else { return "master/cs/qna1on1Detail"; } }
	 */

	
}
