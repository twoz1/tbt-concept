package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
	
	@GetMapping("/storeInsert")
	public void getStoreInsert() {

	}
	
	@PostMapping("/storeInsert")
	public void postStoreInsert() {

	}
	
}
