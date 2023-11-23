<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>tbt_concept | 상품등록</title>
</head>
<body>
	<form action="productInsert" method="Post" enctype="multipart/form-data" id="productInsert">
		<table>
			<tr>
				<th>상품ID</th>
				<td>
					<input type="text" name="product_id" id="product_id" readonly/>
					<!-- JS를 통하여 value 값 불러오는 기능 추후 구현 -->
				</td>
			</tr>

			<tr>
				<th>상품분류코드</th>
				<td>
					<select name="code" id="code">
						<option value="S">sunglass</option>
						<option value="G">glass</option>
					</select>
				</td>
			</tr>

			<tr>
				<th>상품이름</th>
				<td>
					<input type="text" name="product_name" id="product_name"/>
				</td>
			</tr>

			<tr>
				<th>상품가격</th>
				<td>
					<input type="text" name="product_prict" id="product_prict"/>
				</td>
			</tr>

			<tr>
				<th>상품재고</th>
				<td>
					<input type="text" name="product_stock" id="product_stock"/>
				</td>
			</tr>

			<tr>
				<th>상품설명</th>
				<td>
					<input type="text" name="product_detail" id="product_detail"/>
				</td>
			</tr>

			<tr>
				<th>상품이미지1</th>
				<td>
					<input type="file" name="product_img1" id="product_img1"/>
				</td>
			</tr>

			<tr>
				<th>상품이미지2</th>
				<td>
					<input type="file" name="product_img2" id="product_img2"/>
				</td>
			</tr>

			<tr>
				<th>상품이미지3</th>
				<td>
					<input type="file" name="product_img3" id="product_img3"/>
				</td>
			</tr>

			<tr>
				<th>상품이미지4</th>
				<td>
					<input type="file" name="product_img4" id="product_img4"/>
				</td>
			</tr>
			
			<tr>
				<td colspan="2">
					<button type="reset">취소</button>
					<button type="submit">등록</button>
				</td>
			</tr>
		</table>

	</form>

</body>
</html>