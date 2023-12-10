package com.tbtConcept.tbt.domain;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class OrderProdDTO {
	
	
	private int order_detail_id;
	private String orderId;
	private int order_price;
	private int order_quan;
	private int product_id;
	private String user_id;
	private String product_name;
	private String product_img1;
	
	

	
}
