<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 쿠폰 발급 목록 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/coupon/axCoupon.js"></script>
<link rel="stylesheet" href="/resources/lib/css/coupon/couponList.css" />
<script>
	history.replaceState({}, null, location.pathname);
</script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="couponU_list master_list">
				<h2 class="master_title">회원 쿠폰 발급 리스트</h2>
				<a class="m_button l_button" href="couponList">쿠폰관리</a>
				<div class="searchBox">
					<form action="couponDownList" method="get">
					    <select name="searchType" id="searchType" onchange="keywordClear()">
					        <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					        <option value="user_id" ${requestScope.searchType == 'user_id' ? "selected" : "" }>회원ID</option>
					        <option value="coupon_id" ${requestScope.searchType == 'coupon_id' ? "selected" : "" }>쿠폰ID</option>
					    </select>
					    <input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					    <button type="submit" id="searchBtn">Search</button>
					</form>
				</div>
				<table>
					<tr>
						<th>쿠폰ID</th>
						<th>회원ID</th>
						<th>쿠폰발급일</th>
						<th>쿠폰만료일</th>
					</tr>
					
					<c:if test="${not empty requestScope.couponDownList}">
						<c:forEach var="c" items="${requestScope.couponDownList}">
							<tr>
								<td>${c.coupon_id}</td>
								<td>${c.user_id}</td>
								<td>${c.coupon_start}</td>
								<td>${c.coupon_end}</td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				 
				 <div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="couponDownList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="couponDownList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
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
							<a href="couponDownList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="couponDownList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="couponDownList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
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