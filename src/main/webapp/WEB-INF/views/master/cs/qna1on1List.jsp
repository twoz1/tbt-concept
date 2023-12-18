<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>QnA 리스트 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/cs/axCS.js"></script>
<script>
   history.replaceState({}, null, location.pathname);
</script>
<link rel="stylesheet" href="/resources/lib/css/cs/qna1on1List.css" />
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="qna1on1_list master_list">
				<h2 class="master_title">QnA 리스트</h2>
				<div class="searchBox">
					<form action="qna1on1List" method="get">
					    <select name="searchType" id="searchType" onchange="keywordClear()">
					        <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					        <option value="qna_title" ${requestScope.searchType == 'qna_title' ? "selected" : "" }>QnA제목</option>
					        <option value="qna_content" ${requestScope.searchType == 'qna_content' ? "selected" : "" }>QnA내용</option>
					        <option value="qna_type" ${requestScope.searchType == 'qna_type' ? "selected" : "" }>QnA목록</option>
					        <option value="product_id" ${requestScope.searchType == 'product_id' ? "selected" : "" }>상품번호</option>
					        <option value="user_id" ${requestScope.searchType == 'user_id' ? "selected" : "" }>작성자</option>
					    </select>
					    <input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					    <button type="submit" id="searchBtn">Search</button>
					</form>
				</div>

				<c:if test="${not empty requestScope.message}">${requestScope.message}</c:if>

				<table>
					<tr>
						<th>문의번호</th>
						<th>문의유형</th>
						<th>상품ID</th>
						<th>고객ID</th>
						<th>제목</th>
						<th>답변여부</th>
						<th></th>
						<th></th>
					</tr>

					<c:if test="${not empty requestScope.qna1on1List}">
						<c:forEach var="q" items="${requestScope.qna1on1List}">
							<tr>
								<td><a href="qna1on1Update?qna_id=${q.qna_id}">${q.qna_id}</a></td>
								<td>${q.qna_type}</td>
								<td>${q.product_id}</td>
								<td>${q.user_id}</td>
								<td><a href="qna1on1Update?qna_id=${q.qna_id}"
									id="hiddenContentsQ">${q.qna_title}</a></td>
								<td>${not empty q.qna_answer ? 'Y' : 'N'}</td>
								<td><a href="qna1on1Update?qna_id=${q.qna_id}">상세보기</a></td>
								<td><button onclick="axQnA1on1Delete(${q.qna_id})"
										id="${q.qna_id}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				<div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="qna1on1List?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="qna1on1List?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
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
							<a href="qna1on1List?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="qna1on1List?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="qna1on1List?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
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