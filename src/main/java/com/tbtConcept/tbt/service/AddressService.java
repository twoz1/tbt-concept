package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.Address;
import com.tbtConcept.tbt.entity.Product;

public interface AddressService {

    List<Address> selectList();

    Address selectOne(int id);  // 메소드 시그니처 수정

    String save(Address entity);

    String delete(int id);  // 메소드 시그니처 수정
    
 
}