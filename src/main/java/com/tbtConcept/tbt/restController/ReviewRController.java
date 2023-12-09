package com.tbtConcept.tbt.restController;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Review;
import com.tbtConcept.tbt.service.ReviewService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/review")
@RestController
@Log4j2
public class ReviewRController {
	ReviewService reviewService;
	
	@GetMapping("/reviewInsert")
	public void getReviewInsert() {
		
	}
	
	@PostMapping("/reviewInsert")
	public String postReviewInsert(Review entity, Model model, RedirectAttributes rttr) throws IOException {
		System.out.println("reviewInsert 확인 => " + entity);

		String realPath = "C:\\tbt_concept\\tbt\\src\\main\\front\\src\\images\\review\\";
		String file1, file2;

		MultipartFile uploadfilef = entity.getReview_upload_filef();

		if (uploadfilef != null && !uploadfilef.isEmpty()) {
			file1 = realPath + uploadfilef.getOriginalFilename();
			uploadfilef.transferTo(new File(file1));

			file2 = uploadfilef.getOriginalFilename();
			entity.setReview_upload_file(file2);
		}
		
		 entity.setReview_date(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));

		try {
			if (reviewService.save(entity) > 0) {
				model.addAttribute("message", "리뷰 등록 성공");
				System.out.println("** Review insert 성공");
				return "성공";
			} else {
				model.addAttribute("message", "리뷰 등록 실패");
				return "실패";
			}
		} catch (Exception e) {
			System.out.println("** Review insert Exception => " + e.toString());
			return "실패";
		}

	}
//	=========================================
	
	@PostMapping("/rUpdate")
	public String postReviewUpdate(Review entity, Model model, RedirectAttributes rttr) throws IOException {
		System.out.println("reviewUpdate 확인 => " + entity);

		String realPath = "C:\\tbt_concept\\tbt\\src\\main\\front\\src\\images\\review\\";
		String file1, file2;

		MultipartFile uploadfilef = entity.getReview_upload_filef();

		if (uploadfilef != null && !uploadfilef.isEmpty()) {
			file1 = realPath + uploadfilef.getOriginalFilename();
			uploadfilef.transferTo(new File(file1));

			file2 = uploadfilef.getOriginalFilename();
			entity.setReview_upload_file(file2);
		}

		try {
			if (reviewService.save(entity) > 0) {
				model.addAttribute("message", "리뷰 업데이트 성공");
				System.out.println("** Review update 성공");
				return "성공";
			} else {
				model.addAttribute("message", "리뷰 업데이트 실패");
				return "실패";
			}
		} catch (Exception e) {
			System.out.println("** Review update Exception => " + e.toString());
			return "실패";
		}

	}
	
//	=========================================
	
	
	@GetMapping("/rList/{product_id}")
	public List<Review> getRList(@PathVariable("product_id") int product_id) {
	System.out.print("갔다왔니?" +reviewService.selectListByProductId(product_id));
		return reviewService.selectListByProductId(product_id);
	}


//=========================================



	@DeleteMapping("/rDelete/{reviewId}")
	public ResponseEntity<?> axrDelete(@PathVariable("reviewId") int reviewId , Review entity) {
			entity.setReviewId(reviewId);
		 if (reviewService.deleteReview(reviewId) > 0) {
		        log.info("axrDelete HttpStatus.OK =>" + HttpStatus.OK);
		        System.out.println("삭제 성공");
		        return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		    } else {
		        log.info("axrDelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
		        System.out.println("삭제 실패");
		        return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		    }
	}


}