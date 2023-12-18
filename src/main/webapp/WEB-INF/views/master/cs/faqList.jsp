<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>FAQ 리스트 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/cs/faqList.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/cs/axCS.js"></script>
<script>
   history.replaceState({}, null, location.pathname);
</script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="faq_list master_list">
				<h2 class="master_title">FAQ 리스트</h2>
				<a class="m_button l_button" href="faqInsert">FAQ 등록</a>
				<div class="searchBox">
					<form action="faqList" method="get">
						<select name="searchType" id="searchType"
							onchange="keywordClear()">
							<option value="all"
								${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
							<option value="faq_title"
								${requestScope.searchType == 'faq_title' ? "selected" : "" }>FAQ제목</option>
							<option value="faq_content"
								${requestScope.searchType == 'faq_content' ? "selected" : "" }>FAQ내용</option>
							<option value="faq_type"
								${requestScope.searchType == 'faq_type' ? "selected" : "" }>문의유형</option>
						</select>
						<input type="text" name="keyword" id="keyword"
							placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
						<button type="submit" id="searchBtn">Search</button>
					</form>
				</div>

				<table>
					<tr>
						<th>FAQ ID</th>
						<th>제목</th>
						<th>문의 유형</th>
						<th>내용</th>
						<th></th>
						<th></th>
					</tr>

					<c:if test="${not empty requestScope.faqList}">
						<c:forEach var="f" items="${requestScope.faqList}">
							<tr>
								<td>${f.faq_id}</td>
								<td><a href="faqDetail?faq_id=${f.faq_id}" class="f_titleW"
									id="hiddenContentsF">${f.faq_title}</a></td>
								<td>${f.faq_type}</td>
								<td><a href="faqDetail?faq_id=${f.faq_id}"
									class="f_contentW" id="hiddenContentsF">${f.faq_content}</a></td>
								<td><a href="faqDetail?faq_id=${f.faq_id}">상세보기</a></td>
								<td>
									<button onclick="axFaqDelete(${f.faq_id})" id="${f.faq_id}">삭제</button>
								</td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				<div class="pageNation">
					<c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
							<a class="firstB"
								href="faqList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
							<a class="ltB"
								href="faqList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
						</c:when>
						<c:otherwise>
							<span class="firstB">처음</span>
							<span class="ltB">&LT;</span>
						</c:otherwise>
					</c:choose>

					<c:forEach var="i" items="${resultDTO.pageList}">
						<c:if test="${i==resultDTO.page}">
							<span><strong>${i}</strong></span>&nbsp;
						</c:if>
						<c:if test="${i!=resultDTO.page}">
							<a
								href="faqList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>

					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB"
								href="faqList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB"
								href="faqList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
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