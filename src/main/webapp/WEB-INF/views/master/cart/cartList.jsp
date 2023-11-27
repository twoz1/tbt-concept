<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>장바구니 리스트 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/cart/cart.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="cart_list master_list">
				<h2 class="master_title">장바구니 리스트</h2>
				<a class="m_button l_button" href="cartInsert">장바구니 등록</a>

				<div>
					<form action="searchCartListA" method="get">
						<select name="searchType" id="searchType" onchange="keywordClear()">
							<option value="all">전체</option>
							<option value="userId">고객ID</option>
							<option value="prodId">상품ID</option>
						</select>
						
						<input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." />
						<button id="searchBtn">Search</button>
					</form>
				</div>

				<table>
					<tr>
						<th>장바구니ID</th>
						<th>고객ID</th>
						<th>상품ID</th>
						<th>선택수량</th>
					</tr>

					<c:if test="${not empty requestScope.cartList}">
						<c:forEach var="c" items="${requestScope.cartList}">
							<tr>
								<td>${c.cart_id}</td>
								<td>${c.user_id}</td>
								<td>${c.product_id}</td>
								<td>${c.cart_quan}</td>
							</tr>
						</c:forEach>
					</c:if>

				</table>
			</div>
		</main>
	</div>
</body>
</html>