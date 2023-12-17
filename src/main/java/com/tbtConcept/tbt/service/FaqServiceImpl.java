package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Faq;
import com.tbtConcept.tbt.repository.FaqRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FaqServiceImpl implements FaqService {
	private final FaqRepository repository;
	
	@Transactional
	@Override
	public PageResultDTO<Faq> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword) {
		Pageable pageable = requestDTO.getPageable();

		Page<Faq> result  = repository.findAllDesc(pageable, searchType, keyword);

		return new PageResultDTO<>(result);
	}

	@Override
	public List<Faq> selectList() {
		return repository.findAll();
	}

	@Override
	public Faq selectDetail(int faq_id) {
		Optional<Faq> result = repository.findById(faq_id);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public int save(Faq entity) {
		repository.save(entity);
		return entity.getFaq_id();
	}

	@Override
	public int delete(int faq_id) {
		repository.deleteById(faq_id);
		return faq_id;
	}
}
