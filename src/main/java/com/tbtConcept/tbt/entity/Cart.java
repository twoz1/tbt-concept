package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="cart")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
	
	@Id
	private int cart_id;
	
	@Column(nullable=false)
	private String user_id;
	
	@Column(nullable=false)
	private int product_id;
	
	private int cart_quan;
	
}
