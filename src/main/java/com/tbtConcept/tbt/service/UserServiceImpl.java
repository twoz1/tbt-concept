package com.tbtConcept.tbt.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.User;
import com.tbtConcept.tbt.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor 
public class UserServiceImpl implements UserService {

	private final UserRepository repository;

	// ** selectList
	@Override
	public PageResultDTO<User> selectList(PageRequestDTO requestDTO) {
		Pageable pageable = requestDTO.getPageable(Sort.by("userId").descending());

		Page<User> result = repository.findAll(pageable);

		return new PageResultDTO<>(result);
	}

	// ** selectOne
	@Override
	public User selectOne(String id) {
		Optional<User> result = repository.findById(id);
		if ( result.isPresent() ) return result.get();
		else return null;
	}

	@Override
	public String save(User entity) {
		repository.save(entity);
		return entity.getUserId();
	}

	// ** delete
	@Override
	public String delete(String id) {
		repository.deleteById(id);
		return id; // 삭제후 Key return
	}

}
