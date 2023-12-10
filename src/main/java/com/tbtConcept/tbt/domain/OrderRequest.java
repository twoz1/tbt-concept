package com.tbtConcept.tbt.domain;

import java.util.List;

import com.tbtConcept.tbt.entity.OrderDetail;
import com.tbtConcept.tbt.entity.OrderList;

import lombok.Data;

@Data
public class OrderRequest {
	private OrderList orderList;
	private List<OrderDetail> orderDetail;

}
