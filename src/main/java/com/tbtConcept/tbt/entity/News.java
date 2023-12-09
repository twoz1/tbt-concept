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
@Table(name="news")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class News {
	
	@Column(name = "news_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int newsId;
	
	@Column(nullable=false)
	private String news_title;
	
	@Column(nullable=false)
	private String news_content;
	
}
