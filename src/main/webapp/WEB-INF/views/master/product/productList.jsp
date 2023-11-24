<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 리스트 | tbt_concept</title>
<style>
img {
	width: 50px;
	height: 50px;
}
</style>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/axProducts.js"></script>
</head>
<body>
	<h2>상품 리스트</h2>
	<table>
		<tr>
			<th>상품 ID</th>
			<th>상품 분류코드</th>
			<th>상품 이름</th>
			<th>상품 가격</th>
			<th>상품 재고</th>
			<th>상품 설명</th>
			<th>상품 이미지1</th>
			<th>상품 이미지2</th>
			<th>상품 이미지3</th>
			<th>상품 이미지4</th>
			<th>삭제</th>
		</tr>
		<c:if test="${not empty requestScope.productList}">
			<c:forEach var="p" items="${requestScope.productList}">
				<tr>
					<td><a href="productDetail?product_id=${p.product_id}">${p.product_id}</a></td>
					<td><c:if test="${p.code == 'S'}">SUNGLASS</c:if> <c:if
							test="${p.code == 'G'}">GLASS</c:if></td>
					<td><a href="productDetail?product_id=${p.product_id}">${p.product_name}</a></td>
					<td>${p.product_price}</td>
					<td>${p.product_stock}</td>
					<td>${p.product_detail}</td>
					<td><img src="/${p.product_img1}" alt="상품이미지1" /></td>
					<td><img src="/${p.product_img2}" alt="상품이미지2" /></td>
					<td><img src="/${p.product_img3}" alt="상품이미지3" /></td>
					<td><img src="/${p.product_img4}" alt="상품이미지4" /></td>
					<td><button onclick="axProductDelete(${p.product_id})"
							id="${p.product_id}">삭제</button></td>
				</tr>
			</c:forEach>
		</c:if>
	</table>
</body>
</html>