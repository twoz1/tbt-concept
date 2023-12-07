package com.tbtConcept.tbt.restController;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.ProductService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@AllArgsConstructor
@RequestMapping(value = "/product")
@RestController
public class ProductRController {

	ProductService prodService;

	@GetMapping("/pListDesc")
	public List<Product> getPListDesc(Model model) {
		return prodService.findAllDesc();
	}

	@GetMapping("/pSListDesc")
	public List<Product> getProductSList(Model model) {
		return prodService.selectSDesc();
	}

	@GetMapping("/pGListDesc")
	public List<Product> getProductGList(Model model) {
		return prodService.selectGDesc();
	}

	@GetMapping("/pDetail/{product_id}")
	public Product getProductDetail(@PathVariable("product_id") int id, Model model) {
		Product pr = prodService.selectDetail(id);
		System.out.println("getProductDetail ->" + pr);
		return pr;
	}

	@PostMapping("/searchProds/{mSearBarKeyword}")
	public List<Product> searchProductListA(@PathVariable("mSearBarKeyword") String mSearBarKeyword) {
		List<Product> searchList = prodService.searchByProductLikeA(mSearBarKeyword);

		return searchList;
	}

}
