package com.tbtConcept.tbt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@DynamicInsert
@Entity
@Table(name="order_list")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class OrderList {
   
   @Id
   private String order_id;
   
   @Column(nullable=false)
   private String user_id;
   
   @Column(nullable=false)
   private String order_date;
   
   @Column(nullable=false)
   private String address_name;
   
   @Column(nullable=false)
   private String address_avc;
   
   @Column(nullable=false)
   private String address_city;
   
   @Column(nullable=false)
   private String address_detail;
   
   @Column(nullable=false)
   private String address_phone_num;
   
   private String order_message;
   
   @Column(nullable=false)
   private String order_pay;
   
   @Column(nullable=false)
   private int order_total_each_quan;
   
   @Column(nullable=false)
   private int order_total_price;
   
   @ColumnDefault("입금대기")
   private String order_state;
   
   @ColumnDefault("배송대기")
   private String order_del_state;
   
   private String order_del_num;
   private String order_coupon;

}
