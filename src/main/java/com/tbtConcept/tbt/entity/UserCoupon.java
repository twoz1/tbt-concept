package com.tbtConcept.tbt.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="coupon_list")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@IdClass(UserCouponId.class)
public class UserCoupon implements Serializable {
	
	@Id
	private int coupon_id;	
	@Id
	private String user_id;
	
	@Column(name = "coupon_start")
	private String couponStart;
	
	@Column(name = "coupon_end")
	private String couponEnd;
	
}
