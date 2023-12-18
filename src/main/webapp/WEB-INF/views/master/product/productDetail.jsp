<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 상세 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/product/productDetail.css" />
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="product_detail master_save">
				<h2 class="master_title">상품 상세</h2>
				<table>
					<tr>
						<th>상품ID</th>
						<td>${requestScope.productDetail.product_id}</td>
					</tr>
			
					<tr>
						<th>상품분류코드</th>
						<td><c:if test="${requestScope.productDetail.code == 'S'}">SUNGLASS</c:if>
							<c:if test="${requestScope.productDetail.code == 'G'}">GLASS</c:if>
						</td>
					</tr>
			
					<tr>
						<th>상품이름</th>
						<td>${requestScope.productDetail.product_name}</td>
					</tr>
			
					<tr>
						<th>상품가격</th>
						<td>${requestScope.productDetail.product_price}</td>
					</tr>
			
					<tr>
						<th>상품재고</th>
						<td>${requestScope.productDetail.product_stock}</td>
					</tr>
			
					<tr>
						<th>상품설명</th>
						<td>${requestScope.productDetail.product_detail.replaceAll('\\n','<br>')}</td>
					</tr>
			
					<tr>
						<th>상품이미지1</th>
						<td><img src="/resources/images/${requestScope.productDetail.product_img1}" alt="상품이미지1" /></td>
					</tr>
			
					<tr>
						<th>상품이미지2</th>
						<td><img src="/resources/images/${requestScope.productDetail.product_img2}" alt="상품이미지2" /></td>
					</tr>
			
					<tr>
						<th>상품이미지3</th>
						<td><img src="/resources/images/${requestScope.productDetail.product_img3}" alt="상품이미지3" /></td>
					</tr>
			
					<tr>
						<th>상품이미지4</th>
						<td><img src="/resources/images/${requestScope.productDetail.product_img4}" alt="상품이미지4" /></td>
					</tr>
				</table>
				<br/><hr/>
				<div class="nav_box">
					<a class="m_button" href="productDetail?jCode=U&product_id=${requestScope.productDetail.product_id}">상품수정</a>
					<a class="m_button" href="productList">상품목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>