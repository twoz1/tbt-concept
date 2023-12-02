package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.News;

public interface NewsService {
	List<News> selectList();

	News selectDetail(int news_id);

	int save(News entity);

	int delete(int news_id);
}
