package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.News;
import com.tbtConcept.tbt.repository.NewsRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NewsServiceImpl implements NewsService {
	private final NewsRepository repository;
	
	@Transactional
	@Override
	public PageResultDTO<News> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword) {
		Pageable pageable = requestDTO.getPageable();

		Page<News> result  = repository.findAllDesc(pageable, searchType, keyword);

		return new PageResultDTO<>(result);
	}

	@Override
	public List<News> selectList() {
		return repository.findAll();
	}

	@Override
	public News selectDetail(int news_id) {
		Optional<News> result = repository.findById(news_id);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public int save(News entity) {
		repository.save(entity);
		return entity.getNews_id();
	}

	@Override
	public int delete(int news_id) {
		repository.deleteById(news_id);
		return news_id;
	}
}
