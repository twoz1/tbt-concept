package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.News;
import com.tbtConcept.tbt.service.NewsService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/news")
@RestController
@Log4j2
public class NewsRController {
	NewsService newsService;

	// List =====================================================
	@GetMapping("/nList")
	public void getNewsList(Model model, @RequestParam(value="page", defaultValue="1") int page) {
		PageRequestDTO requestDTO = PageRequestDTO.builder().page(page).size(20).build();
		
        PageResultDTO<News> resultDTO = newsService.selectList(requestDTO);
		
        model.addAttribute("newsList",resultDTO.getEntityList());
		model.addAttribute("resultDTO", resultDTO);
	}
}
