package com.tbtConcept.tbt.service;


import java.util.List;

import javax.transaction.Transactional;


import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListService {
	
    @Transactional
//    List<OrderList> findAllDesc();
    PageResultDTO<OrderList> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword);
	
	List<OrderList> selectList();
	
	
	List<OrderList> userOrderList(String id);
	
	OrderList selectDetail(String id);
	
	String save(OrderList entity);
	
	String delete(String id);
	
	
	
	
}
