<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>쿠폰 등록 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/coupon/couponInsert.css" />
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=690f7f693e4178058705e8916a0f3dc7&libraries=services"></script>
<script src="/resources/lib/js/coupon/coupon.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="coupon_insert master_save">
				<h2 class="master_title">쿠폰 등록</h2>
				<form action="couponInsert" method="Post" id="productInsert">
					<table>
						<tr>
							<th>쿠폰이름<span class="required">&#42;</span></th>
							<td>
								<input type="text" name="coupon_name" id="coupon_name" required />
							</td>
						</tr>
						<tr>
							<th>쿠폰할인율<span class="required">&#42;</span></th>
							<td>
								<input type="text" name="coupon_disc" id="coupon_disc" required />
								<p>%제외하고 숫자만 기재해주세요.</p>
							</td>
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
					<a class="m_button" href="couponList">쿠폰목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>