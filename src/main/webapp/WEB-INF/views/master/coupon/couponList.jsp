<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>쿠폰 목록 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/coupon/axCoupon.js"></script>
<script>
	history.replaceState({}, null, location.pathname);
</script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="coupon_list master_list">
				<h2 class="master_title">쿠폰 리스트</h2>
				<a class="m_button l_button" href="couponInsert">쿠폰등록</a>
				<a class="m_button l_button" href="couponDownList">회원쿠폰 발급내역</a>
				<table>
					<tr>
						<th>쿠폰ID</th>
						<th>쿠폰명</th>
						<th>할인율</th>
						<th></th>
						<th></th>
					</tr>
					
					<c:if test="${not empty requestScope.couponList}">
						<c:forEach var="c" items="${requestScope.couponList}">
							<tr>
								<td><a href="couponDetail?coupon_id=${c.coupon_id}">${c.coupon_id}</a></td>
								<td>${c.coupon_name}</td>
								<td>${c.coupon_disc}</td>
								<td><a href="couponDetail?coupon_id=${c.coupon_id}">상세보기</a></td>
								<td><button onclick="axCouponDelete(${c.coupon_id})" id="${c.coupon_id}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
			</div>
		</main>
	</div>
</body>
</html>