package com.tbtConcept.tbt.entity;

import java.time.LocalDateTime;

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
	private int coupon_list_id;
	
	@Column(nullable=false)
	private LocalDateTime order_date;
	
	@Column(nullable=false)
	private String order_receiver;
	
	@Column(nullable=false)
	private int order_receiver_avc;
	
	@Column(nullable=false)
	private String order_receiver_city;
	
	@Column(nullable=false)
	private String order_receiver_detail;
	
	@Column(nullable=false)
	private int order_receiver_phoneNum;
	
	private String order_message;
	
	@Column(nullable=false)
	private String order_pay;
	
	@Column(nullable=false)
	private int order_total_eachQuan;
	
	@Column(nullable=false)
	private int order_totalPrice;
	
	private String order_state;
	private String order_delState;
	
	@Column(nullable=false)
	private String order_delNum;

}
