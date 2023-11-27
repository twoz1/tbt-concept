package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tbtConcept.tbt.entity.Store;
import com.tbtConcept.tbt.service.StoreService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value="/master/store")
@Controller
public class StoreController {
	
	StoreService storeService;
	
	@GetMapping("/storeList")
	public void getStoreList(Model model) {
		model.addAttribute("storeList", storeService.selectList());
	}
	
	// ==============================================================
	
	@GetMapping("/storeInsert")
	public void getStoreInsert() {
		
	}
	
	@PostMapping("/storeInsert")
	public String postStoreInsert(Store entity, Model model) {
		String uri = "redirect:storeList";
		
		try {
			if (storeService.save(entity) != null) {
				model.addAttribute("message", "상품등록 성공");
			}else {
				model.addAttribute("message", "상품등록 실패");
				uri = "master/store/storeInsert";
			}
			
		} catch (Exception e) {
			System.out.println("** Store insert Exception => " + e.toString());
		}
		
		return uri;
	}
	
}
