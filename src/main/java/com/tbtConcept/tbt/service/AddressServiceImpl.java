package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.Address;
import com.tbtConcept.tbt.repository.AddressRepository;


import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor 
public class AddressServiceImpl implements AddressService {
	
	   private final AddressRepository repository;


	   @Override
	   public List<Address> selectList() {
	      return repository.findAll();
	   }
	   

	   @Override
	   public Address selectOne(String id) {
	      Optional<Address> result = repository.findById(id);
	       if ( result.isPresent() ) return result.get();
	       else return null;
	   }
	   
	    @Override
	    public String save(Address entity) {
	        repository.save(entity); 
	        return entity.getUser_id();  
	    }
	    
	   @Override
	   public String delete(String id) {
	      repository.deleteById(id);
	      return id;
	   }
}
