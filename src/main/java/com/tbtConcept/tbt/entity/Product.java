package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int product_id;

	private String code;

	@Column(nullable = false)
	private String product_name;

	@Column(nullable = false)
	private int product_price;

	@Column(nullable = false)
	private int product_stock;

	private String product_detail;

	private String product_img1;
	private String product_img2;
	private String product_img3;
	private String product_img4;

	@Transient
	private MultipartFile product_img1f;

	@Transient
	private MultipartFile product_img2f;

	@Transient
	private MultipartFile product_img3f;

	@Transient
	private MultipartFile product_img4f;

}
