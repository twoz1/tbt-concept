package com.tbtConcept.tbt.domain;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class CartProdDTO {
	
	
	private String user_id;
	private int product_id;
	private int cart_quan;
	private String product_name;
	private int product_price;
	private int product_stock;
	private String product_img1;
	
	public CartProdDTO(String user_id, int product_id, int cart_quan, String product_name, int product_price, int product_stock, String product_img1) {
		this.user_id = user_id;
		this.product_id = product_id;
		this.cart_quan = cart_quan;
		this.product_name = product_name;
		this.product_price = product_price;
		this.product_stock = product_stock;
		this.product_img1 = product_img1;			
	}
		
	
	
}
