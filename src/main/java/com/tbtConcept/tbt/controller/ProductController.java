package com.tbtConcept.tbt.controller;

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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.ProductService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value = "/master/product")
@Controller
public class ProductController {

	ProductService prodService;

	@GetMapping("/productInsert")
	public void getProductInsert() {

	}

	// =====================================================

	@PostMapping("/productInsert")
	public String postProductInsert(Product entity, Model model, RedirectAttributes rttr,
			MultipartHttpServletRequest mtfReuqest) throws IOException {
		String uri = "redirect:productList";

		String realPath = "C:\\tbt_concept\\tbt\\src\\main\\webapp\\resources\\images\\product\\";
		String file1, file2;

		List<MultipartFile> fileList = new ArrayList<MultipartFile>();
		fileList.add(0, entity.getProduct_img1f());
		fileList.add(1, entity.getProduct_img2f());
		fileList.add(2, entity.getProduct_img3f());
		fileList.add(3, entity.getProduct_img4f());

		for (int i = 0; i < fileList.size(); i++) {

			if (fileList.get(i) != null && !fileList.get(i).isEmpty()) {
				file1 = realPath + fileList.get(i).getOriginalFilename();
				fileList.get(i).transferTo(new File(file1));

				file2 = "resources/images/product/" + fileList.get(i).getOriginalFilename();
				if (i == 0)
					entity.setProduct_img1(file2);
				else if (i == 1)
					entity.setProduct_img2(file2);
				else if (i == 2)
					entity.setProduct_img3(file2);
				else if (i == 3)
					entity.setProduct_img4(file2);
			}
		}

		try {
			if (prodService.save(entity) > 0) {
				model.addAttribute("message", "상품등록 성공");
				System.out.println("** product insert 성공");
			} else {
				model.addAttribute("message", "상품등록 실패");
				uri = "master/product/productInsert";
			}
		} catch (Exception e) {
			System.out.println("** Product insert Exception => " + e.toString());
		}

		return uri;
	}

	// =====================================================
	@GetMapping("/productList")
	public void getProductList(Model model) {
		model.addAttribute("productList", prodService.selectList());
	}

	// =====================================================
	@GetMapping("/productDetail")
	public String getProductDetail(Model model, Product entity, HttpServletRequest request) {
		model.addAttribute("productDetail", prodService.selectDetail(entity.getProduct_id()));

		if ("U".equals(request.getParameter("jCode"))) {
			return "master/product/productUpdate";
		} else {
			return "master/product/productDetail";
		}

	}

	// =====================================================
	@PostMapping("/productUpdate")
	public String getProductUpdate(Model model, HttpSession session, Product entity) throws IOException {

		model.addAttribute("productDetail", entity);
		String uri = "master/product/productDetail";

		String realPath = "C:\\tbt_concept\\tbt\\src\\main\\webapp\\resources\\images\\product\\";
		String file1, file2;
		
		
		List<MultipartFile> fileList = new ArrayList<MultipartFile>();
		fileList.add(0, entity.getProduct_img1f());
		fileList.add(1, entity.getProduct_img2f());
		fileList.add(2, entity.getProduct_img3f());
		fileList.add(3, entity.getProduct_img4f());
		
		List<String> fileList2 = new ArrayList<String>();
		fileList2.add(0, entity.getProduct_img1());
		fileList2.add(1, entity.getProduct_img2());
		fileList2.add(2, entity.getProduct_img3());
		fileList2.add(3, entity.getProduct_img4());
		
		for (int i = 0; i < fileList.size(); i++) {

			if (fileList.get(i) != null && !fileList.get(i).isEmpty()) {
				file1 = realPath + fileList.get(i).getOriginalFilename();
				fileList.get(i).transferTo(new File(file1));

				file2 = "resources/images/product/" + fileList.get(i).getOriginalFilename();
				if (i == 0)
					entity.setProduct_img1(file2);
				else if (i == 1)
					entity.setProduct_img2(file2);
				else if (i == 2)
					entity.setProduct_img3(file2);
				else if (i == 3)
					entity.setProduct_img4(file2);
			}else {
				if (i == 0)
					entity.setProduct_img1(fileList2.get(i));
				else if (i == 1)
					entity.setProduct_img2(fileList2.get(i));
				else if (i == 2)
					entity.setProduct_img3(fileList2.get(i));
				else if (i == 3)
					entity.setProduct_img4(fileList2.get(i));
			}
		}
		
		try {
			if (prodService.save(entity) > 0) {
				model.addAttribute("message", "상품수정 성공");
				System.out.println("** product update 성공");
			} else {
				model.addAttribute("message", "상품수정 실패");
				uri = "master/product/productUpdate";
			}
		} catch (Exception e) {
			System.out.println("** Product update Exception => " + e.toString());
		}

		return uri;
	}
	
	// =====================================================
	@DeleteMapping("productdelete/{product_id}")
	public ResponseEntity<?> axProductDelete(@PathVariable("product_id") int id, Product entity) {
		entity.setProduct_id(id);
		if (prodService.delete(id) > 0) {
			log.info("axidelete HttpStatus.OK =>" + HttpStatus.OK);
			System.out.println("삭제 성공");
			return new ResponseEntity<String>("[삭제 성공]", HttpStatus.OK);
		} else {
			log.info("axidelete HttpStatus.BAD_GATEWAY =>" + HttpStatus.BAD_GATEWAY);
			System.out.println("삭제 실패");
			return new ResponseEntity<String>("[삭제 실패] - Data_NotFound", HttpStatus.BAD_GATEWAY);
		}
	}
	

}
