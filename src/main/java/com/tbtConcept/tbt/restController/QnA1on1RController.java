package com.tbtConcept.tbt.restController;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.QnA1on1;
import com.tbtConcept.tbt.service.QnA1on1Service;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/qna1on1")
@RestController
@Log4j2
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
			entity.setQna_upload_file(file2);
		}

		try {
			if (qna1on1Service.save(entity) > 0) {
				model.addAttribute("message", "1:1문의 등록 성공");
				System.out.println("** QnA1on1 insert 성공");
				return "성공";
			} else {
				model.addAttribute("message", "1:1문의 등록 실패");
				return "실패";
			}
		} catch (Exception e) {
			System.out.println("** QnA1on1 insert Exception => " + e.toString());
			return "실패";
		}

	}

	// List =====================================================
	@PostMapping("/qList/{user_id}")
	public List<QnA1on1> postQList(@PathVariable("user_id") String user_id) {
		return qna1on1Service.selectListByUserId(user_id);
	}

	// Update =====================================================
	@PostMapping("/qUpdate")
	public String postqUpdate(QnA1on1 entity, Model model, RedirectAttributes rttr) throws IOException {
		System.out.println("postqUpdate 확인 => " + entity);

		String realPath = "C:\\tbt_concept\\tbt\\src\\main\\front\\src\\images\\cs\\";
		String file1, file2;

		MultipartFile uploadfilef = entity.getQna_upload_filef();

		if (uploadfilef != null && !uploadfilef.isEmpty()) {
			file1 = realPath + uploadfilef.getOriginalFilename();
			uploadfilef.transferTo(new File(file1));

			file2 = uploadfilef.getOriginalFilename();
			entity.setQna_upload_file(file2);
		} else {
			entity.setQna_upload_file(entity.getQna_upload_file());
		}

		try {
			if (qna1on1Service.save(entity) > 0) {
				model.addAttribute("message", "1:1문의 수정 성공");
				System.out.println("** QnA1on1 Update 성공");
				return "성공";
			} else {
				model.addAttribute("message", "1:1문의 수정 실패");
				return "실패";
			}
		} catch (Exception e) {
			System.out.println("** QnA1on1 update Exception => " + e.toString());
			return "실패";
		}
	}

	// Delete =====================================================
	@DeleteMapping("/qDelete/{qna_id}")
	public ResponseEntity<?> axPDelete(@PathVariable("qna_id") int id, QnA1on1 entity) {
		entity.setQna_id(id);

		if (qna1on1Service.delete(id) > 0) {
			log.info("axPDelete HttpStatus.OK =>" + HttpStatus.OK);
			System.out.println("삭제 성공");
			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		} else {
			log.info("axPDelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
			System.out.println("삭제 실패");
			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}

}
