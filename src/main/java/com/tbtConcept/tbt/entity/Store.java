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
@Table(name="store")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Store {
	
	@Id
	private String store_id;
	
	@Column(nullable=false)
	private String store_address;
	private String store_address_detail;
	
	@Column(nullable = false)
	private String store_tel;
	private Double store_x;
	private Double store_y;
	
}
