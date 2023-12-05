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
    public Address selectOne(int id) {
        Optional<Address> result = repository.findById(id);
        return result.orElse(null);
    }

    @Override
    public String save(Address entity) {
        repository.save(entity);
        return entity.getUser_id();
    }

    @Override
    public String delete(int id) {
        repository.deleteById(id);
        return String.valueOf(id);
    }
}