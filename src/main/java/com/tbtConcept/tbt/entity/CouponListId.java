package com.tbtConcept.tbt.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.IdClass;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CouponListId implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private int coupon_id;	
	private String user_id;
}
