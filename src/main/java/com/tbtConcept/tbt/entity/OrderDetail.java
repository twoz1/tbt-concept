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
@Table(name="order_detail")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetail {
	
	@Id
	private String order_detail_id;
	
	private String order_id;
	private String product_id;
	
	@Column(nullable=false)
	private int order_quan;
	
	@Column(nullable=false)
	private int order_price;
	
	private String review_state;
	
	
}
