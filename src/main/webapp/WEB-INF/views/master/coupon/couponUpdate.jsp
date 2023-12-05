<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>쿠폰 수정 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="coupon_update master_save">
				<h2 class="master_title">쿠폰수정</h2>
				<form action="couponUpdate" method="post">
					<table>
						<tr>
							<th>쿠폰ID</th>
							<td>${requestScope.couponDetail.coupon_id}
								<input type="hidden" name="coupon_id" value="${requestScope.couponDetail.coupon_id}">
							</td>
						</tr>
						<tr>
							<th>쿠폰명</th>
							<td>
								<input type="text" name="coupon_name" value="${requestScope.couponDetail.coupon_name}">
							</td>
						</tr>
						<tr>
							<th>할인율</th>
							<td><input type="text" name="coupon_disc" value="${requestScope.couponDetail.coupon_disc}"></td>
						</tr>
						
						<tr>
							<td colspan="2">
								<button type="reset">초기화</button>
								<button type="submit">수정</button>
							</td>
						</tr>
					</table>
				</form>
				<a class="m_button" href="couponDetail?coupon_id=${requestScope.couponDetail.coupon_id}">쿠폰상세</a>
				<a class="m_button" href="couponList">쿠폰상세</a>
				&nbsp; <a href="javascript:history.go(-1)">이전</a>&nbsp;
			</div>
		</main>
	</div>
</body>
</html>