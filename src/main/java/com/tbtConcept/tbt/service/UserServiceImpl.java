package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.entity.User;
import com.tbtConcept.tbt.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository repository;
	
	@Transactional
	@Override
	public PageResultDTO<User> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword) {
		Pageable pageable = requestDTO.getPageable();

		Page<User> result  = repository.findAllDesc(pageable, searchType, keyword);

		return new PageResultDTO<>(result);
	}

	// ** selectList
	@Override
	public List<User> selectList() {
		return repository.findAll();
	}

	// ** selectOne
	@Override
	public User selectOne(String id) {
		Optional<User> result = repository.findById(id);
		if (result.isPresent())
			return result.get();
		else
			return null;
	}

	@Override
	public String save(User entity) {
		repository.save(entity);
		return entity.getUser_id();
	}

	// ** delete
	@Override
	public String delete(String id) {
		repository.deleteById(id);
		return id; // 삭제후 Key return
	}
	
	@Override
	public Long getUserCount() {
	    return repository.getUserCount();
	}

	@Override
	@Transactional
	public User checkUser(String user_id, String user_name) {
		return repository.checkUser(user_id, user_name);
	}

}
