package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tbtConcept.tbt.entity.OrderList;

public interface OrderListRepository extends JpaRepository<OrderList, String> {
//    @Query("SELECT o FROM OrderList o order by o.order_date desc")
//    List<OrderList> findAllDesc();
    @Query("SELECT o FROM OrderList o order by o.order_date desc")
    Page<OrderList> findAllDesc(Pageable pageable);
    
    
    @Query(nativeQuery = true, value = "SELECT * FROM order_list WHERE user_id = :user_id ORDER BY order_date DESC")
    List<OrderList> userOrderList(@Param("user_id") String id);
}
