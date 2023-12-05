package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.Coupon;
import com.tbtConcept.tbt.repository.CouponRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {
	private final CouponRepository repository;

	@Transactional
	@Override
	public List<Coupon> selectList() {
		return repository.findAllDesc();
	}
	
	@Override
	public Coupon selectDetail(int Coupon_id) {
		Optional<Coupon> result = repository.findById(Coupon_id);
		
		if(result.isPresent()) {
			return result.get();
		}else {
			return null;
		}
	}
	
	@Override
	public int save(Coupon entity) {
		repository.save(entity);
		return entity.getCoupon_id();
	}
	
	@Override
	public int delete(int Coupon_id) {
		repository.deleteById(Coupon_id);
		
		return Coupon_id;
	}

}
