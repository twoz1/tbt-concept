package com.tbtConcept.tbt.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartId implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String user_id;
	private int product_id;

}