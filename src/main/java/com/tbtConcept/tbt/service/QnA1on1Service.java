package com.tbtConcept.tbt.service;

import java.util.List;

import com.tbtConcept.tbt.entity.QnA1on1;

public interface QnA1on1Service {

	List<QnA1on1> selectList();

	QnA1on1 selectDetail(int qna_id);

	int save(QnA1on1 entity);

	int delete(int qna_id);

}
