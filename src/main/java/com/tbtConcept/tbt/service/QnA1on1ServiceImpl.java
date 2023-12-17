package com.tbtConcept.tbt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tbtConcept.tbt.domain.PageRequestDTO;
import com.tbtConcept.tbt.domain.PageResultDTO;
import com.tbtConcept.tbt.entity.QnA1on1;
import com.tbtConcept.tbt.repository.QnA1on1Repository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QnA1on1ServiceImpl implements QnA1on1Service {
	private final QnA1on1Repository repository;
	
	@Override
	public PageResultDTO<QnA1on1> findAllDescPage(PageRequestDTO requestDTO, String searchType, String keyword) {
		Pageable pageable = requestDTO.getPageable();

		Page<QnA1on1> result  = repository.findAllDesc(pageable, searchType, keyword);

		return new PageResultDTO<>(result);
	}

	@Override
	public List<QnA1on1> selectListByUserId(String user_id) {
		return repository.selectListByUserId(user_id);
	}
	
	@Override
	public List<QnA1on1> selectListByProdId(int product_id) {
		return repository.selectListByProdId(product_id);
	}
	
	@Override
	public QnA1on1 selectDetail(int qna_id) {
		Optional<QnA1on1> result = repository.findById(qna_id);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public int save(QnA1on1 entity) {
		repository.save(entity);
		return entity.getQna_id();
	}

	@Override
	public int delete(int qna_id) {
		repository.deleteById(qna_id);
		return qna_id;
	}

}
