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
@Table(name="order_list")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class OrderList {
	
	@Id
	private String order_id;
	
	private String user_id;
	
	@Column(nullable=false)
	private String order_date;
	
	@Column(nullable=false)
	private String order_receiver;
	
	@Column(nullable=false)
	private int order_receiver_avc;
	
	@Column(nullable=false)
	private String order_receiver_city;
	
	@Column(nullable=false)
	private String order_receiver_detail;
	
	@Column(nullable=false)
	private String order_receiver_phone_num;
	
	private String order_message;
	
	@Column(nullable=false)
	private String order_pay;
	
	private String order_coupon;
	
	@Column(nullable=false)
	private int order_total_each_quan;
	
	@Column(nullable=false)
	private int order_total_price;
	
	private String order_state;
	private String order_del_state;
	
	private String order_del_num;

}
