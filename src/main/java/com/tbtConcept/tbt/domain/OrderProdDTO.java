package com.tbtConcept.tbt.domain;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class OrderProdDTO {
	
	
	private String order_id;
	private int order_detail_id;
	private String product_img1;
	private int product_id;
	private String product_name;
	private int order_quan;
	private int order_price;
	private String review_state;
	
	public OrderProdDTO(String order_id, int order_detail_id, String product_img1,int product_id, String product_name,
			int order_quan, int order_price, String review_state ) {
		
		this.order_id = order_id; 
		this.order_detail_id = order_detail_id; 
		this.product_img1 = product_img1; 
		this.product_id = product_id; 
		this.product_name = product_name; 
		this.order_quan = order_quan; 
		this.order_price = order_price; 
		this.review_state = review_state;
		
	}

	
}
