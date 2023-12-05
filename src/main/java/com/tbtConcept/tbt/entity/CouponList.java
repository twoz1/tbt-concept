package com.tbtConcept.tbt.entity;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

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
@IdClass(CouponListId.class)
public class CouponList implements Serializable {
	
	@Id
	private int coupon_id;	
	@Id
	private String user_id;
	
	private String coupon_start;
	private String coupon_end;
	
}
