package com.tbtConcept.tbt.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.tbtConcept.tbt.domain.WishProdDTO;
import com.tbtConcept.tbt.entity.Wish;
import com.tbtConcept.tbt.entity.WishId;

@Repository
public interface WishRepository extends JpaRepository<Wish, WishId> {

	@Query("SELECT new com.tbtConcept.tbt.domain.WishProdDTO(w.user_id, w.product_id, w.wish_date, p.product_name, p.product_img1)"
			+ "FROM Wish w JOIN Product p ON w.product_id = p.product_id WHERE w.user_id = :user_id ORDER BY w.wish_date")
	List<WishProdDTO> selectListDesc(@RequestParam("user_id")String user_id);
	
	@Query("SELECT new com.tbtConcept.tbt.domain.WishProdDTO(w.user_id, w.product_id, w.wish_date, p.product_name, p.product_img1) "
	        + "FROM Wish w JOIN Product p ON w.product_id = p.product_id WHERE (:keyword = '' OR :searchType = 'all' OR " 
	        + "(:searchType = 'user_id' AND w.user_id LIKE %:keyword%) OR " 
	        + "(:searchType = 'product_name' AND p.product_name LIKE %:keyword%)) " 
	        + "ORDER BY w.wish_date DESC")
	Page<WishProdDTO> selectList(Pageable pageable, @Param("searchType") String searchType, @Param("keyword") String keyword);
	
}