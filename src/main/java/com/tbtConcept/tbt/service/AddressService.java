package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Address;


public interface AddressService {
	

	PageResultDTO<Address> selectAList(PageRequestDTO requestDTO, String searchType, String keyword);
	
    List<Address> selectList();

    Address selectOne(int id);  // 메소드 시그니처 수정

    String save(Address entity);

    String delete(int id);  // 메소드 시그니처 수정
    
 
}