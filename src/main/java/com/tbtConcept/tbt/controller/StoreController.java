package com.tbtConcept.tbt.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import com.tbtConcept.tbt.entity.Product;
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
	
	// ==============================================================
	
	@GetMapping("/storeDetail")
	public String getProductDetail(Model model, Store entity, HttpServletRequest request) {

		model.addAttribute("storeDetail", storeService.selectDetail(entity.getStore_id()));

		if ("U".equals(request.getParameter("jCode"))) {
			return "master/store/storeUpdate";
		} else {
			return "master/store/storeDetail";
		}

	}
	
	// ==============================================================
	
	@PostMapping("/storeUpdate")
	public String getProductUpdate(Model model, HttpSession session, Store entity) {

		model.addAttribute("storeDetail", entity);
		String uri = "master/store/storeDetail";

		try {
			if (storeService.save(entity) != null) {
				model.addAttribute("message", "지점수정 성공");
				System.out.println("** store update 성공");
			} else {
				model.addAttribute("message", "지점수정 실패");
				uri = "master/store/storeUpdate";
			}
		} catch (Exception e) {
			System.out.println("** store update Exception => " + e.toString());
		}

		return uri;
	}
	
	
}
