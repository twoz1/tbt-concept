<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관심상품 목록 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/user/axUser.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="wish_list master_list">
				<h2 class="master_title">관심상품 리스트</h2>
				<form action="wishList" method="get">
					<select name="searchType" id="searchType" onchange="keywordClear()">
					    <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					    <option value="user_id" ${requestScope.searchType == 'user_id' ? "selected" : "" }>회원ID</option>
					    <option value="product_name" ${requestScope.searchType == 'product_name' ? "selected" : "" }>상품명</option>
					</select>
					<input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					<button type="submit" id="searchBtn">Search</button>
				</form>
				<table>
					<tr>
						<th>관심등록일</th>
						<th>회원ID</th>
						<th>상품ID</th>
						<th>상품명</th>
						<th></th>
					</tr>
					
					<c:if test="${not empty requestScope.wishList}">
						<c:forEach var="w" items="${requestScope.wishList}">
							<tr>
								<td>${w.wish_date}</td>
								<td>${w.user_id}</td>
								<td>${w.product_id}</td>
								<td>${w.product_name}</td>
								<td><button onclick="axWishDelete('${w.user_id}',${w.product_id})">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				 <div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="wishList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="wishList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
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
							<a href="wishList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="wishList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="wishList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
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