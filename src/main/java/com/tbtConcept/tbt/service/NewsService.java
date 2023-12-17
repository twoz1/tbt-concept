package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.News;

public interface NewsService {
	
	@Transactional
    PageResultDTO<News> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword);
	
	List<News> selectList();

	News selectDetail(int news_id);

	int save(News entity);

	int delete(int news_id);
}
