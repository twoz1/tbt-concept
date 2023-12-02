package com.tbtConcept.tbt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tbtConcept.tbt.entity.News;

public interface NewsRepository extends JpaRepository<News, Integer> {

}
