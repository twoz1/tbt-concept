package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="faq")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Faq {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int faq_id;
	
	@Column(nullable=false)
	private String faq_title;
	
	@Column(nullable=false)
	private String faq_content;
	
	@Column(nullable=false)
	private String faq_type;
	
	
	
}
