package com.tbtConcept.tbt.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tbtConcept.tbt.entity.Product;
import com.tbtConcept.tbt.service.ProductService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping(value="/master/product")
@Controller
public class ProductController {
	
	ProductService prodService;
	
	
	
	@GetMapping("/productInsert")
	public void getProductInsert() {
		
	}
	
	// =====================================================
	
	@PostMapping("/productInsert")
	public String postProductInsert(Product entity,
			Model model, RedirectAttributes rttr, MultipartHttpServletRequest mtfReuqest) throws IOException{
		String uri ="redirect:productList";
		
		String realPath = "C:\\tbt_concept\\tbt\\src\\main\\webapp\\resources\\images";
		String file1,file2 = "resources/images/product/basic.png";
		
		
		List<MultipartFile> fileList = new ArrayList<MultipartFile>();
		fileList.add(0, entity.getProduct_img1f());
		fileList.add(1, entity.getProduct_img2f());
		fileList.add(2, entity.getProduct_img3f());
		fileList.add(3, entity.getProduct_img4f());
		
		for(int i=0; i<fileList.size(); i++) {
			if(fileList.get(i) != null && !fileList.get(i).isEmpty()) {
				file1 = realPath + fileList.get(i).getOriginalFilename();
				fileList.get(i).transferTo(new File(file1));
				
				file2 = "resources/images/product/"+fileList.get(i).getOriginalFilename();
				if(i == 0) entity.setProduct_img1(file2);
				else if(i == 1) entity.setProduct_img2(file2);
				else if(i == 2) entity.setProduct_img3(file2);
				else if(i == 3) entity.setProduct_img4(file2);
			}
			
		}
		
		try {
			model.addAttribute("message", "상품등록 성공");
		} catch (Exception e) {
			System.out.println("** insert Exception => "+e.toString());
			model.addAttribute("message", "상품등록 실패");
			uri = "master/productInsert";
		}
		
		
		return uri;
	}
}
