package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.Faq;

public interface FaqService {
	
	@Transactional
    PageResultDTO<Faq> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword);
	
	List<Faq> selectList();
	
	Faq selectDetail(int faq_id);
	
	int save(Faq entity);
	
	int delete(int faq_id);
	
}
