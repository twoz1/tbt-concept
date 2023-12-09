package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.News;
import com.tbtConcept.tbt.entity.OrderList;

public interface NewsService {
	PageResultDTO<News> selectList(PageRequestDTO requestDTO);

	News selectDetail(int news_id);

	int save(News entity);

	int delete(int news_id);
}
