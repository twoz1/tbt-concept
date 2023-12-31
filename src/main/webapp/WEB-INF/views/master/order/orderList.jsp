<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 리스트 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/order/axOrder.js"></script>
<script>
   history.replaceState({}, null, location.pathname);
</script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="order_list master_list">
				<h2 class="master_title">주문 리스트</h2>
				<div class="searchBox">
					<form action="orderList" method="get">
					    <select name="searchType" id="searchType" onchange="keywordClear()">
					        <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					        <option value="order_date" ${requestScope.searchType == 'order_date' ? "selected" : "" }>날짜별</option>
					        <option value="user_id" ${requestScope.searchType == 'user_id' ? "selected" : "" }>회원ID</option>
					    </select>
					    <input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					    <button type="submit" id="searchBtn">Search</button>
					</form>
				</div>
				<table>
					<tr>
						<th>주문번호</th>
						<th>회원 ID</th>
						<th>주문일자</th>
						<th>받는사람</th>
						<th>주소</th>
						<th>총결제금액</th>
						<th>입금상태</th>
						<th>배송상태</th>
						<th>상세보기</th>
						<th></th>
					</tr>
					<c:if test="${not empty requestScope.OrderList}">
						<c:forEach var="o" items="${requestScope.OrderList}">
							<tr>
								<td><a href="orderListDetail?order_id=${o.order_id}">${o.order_id}</a></td>
								<td>${o.user_id}</td>
								<td>${o.order_date}</td>
								<td>${o.address_name}</td>
								<td>${o.address_avc}${o.address_city}${o.address_detail}</td>
								<td>
								<fmt:formatNumber value="${o.order_total_price}" pattern="#,##0원"/>
									<%-- ${o.order_total_price} --%>
								</td>
								<td>${o.order_state}</td>
								<td>${o.order_del_state}</td>
								<td><a href="orderListDetail?order_id=${o.order_id}">상세보기</a></td>
								<td>
									<button onclick="axOrderDelete('${o.order_id}')"
										id="${o.order_id}">삭제</button>
								</td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				<div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="orderList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="orderList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
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
							<a href="orderList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="orderList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="orderList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
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
