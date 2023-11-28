package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="qna1on1")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QnA1on1 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int qna_id;
	
	private String product_id;
	private String user_id;
	
	@Column(nullable=false)
	private String qna_type;
	
	@Column(nullable=false)
	private int qna_phone_num;
	
	@Column(nullable=false)
	private String qna_reply_check;
	
	@Column(nullable=false)
	private String title;
	
	@Column(nullable=false)
	private String qna_content;
	
	private String qna_upload_file;
	private String qna_answer;
	
	
	
}
