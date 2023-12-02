<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>장바구니 등록 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="cart_list master_list">
				<h2 class="master_title">장바구니 등록</h2>

				<form action="cartInsert" method="Post">
					<table>
						<tr>
							<th>고객ID</th>
							<td><input type="text" name="user_id" id="user_id" required /></td>
						</tr>

						<tr>
							<th>상품ID</th>
							<td><input type="text" name="product_id" id="product_id"
								required /></td>
						</tr>

						<tr>
							<th>선택수량</th>
							<td><input type="text" name="cart_quan" id="cart_quan"
								required /></td>
						</tr>

						<tr>
							<td colspan="2">
								<button type="reset">초기화</button>
								<button type="submit">등록</button>
							</td>
						</tr>

					</table>
				</form>

			</div>
		</main>
	</div>
</body>
</html>