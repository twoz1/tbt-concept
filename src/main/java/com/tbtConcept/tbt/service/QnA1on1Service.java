package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.QnA1on1;

public interface QnA1on1Service {

	List<QnA1on1> selectList();

	List<QnA1on1> selectListByUserId(String user_id);
	
	List<QnA1on1> selectListByProdId(int product_id);
	
	QnA1on1 selectDetail(int qna_id);

	int save(QnA1on1 entity);

	int delete(int qna_id);

	//Page<QnA1on1> pagination(int page, int size);

}
