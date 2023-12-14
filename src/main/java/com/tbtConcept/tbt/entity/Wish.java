package com.tbtConcept.tbt.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="wish")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@IdClass(WishId.class)
public class Wish implements Serializable {
	
	@Id
	private String user_id;
	@Id
	private int product_id;
	
	private String wish_date;
	
}
