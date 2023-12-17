package com.tbtConcept.tbt.repository;

import java.util.List;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.tbtConcept.tbt.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query("SELECT p FROM Product p order by p.product_id desc")
	List<Product> findAllDesc();
	
	//@Query("SELECT p FROM Product p order by p.product_id desc")
	
	@Query("SELECT p FROM Product p WHERE (:keyword = '' OR :searchType = 'all' OR" +
		       "(:searchType = 'product_name' AND p.product_name LIKE %:keyword%) OR " +
		       "(:searchType = 'product_id' AND p.product_id LIKE %:keyword%)) " +
		       "ORDER BY p.product_id DESC")
	Page<Product> selectList(Pageable pageable, @Param("searchType") String searchType, @Param("keyword") String keyword);
	
	@Query("SELECT p FROM Product p where code ='S' order by p.product_id desc")
	List<Product> selectSDesc();
	
	@Query("SELECT p FROM Product p where code ='G' order by p.product_id desc")
	List<Product> selectGDesc();
	
	@Query("SELECT p FROM Product p WHERE p.product_name LIKE %:mSearBarKeyword% order by p.product_id desc")
	List<Product> searchByProductLikeA(@Param("mSearBarKeyword") String mSearBarKeyword);
	
	   @Transactional
	   @Query(nativeQuery = true, value = "SELECT p.product_id, p.code, COALESCE(COUNT(od.product_id), 0) AS order_count "
	           + "FROM product p "
	           + "LEFT JOIN order_detail od ON p.product_id = od.product_id "
	           + "WHERE p.code = 'S' "
	           + "GROUP BY p.product_id, p.code "
	           + "ORDER BY order_count DESC")
	   List<Object> productSSales();
	   
	   
	   @Transactional
	   @Query(nativeQuery = true, value = "SELECT p.product_id, p.code, COALESCE(COUNT(od.product_id), 0) AS order_count "
	           + "FROM product p "
	           + "LEFT JOIN order_detail od ON p.product_id = od.product_id "
	           + "WHERE p.code = 'G' "
	           + "GROUP BY p.product_id, p.code "
	           + "ORDER BY order_count DESC")
	   List<Object> productGSales();
}
