package com.tbtConcept.tbt.service;

import java.util.List;

import javax.transaction.Transactional;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.QnA1on1;

public interface QnA1on1Service {
	@Transactional
	PageResultDTO<QnA1on1> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword);

	List<QnA1on1> selectListByUserId(String user_id);
	
	List<QnA1on1> selectListByProdId(int product_id);
	
	QnA1on1 selectDetail(int qna_id);

	int save(QnA1on1 entity);

	int delete(int qna_id);
}
