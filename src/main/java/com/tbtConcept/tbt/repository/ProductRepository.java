package com.tbtConcept.tbt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tbtConcept.tbt.entity.Product;

public interface ProductRepository extends JpaRepository<Product, String> {

}
