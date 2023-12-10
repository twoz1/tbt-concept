package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.OrderList;
import com.tbtConcept.tbt.entity.User;



public interface UserService {

	// ** selectList
	List<User> selectList();
	// ** selectOne
	User selectOne(String id);

	// ** insert, update
	String save(User entity);

	// ** delete
	String delete(String id);

}
