<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지점 리스트 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/store/storeList.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/store/store.js"></script>
<script>
	history.replaceState({}, null, location.pathname);
</script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="store_list master_list">
				<h2 class="master_title">지점 리스트</h2>
				<a class="m_button l_button" href="storeInsert">지점등록</a>
				<form action="storeList" method="get">
					<select name="searchType" id="searchType" onchange="keywordClear()">
					    <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					    <option value="store_id" ${requestScope.searchType == 'store_id' ? "selected" : "" }>지점명</option>
					    <option value="store_address" ${requestScope.searchType == 'store_address' ? "selected" : "" }>주소</option>
					</select>
					<input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					<button type="submit" id="searchBtn">Search</button>
				</form>
				<table>
					<tr>
						<th>지점명</th>
						<th>연락처</th>
						<th>주소</th>
						<th>상세주소</th>
						<th></th>
						<th></th>
					</tr>
					<c:if test="${not empty requestScope.storeList}">
						<c:forEach var="s" items="${requestScope.storeList}">
							<tr>
								<td>${s.store_id}점</td>
								<td>${s.store_tel}</td>
								<td>${s.store_address}</td>
								<td>${s.store_address_detail}</td>
								<td><a href="storeDetail?store_id=${s.store_id}">상세보기</a></td>
								<td><button onclick="storeDelete('${s.store_id}')" id="${s.store_id}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				
				<div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="storeList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="storeList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
						</c:when>
						<c:otherwise>
						  	<span class ="firstB">처음</span>
						  	<span class ="ltB">&LT;</span>
						</c:otherwise>
					</c:choose> 	 
					 
					<c:forEach var="i" items="${resultDTO.pageList}">
						<c:if test="${i==resultDTO.page}">
							<span><strong>${i}</strong></span>&nbsp;
						</c:if>
						<c:if test="${i!=resultDTO.page}">
							<a href="storeList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="storeList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="storeList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
						</c:when>
						<c:otherwise>
							<span class="gtB">&GT;</span>
							<span class="lastB">마지막</span>
						</c:otherwise>
					</c:choose>
				 </div>
				 
			</div>
		</main>
	</div>
</body>
</html>