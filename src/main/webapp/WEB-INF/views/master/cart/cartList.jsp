<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>장바구니 리스트 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="user_list master_list">
				<h2 class="master_title">장바구니 리스트</h2>
				<a href="cartInsert">장바구니 등록</a>
				<table>
					<tr>
						<th>장바구니ID</th>
						<th>고객ID</th>
						<th>상품ID</th>
						<th>상품재고</th>
					</tr>
					
					<c:if test="${not empty requestScope.cartList}">
						<c:forEach var="c" items="{requestScope.cartList}">
							<tr>
								<td><a href=""></a>${c.cart_id}</td>
								<td>${c.cart}</td>
							
							
							
							</tr>
						</c:forEach>
					
					
					
					
					
					
					</c:if>
				
				
				</table>
			</div>
		</main>
	</div>
</body>
</html>