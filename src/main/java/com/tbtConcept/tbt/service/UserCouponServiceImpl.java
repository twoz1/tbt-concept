package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.UserCoupon;
import com.tbtConcept.tbt.entity.UserCouponId;
import com.tbtConcept.tbt.repository.UserCouponRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCouponServiceImpl implements UserCouponService {
	
	private final UserCouponRepository repository;
	
	@Override
	public PageResultDTO<UserCoupon> selectList(PageRequestDTO requestDTO) {
        Pageable pageable = requestDTO.getPageable(Sort.by("couponStart").descending());

        Page<UserCoupon> result = repository.findAll(pageable);
        
        return new PageResultDTO<>(result);
    }
	
	@Override
	public List<Object> couponJoinList(String user_id){
		return repository.couponJoinList(user_id);
	};
	
	@Override
	public List<UserCoupon> couponListInUser(String user_id){
		return repository.UserCouponInUser(user_id);
	};
	
	@Override
	public UserCoupon selectDetail(UserCouponId id) {
		Optional<UserCoupon> result = repository.findById(id);
		
		if(result.isPresent()) {
			return result.get();
		}else {
			return null;
		}
	}
	
	@Override
	public int save(UserCoupon entity) {
		repository.save(entity);
		return 1;
	}
	
	
	@Override
	public int delete(UserCouponId id) {
		repository.deleteById(id);
		
		return 1;
	}
	
	@Override
	public void deleteByCouponId(int coupon_id) {
		repository.deleteByCouponId(coupon_id);
	}
	
}
