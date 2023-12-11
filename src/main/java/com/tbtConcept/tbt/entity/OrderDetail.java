package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@DynamicInsert
@Entity
@Table(name="order_detail")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetail {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_detail_id;
	
	@Column(name = "order_id")
	private String order_id;
	
	
	private int product_id;
	
	@Column(nullable=false)
	private int order_quan;
	
	@Column(nullable=false)
	private int order_price;
	
	@ColumnDefault("작성하기")
	private String review_state;
	
	
}
