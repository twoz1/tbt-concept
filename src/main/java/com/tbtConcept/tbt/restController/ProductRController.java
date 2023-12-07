package com.tbtConcept.tbt.restController;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.ProductService;

import lombok.AllArgsConstructor;

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
