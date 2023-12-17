package com.tbtConcept.tbt.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
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
	public void getProductList(Model model, @RequestParam(value="page", defaultValue="1") int page,
			@RequestParam(value="searchType", defaultValue = "") String searchType, @RequestParam(value="keyword", defaultValue = "") String keyword) {
		
		
		PageRequestDTO requestDTO = PageRequestDTO.builder().page(page).size(15).build();
		PageResultDTO<Store> resultDTO = storeService.selectList(requestDTO, searchType, keyword);
		
		model.addAttribute("storeList", resultDTO.getEntityList());
	    model.addAttribute("resultDTO", resultDTO);
	    model.addAttribute("searchType", searchType);
	    model.addAttribute("keyword", keyword);
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
	
	@DeleteMapping("storedelete/{store_id}")
	public ResponseEntity<?> axStoreDelete(@PathVariable("store_id") String id, Store entity) {
		entity.setStore_id(id);
		if (storeService.delete(id) != null) {
			System.out.println("삭제 성공");
			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		} else {
			System.out.println("삭제 실패");
			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
	
	
}
