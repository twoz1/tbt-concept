package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.Address;

public interface AddressService {
	
	List<Address> selectList();
	
	Address selectOne(String id);
	
	String save(Address entity);
	
	String delete(String id);
	
}
