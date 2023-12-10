package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Faq;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.entity.Review;
import com.tbtConcept.tbt.repository.ReviewRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor 
public class ReviewServiceImpl implements ReviewService{

	private final ReviewRepository repository;


	@Override
	public List<Review> selectList() {
		return repository.findAll();
	}
	
	
	//	   @Override
	//	   public Review selectOne(int id) {
	//	      Optional<Review> result = repository.findById(id);
	//	       if ( result.isPresent() ) return result.get();
	//	       else return null;
	//	   }


	@Override
	public List<Review> selectListByProductId(int product_id) {
		return repository.selectListByProductId(product_id);
	}

	@Override
	public Review selectDetail(int reviewId) {
		Optional<Review> result = repository.findById(reviewId);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}


	@Override
	public int save(Review entity) {
		repository.save(entity);
		return entity.getReview_id();
	}
	
	@Override
	public int deleteReview(int reviewId) {
		repository.deleteById(reviewId);
		return reviewId;
	}

//	@Override
//	@Transactional
//	public int deleteReview(int product_id, String user_id) {
//		return repository.deleteReview(product_id,user_id);
//	}

}
