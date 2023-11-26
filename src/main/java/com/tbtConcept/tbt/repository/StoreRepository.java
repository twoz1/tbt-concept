package com.tbtConcept.tbt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tbtConcept.tbt.entity.Store;

public interface StoreRepository extends JpaRepository<Store, String> {
	
}
