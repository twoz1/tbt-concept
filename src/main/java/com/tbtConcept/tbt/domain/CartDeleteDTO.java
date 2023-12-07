package com.tbtConcept.tbt.domain;

import lombok.Data;

@Data
public class CartDeleteDTO {
	String user_id;
	int[] product_id;
}
