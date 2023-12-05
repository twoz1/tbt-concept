package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@DynamicInsert
@Entity
@Table(name="address")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Address {

   @Id
   private int duplicate_user_id;
   
   @Column(nullable=false)
   private String user_id;
   
   @Column(nullable=false)
   private String address_name;
   
   @Column(nullable=false)
   private String address_avc;
   
   @Column(nullable=false)
   private String address_city;
   
   private String address_detail;
   
   @Column(nullable=false)
   private String address_phone_num;
   
   private String order_message;
   
   
}

