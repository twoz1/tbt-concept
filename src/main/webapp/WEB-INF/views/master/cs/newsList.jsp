<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>News 리스트 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/cs/axCS.js"></script>
<link rel="stylesheet" href="/resources/lib/css/cs/newsList.css" />
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="news_list master_list">
				<h2 class="master_title">News 리스트</h2>
				<a class="m_button l_button" href="newsInsert">News 등록</a>
				<div class="searchBox">
					<form action="newsList" method="get">
					    <select name="searchType" id="searchType" onchange="keywordClear()">
					        <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					        <option value="news_title" ${requestScope.searchType == 'news_title' ? "selected" : "" }>뉴스제목</option>
					        <option value="news_content" ${requestScope.searchType == 'news_content' ? "selected" : "" }>뉴스내용</option>
					    </select>
					    <input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					    <button type="submit" id="searchBtn">Search</button>
					</form>
				</div>
				
				<table>
					<tr>
						<th>News ID</th>
						<th>제목</th>
						<th>내용</th>
						<th></th>
						<th></th>
					</tr>

					<c:if test="${not empty requestScope.newsList}">
						<c:forEach var="n" items="${requestScope.newsList}">
							<tr>
								<td>${n.news_id}</td>
								<td><a href="newsDetail?news_id=${n.news_id}" class="n_titleW" id="hiddenContentsN">${n.news_title}</a></td>
								<td><a href="newsDetail?news_id=${n.news_id}" class="n_contentW" id="hiddenContentsN">${n.news_content}</a></td>
								<td>
									<a href="newsDetail?news_id=${n.news_id}">상세보기</a>
								</td>
								<td>
									<button onclick="axNewsDelete(${n.news_id})" id="${n.news_id}">삭제</button>
								</td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				<div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="newsList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="newsList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
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
							<a href="newsList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="newsList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="newsList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
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