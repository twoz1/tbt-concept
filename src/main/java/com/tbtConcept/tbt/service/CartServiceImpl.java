package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.CartProdDTO;
import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Cart;
import com.tbtConcept.tbt.entity.CartId;
import com.tbtConcept.tbt.repository.CartRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
	private final CartRepository repository;

//	@Override
//	public List<Cart> findAllDesc() {
//		return repository.findAllDesc();
//	}


	@Override
	public PageResultDTO<CartProdDTO> selectList(PageRequestDTO requestDTO, String searchType, String keyword) {
		Pageable pageable = requestDTO.getPageable();

        Page<CartProdDTO> result = repository.selectList(pageable, searchType, keyword);
		
		return new PageResultDTO<>(result);
	}

//	@Override
//	public List<Cart> searchByCartLikeU(String keyword) {
//		return repository.searchByCartLikeU(keyword);
//	}
//	
//	@Override
//	public List<Cart> searchByCartLikeP(String keyword) {
//		return repository.searchByCartLikeP(keyword);
//	}
//	
//	@Override
//	public List<Cart> searchByCartLikeA(String keyword) {
//		return repository.searchByCartLikeA(keyword);
//	}

//	@Override
//	public List<Cart> perCartUser(String user_id) {
//		return repository.perCartUser(user_id);
//	}
	
	@Override
	public List<CartProdDTO> perCartUser(String user_id) {
		return repository.perCartUser(user_id);
	}

	@Override
	public Cart selectDetail(CartId cart_id) {
		Optional<Cart> result = repository.findById(cart_id);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	} 

	@Override
	public int save(Cart entity) {
		repository.save(entity);
		return 1;
	}

	@Override
	public CartId delete(CartId cart_id) {
		repository.deleteById(cart_id);
		return cart_id;
	}
	
	@Override
	public int cartUpdateCount1(String user_id, int product_id, int cart_quan) {
		return repository.cartUpdateCount1(user_id, product_id, cart_quan);
	}
	
	@Override
	public int cartUpdateCount2(String user_id, int product_id, int cart_quan) {
		return repository.cartUpdateCount2(user_id, product_id, cart_quan);
	}

}
