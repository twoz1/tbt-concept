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
@Table(name="user")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	@Id
	private String user_id;
	
	@Column(nullable=false)
	private String user_name;
	
	@Column(nullable=false)
	private String user_pw;
	
	@Column(nullable=false)
	private int user_phone_num;
	
	@Column(nullable=false)
	private int user_birth;
	
	private String user_rank;
	
	@Column(nullable=false)
	private char user_event_check;
	
	@Column(nullable=false)
	private int address_avc;
	
	@Column(nullable=false)
	private String address_city;
	
	@Column(nullable=false)
	private String address_detail;
	
}
