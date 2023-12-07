package com.tbtConcept.tbt.domain;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import lombok.Data;

@Data
public class PageResultDTO<EN> {
	
    private List<EN> entityList;

    private int totalPage;  //총 페이지 번호
    private int page; //현재 페이지 번호
    private int size; //목록 사이즈
    
    private int start, end; //시작 페이지 번호, 끝 페이지 번호
    private boolean prev, next;  //이전, 다음
    private List<Integer> pageList; //페이지 번호 목록
	
    public PageResultDTO(Page<EN> result) {
        entityList = result.getContent(); // select 결과 List return
        totalPage = result.getTotalPages(); // 총 페이지의 갯수.
        makePageList(result.getPageable());
    }

    private void makePageList(Pageable pageable) {
        this.page = pageable.getPageNumber() + 1;
        this.size = pageable.getPageSize();

        String searchKeyword = "";
        if (pageable instanceof PageRequest) {
            PageRequest pageRequest = (PageRequest) pageable;
            if (pageRequest.getSort().isSorted()) {
                searchKeyword = pageRequest.getSort().get().findFirst().get().getProperty();
            }
        }

        int tempEnd = (int) (Math.ceil(page / 10.0)) * 10;
        start = tempEnd - 9;
        end = totalPage > tempEnd ? tempEnd : totalPage;
        prev = start > 1;
        next = totalPage > tempEnd;
        pageList = IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList());
    }
    
    
	
} //class
