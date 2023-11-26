<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 수정 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/product/productUpdate.css" />
<script src="/resources/lib/js/product/axProducts.js"></script>
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="product_update master_save">
				<h2 class="master_title">상품 수정</h2>
				<form action="productUpdate" method="Post" enctype="multipart/form-data" id="productUpdate">
					<table>
						<tr>
							<th>상품ID<span class="required">&#42;</span></th>
							<td><input name="product_id" value="${requestScope.productDetail.product_id}" readonly/></td>
						</tr>
			 
						<tr>
							<th>상품분류코드<span class="required">&#42;</span></th>
							<td>
								<select name="code" id="code">
									<option value="">선택</option>
									<option value="S" ${requestScope.productDetail.code == 'S' ? "selected" : "" }>sunglass</option>
									<option value="G" ${requestScope.productDetail.code == 'G' ? "selected" : "" }>glass</option>
								</select>
							</td>
						</tr>
			
						<tr>
							<th>상품이름<span class="required">&#42;</span></th>
							<td>
								<input type="text" name="product_name" id="product_name" value="${requestScope.productDetail.product_name}" />
							</td>
						</tr>
			
						<tr>
							<th>상품가격<span class="required">&#42;</span></th>
							<td>
								<input type="text" name="product_price" id="product_price" value="${requestScope.productDetail.product_price}" />
							</td>
						</tr>
			
						<tr>
							<th>상품재고<span class="required">&#42;</span></th>
							<td>
								<input type="text" name="product_stock" id="product_stock" value="${requestScope.productDetail.product_stock}"/>
							</td>
						</tr>
			
						<tr>
							<th>상품설명<span class="required">&#42;</span></th>
							<td>
								<textarea name="product_detail" id="product_detail">${requestScope.productDetail.product_detail}</textarea>
							</td>
						</tr>
			
						<tr>
							<th>상품이미지1<span class="required">&#42;</span></th>
							<td>
								<!--  -->
								<img id="img1" alt="상품이미지1" src="/${requestScope.productDetail.product_img1}">
								<input type="file" name="product_img1f" id="product_img1f" onchange="previewImage(event, 'img1')" />
								<input type="hidden" name="product_img1" id="product_img1" value="${requestScope.productDetail.product_img1}"/>
							</td>
						</tr>
			
						<tr>
							<th>상품이미지2<span class="required">&#42;</span></th>
							<td>
								<img id="img2" alt="상품이미지2" src="/${requestScope.productDetail.product_img2}">
								<input type="file" name="product_img2f" id="product_img2f" onchange="previewImage(event, 'img2')"/>
								<input type="hidden" name="product_img2" id="product_img2" value="${requestScope.productDetail.product_img2}"/>
							</td>
						</tr>
			
						<tr>
							<th>상품이미지3<span class="required">&#42;</span></th>
							<td>
								<img id="img3" alt="상품이미지3" src="/${requestScope.productDetail.product_img3}">
								<input type="file" name="product_img3f" id="product_img3f" onchange="previewImage(event, 'img3')"/>
								<input type="hidden" name="product_img3" id="product_img3" value="${requestScope.productDetail.product_img3}"/>
							</td>
						</tr>
			
						<tr>
							<th>상품이미지4<span class="required">&#42;</span></th>
							<td>
								<img id="img4" alt="상품이미지4" src="/${requestScope.productDetail.product_img4}">
								<input type="file" name="product_img4f" id="product_img4f" onchange="previewImage(event, 'img4')"/>
								<input type="hidden" name="product_img4" id="product_img4" value="${requestScope.productDetail.product_img4}"/>
							</td>
						</tr>
						
						<tr>
							<td colspan="2">
								<button type="reset" onclick="resetImg()">초기화</button>
								<button type="submit">수정</button>
							</td>
						</tr>
					</table>
				</form>
				<hr/>
				<div class="nav_box">
					<a class="m_button" href="productDetail?product_id=${requestScope.productDetail.product_id}">상품상세</a>
					<a class="m_button" href="productList">상품목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>