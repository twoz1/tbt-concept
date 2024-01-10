package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;


import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.User;



public interface UserService {
	
	@Transactional
	PageResultDTO<User> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword);

	// ** selectList
	List<User> selectList();

	// ** selectOne
	User selectOne(String id);

	// ** insert, update
	String save(User entity);

	// ** delete
	String delete(String id);

	// ** checkUser
	User checkUser(String user_id, String user_name);
	
	@Transactional
	Long getUserCount();

}
