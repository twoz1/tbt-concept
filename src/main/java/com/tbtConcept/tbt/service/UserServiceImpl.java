package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.entity.User;
import com.tbtConcept.tbt.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor 
public class UserServiceImpl implements UserService {

	   private final UserRepository repository;

	   // ** selectList
	   @Override
	   public List<User> selectList() {
	      return repository.findAllDesc();
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
			return entity.getUser_id();
		}
	    
	   // ** delete
	   @Override
	   public String delete(String id) {
	      repository.deleteById(id);
	      return id; // 삭제후 Key return
	   }
	   
}
