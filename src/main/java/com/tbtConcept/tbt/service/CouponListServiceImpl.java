package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.CouponList;
import com.tbtConcept.tbt.entity.CouponListId;
import com.tbtConcept.tbt.repository.CouponListRepository;

import lombok.RequiredArgsConstructor;

@Transactional
@Service
@RequiredArgsConstructor
public class CouponListServiceImpl implements CouponListService {
	
	private final CouponListRepository repository;

	@Override
	public List<CouponList> selectList() {
		return repository.selectList();
	}
	
	@Override
	public List<Object> couponJoinList(String user_id){
		return repository.couponJoinList(user_id);
	};
	
	@Override
	public List<CouponList> couponListInUser(String user_id){
		return repository.couponListInUser(user_id);
	};
	
	@Override
	public CouponList selectDetail(CouponListId id) {
		Optional<CouponList> result = repository.findById(id);
		
		if(result.isPresent()) {
			return result.get();
		}else {
			return null;
		}
	}
	
	@Override
	public int save(CouponList entity) {
		repository.save(entity);
		return 1;
	}
	
	@Override
	public int delete(CouponListId id) {
		repository.deleteById(id);
		
		return 1;
	}
	
	@Override
	public void deleteByCouponId(int coupon_id) {
		repository.deleteByCouponId(coupon_id);
	}

}
