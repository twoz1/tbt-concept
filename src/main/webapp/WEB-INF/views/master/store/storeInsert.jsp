<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지점 등록 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/store/storeInsert.css" />
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=690f7f693e4178058705e8916a0f3dc7&libraries=services"></script>
<script src="/resources/lib/js/store/store.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="store_insert master_save">
				<h2 class="master_title">지점 등록</h2>
				<form action="storeInsert" method="Post"
					enctype="multipart/form-data" id="productInsert">
					<table>
						<tr>
							<th>지점명<span class="required">&#42;</span></th>
							<td>
								<input type="text" name="store_id" id="store_id" required />
								<p>"점"을 빼고 지점명만 기재해주세요. ex) 서울점 -> 서울</p>
							</td>
						</tr>
						
						<tr>
							<th>지점연락처<span class="required">&#42;</span></th>
							<td>
								<input type="text" name="store_tel" id="store_tel" required />
								<p>-를 포함하여 입력해주세요. ex) 02-000-000</p>
							</td>
						</tr>

						<tr>
							<th>지점주소<span class="required">&#42;</span></th>
							<td><input type="text" name="store_address" id="store_address" required readonly/></td>
						</tr>
						
						<tr>
							<th>상세주소</th>
							<td><input type="text" name="store_address_detail" id="store_address_detail" /></td>
						</tr>

						<tr>
							<th>좌표 X</th>
							<td><input type="text" name="store_x" id="store_x" readonly/></td>
						</tr>

						<tr>
							<th>좌표 Y</th>
							<td><input type="text" name="store_y" id="store_y" readonly/></td>
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
					<a class="m_button" href="storeList">지점목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>