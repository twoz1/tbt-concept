package com.tbtConcept.tbt.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.tbtConcept.tbt.entity.QnA1on1;

public interface QnA1on1Repository extends JpaRepository<QnA1on1, Integer> {
//	Page<QnA1on1> findAll(Pageable pageable);
}
