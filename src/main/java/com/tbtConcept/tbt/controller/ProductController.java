package com.tbtConcept.tbt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.ProductService;

//import lombok.AllArgsConstructor;

//@AllArgsConstructor
@RequestMapping(value="/master/product")
@Controller
public class ProductController {
	
	ProductService prodService;
	String realPath =
	
	@GetMapping("/productInsert")
	public void getProductInsert() {
		
	}
	
	@PostMapping("/productInsert")
	public String postProductInsert(Product entity,
			Model model, RedirectAttributes rttr ) {
		String uri ="redirect:productList";
		
		if(prodService.save(entity))
		
		return uri;
	}
}
