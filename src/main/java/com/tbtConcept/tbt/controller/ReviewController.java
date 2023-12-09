package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.entity.Review;
import com.tbtConcept.tbt.service.ReviewService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/master/review")
@Controller
@Log4j2
public class ReviewController {
	ReviewService reviewService;
	
	// List
	@GetMapping(value = "/reviewList")
	public void getUserList(Model model) {
		model.addAttribute("reviewList", reviewService.selectList());
	}
	
	
	// Detail
	@GetMapping("/reviewDetail")
	public void getReviewDetail(Model model, Review entity,HttpServletRequest request) {
		model.addAttribute("reviewDetail", reviewService.selectDetail(entity.getReview_id()));
	}
	
	
	//Delete
//	@DeleteMapping("reviewdelete/{review_id}")
//	public ResponseEntity<?> axUserDelete(@PathVariable("review_id") int id, Review entity) {
//		entity.setReview_id(id);
//		if (reviewService.delete(id) >0) {
//			log.info("axidelete HttpStatus.OK =>" + HttpStatus.OK);
//			System.out.println("삭제 성공");
//			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
//		} else {
//			log.info("axidelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
//			System.out.println("삭제 실패");
//			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
//		}
//	}
}
