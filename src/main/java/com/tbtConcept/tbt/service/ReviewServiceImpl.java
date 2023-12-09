package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

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
	public Review selectDetail(int review_id) {
		Optional<Review> result = repository.findById(review_id);

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
	public int delete(int id) {
		repository.deleteById(id);
		return id;
	}

}
