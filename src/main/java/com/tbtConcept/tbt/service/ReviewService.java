package com.tbtConcept.tbt.service;

import java.util.List;


import com.tbtConcept.tbt.entity.Review;


public interface ReviewService {
	List<Review> selectList();
	
	//Review selectOne(int id);
	
	List<Review> selectListByProductId(int product_id);
	
	Review selectDetail(int review_id);
	
	
    int save(Review entity);
	
	int delete(int id);
	
}
