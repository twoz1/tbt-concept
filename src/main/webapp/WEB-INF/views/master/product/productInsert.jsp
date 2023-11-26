<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 등록 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/product/productInsert.css" />
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="product_insert master_save">
				<h2 class="master_title">상품 등록</h2>
				<form action="productInsert" method="Post"
					enctype="multipart/form-data" id="productInsert">
					<table>
						<tr>
							<th>상품분류코드<span class="required">&#42;</span></th>
							<td><select name="code" id="code" required>
									<option value="">선택</option>
									<option value="S">sunglass</option>
									<option value="G">glass</option>
							</select></td>
						</tr>

						<tr>
							<th>상품이름<span class="required">&#42;</span></th>
							<td><input type="text" name="product_name" id="product_name"
								required /></td>
						</tr>

						<tr>
							<th>상품가격<span class="required">&#42;</span></th>
							<td><input type="text" name="product_price" id="product_price" required /></td>
						</tr>

						<tr>
							<th>상품재고<span class="required">&#42;</span></th>
							<td><input type="text" name="product_stock" id="product_stock" required /></td>
						</tr>

						<tr>
							<th>상품설명<span class="required">&#42;</span></th>
							<td><textarea name="product_detail" id="product_detail" required ></textarea></td>
						</tr>

						<tr>
							<th>상품이미지1<span class="required">&#42;</span></th>
							<td><input class="product_img" type="file" name="product_img1f" id="product_img1f" required /></td>
						</tr>

						<tr>
							<th>상품이미지2<span class="required">&#42;</span></th>
							<td><input class="product_img" type="file" name="product_img2f" id="product_img2f" required /></td>
						</tr>

						<tr>
							<th>상품이미지3<span class="required">&#42;</span></th>
							<td><input class="product_img" type="file" name="product_img3f" id="product_img3f" required /></td>
						</tr>

						<tr>
							<th>상품이미지4<span class="required">&#42;</span></th>
							<td><input class="product_img" type="file" name="product_img4f" id="product_img4f" required /></td>
						</tr>

						<tr>
							<td colspan="2">
								<button type="reset">초기화</button>
								<button type="submit">등록</button>
							</td>
						</tr>
					</table>
				</form>
				<hr/>
				<div class="nav_box">
					<a class="m_button" href="productList">상품목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>