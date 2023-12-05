package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.Faq;

public interface FaqService {
	
	List<Faq> selectList();
	
	Faq selectDetail(int faq_id);
	
	int save(Faq entity);
	
	int delete(int faq_id);
	
}
