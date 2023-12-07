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

import com.tbtConcept.tbt.entity.News;
import com.tbtConcept.tbt.service.NewsService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/cs")
@Controller
public class NewsController {
	NewsService newsService;

	// Insert =====================================================
	@GetMapping("/newsInsert")
	public void getNewsInsert() {

	}

	@PostMapping("/newsInsert")
	public String postNewsInsert(News entity, Model model, RedirectAttributes rttr) {

		String uri = "redirect:newsList";

		try {
			if (newsService.save(entity) > 0) {
				model.addAttribute("message", "News등록 성공");
				System.out.println("** News insert 성공");
			} else {
				model.addAttribute("message", "News등록 실패");
				uri = "master/cs/newsInsert";
			}
		} catch (Exception e) {
			System.out.println("** News insert Exception => " + e.toString());
		}

		return uri;
	}

	// List =====================================================

	@GetMapping("/newsList")
	public void getNewsList(Model model) {
		model.addAttribute("newsList", newsService.selectList());
	}

	// Detail =====================================================
	@GetMapping("/newsDetail")
	public String getNewsDetail(Model model, News entity, HttpServletRequest request) {

		model.addAttribute("newsDetail", newsService.selectDetail(entity.getNews_id()));

		if ("U".equals(request.getParameter("jCode"))) {
			return "master/cs/newsUpdate";
		} else {
			return "master/cs/newsDetail";
		}

	}

	// Update =====================================================
	@GetMapping("/newsUpdate")
	public void getNewsUpdate(Model model, News entity, HttpServletRequest request) {
		model.addAttribute("newsDetail", newsService.selectDetail(entity.getNews_id()));
	}

	@PostMapping("/newsUpdate")
	public void postNewsUpdate(Model model, News entity, HttpServletRequest request) {
		model.addAttribute("newsDetail", entity);

		try {
			if (newsService.save(entity) > 0) {
				model.addAttribute("message", "News수정 성공");
				System.out.println("** News update 성공");
			} else {
				model.addAttribute("message", "News수정 실패");
			}
		} catch (Exception e) {
			System.out.println("** News update Exception => " + e.toString());
		}

	}

	// Delete =====================================================
	@DeleteMapping("/newsDelete/{news_id}")
	public ResponseEntity<?> axNewsDelete(@PathVariable("news_id") int id, News entity) {
		entity.setNews_id(id);

		if (newsService.delete(id) > 0) {
			log.info("axNewsDelete HttpStatus.OK =>" + HttpStatus.OK);
			System.out.println("News 삭제 성공");
			return new ResponseEntity<String>("[News 삭제 성공]", HttpStatus.OK);
		} else {
			log.info("axFaqDelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
			System.out.println("News 삭제 실패");
			return new ResponseEntity<String>("[News 삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
}
