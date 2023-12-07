package com.tbtConcept.tbt.domain;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import lombok.Data;

//** PageList 결과 처리 DTO
//=> JPA를 사용하는 Repository에서는 Page 처리결과를 
//	 Page<Entity> Type으로 return  
//=> 화면출력을 위한 페이지 정보들을 구성하고 return하는 메서드를 제공함
//=> Entity 사용

//** Paging 관련 주요 JPA 객체
//=> Pageable (i) -> 구현체 PageRequest (c)
//	- Spring JPA에서 limit 쿼리를 사용할 수 있게 해줌.
//	- JPA가 DB에 접근해 데이터를 가져올 때 Pageable 타입의 변수를 넘겨주면 
//	  자동으로 limit 조건을 붙여 데이터를 가져온다.	
//	- 주요 메서드 검색 후 정리 ( 

//=> Page (i)
//	- Slice (i) -> Page (i)
//	- JPA 에서 Page 처리결과를 Page<Entity> Type으로 return
//	- Pageble을 파라미터로하여 가져온 결과물은 Page<SomeObject> 형태로 반환 되며, 
//	  대부분 다수의 row를 가져오기 때문에 Page<List<Entity>>의 형태로 반환됨. 
//	- 주요메서드
//	  . getTotalElements()
//		쿼리 결과물의 전체 데이터 개수이다. 
//		즉, Pageable에 의해 limit키워드가 조건으로 들어가지 않는 쿼리 결과의 수 인데, 
//		단지 갯수만 return 할 뿐 전체 데이터를 가져오지는 않는다.
//		( 게시판 사용자에게 전체 데이터 개수를 알려주는 용도로 사용하기 좋음)

//	  .	getTotalPages()
//		쿼리를 통해 가져온 요소들을 size 크기에 맞춰 페이징하였을 때 나오는 총 페이지의 갯수.
//		이를 활용해 쉽게 페이지 버튼의 생성이 가능하다.
//		
//	  .	getSize()
//		한 페이지당 출력하려는 Row 의 갯수.
//		
//	  .	getNumber()
//		요소를 가져온(출력하려는) 페이지의 번호. (currPageNo)
//		
//	  .	getNumberOfElements()
//		페이지에 존재하는 요소(Row)의 갯수. (최대 size의 수 만큼 나올 수 있음.)

// => https://velog.io/@albaneo0724/Spring-Pagination과-Page-그리고-Pageable

//** Collection 계층도
//=> Collection (i) -> List (i) -> ArrayList (c)  
//=> Collections
//	- Collection 들의 WrapperClass
//	- Collection 과 관련된 편리한 메서드를 제공 -> Collections.sort(List<T> list)

//** interface Collector
//=> 스트림의 collect() 메서드에서 사용될 메서드를 정의해놓은 인터페이스
//=> 이를 구현한 클래스가 Collectors 임.
//=> https://blog.naver.com/writer0713/221806454412

//** IntStream
//=> Java 8에서 추가된 Stream Interface의 한 종류
//=> int 형식의 요소들을 처리하기 위한 메소드들을 제공하며, 
//	 int 배열의 요소를 합산하거나, 필터링하거나, 매핑하는 기능을 지원한다.
//=> 기본자료형 int 형식의 연산에 최적화 되어있어 성능적으로 이점을 가진다.

@Data
public class PageResultDTO<EN> {
	//=> Entity type 지정
	
	//=>결과 리스트
    private List<EN> entityList;

    private int totalPage;  //총 페이지 번호
    private int page; //현재 페이지 번호
    private int size; //목록 사이즈
    
    private int start, end; //시작 페이지 번호, 끝 페이지 번호
    private boolean prev, next;  //이전, 다음
    private List<Integer> pageList; //페이지 번호 목록
	
    //** 생성자
    //=> Page<EN> type 을 이용해 최종 List<EN> 생성 
    public PageResultDTO(Page<EN> result){
    	
    	entityList = result.getContent(); // select 결과 List return
        totalPage = result.getTotalPages(); // 총 페이지의 갯수.
        makePageList(result.getPageable());
        
    } //생성자

    private void makePageList(Pageable pageable){

        this.page = pageable.getPageNumber() + 1; // 0부터 시작하므로 1을 추가
        this.size = pageable.getPageSize();

        //temp end page
        int tempEnd = (int)(Math.ceil(page/10.0)) * 10;

        start = tempEnd - 9;
        end = totalPage > tempEnd ? tempEnd: totalPage;
        
        prev = start > 1;
        next = totalPage > tempEnd;

        pageList = IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList());
        //=> IntStream : 기본자료형 int 형식의 연산에 최적화되어 있는 스트림 인터페이스
        //=> rangeClosed() : start ~ end 까지 즉, 종료값 포함 return 
        //=> boxed() : 숫자(int) 스트림을 일반스트림(객체형) 으로 변환
    } //makePageList
	
} //class
