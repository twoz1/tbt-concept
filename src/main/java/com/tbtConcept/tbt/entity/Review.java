package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "review")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Review {
	
	@Column(name = "review_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reviewId;
	
	private int product_id;
	
	private String user_id;
	
	@ColumnDefault("5")
	private int review_star;
	
	private String review_content;
	
	private String review_upload_file; 
	
	@Transient
	public MultipartFile review_upload_filef;
	
	public String review_date;
	
}
