package com.tbtConcept.tbt.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class WishProdDTO {
	
	private String user_id;
	private int product_id;
	private String wish_date;
	
	private String product_name;
	private String product_img1;
	
}
