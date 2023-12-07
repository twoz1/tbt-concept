<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 쿠폰 발급 목록 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/coupon/axCoupon.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="coupon_list master_list">
				<h2 class="master_title">회원 쿠폰 발급 리스트</h2>
				<a class="m_button l_button" href="couponList">쿠폰관리</a>
				<table>
					<tr>
						<th>쿠폰ID</th>
						<th>회원ID</th>
						<th>쿠폰발급일</th>
						<th>쿠폰만료일</th>
						<th>사용여부</th>
					</tr>
					
					<c:if test="${not empty requestScope.couponDownList}">
						<c:forEach var="c" items="${requestScope.couponDownList}">
							<tr>
								<td>${c.coupon_id}</td>
								<td>${c.user_id}</td>
								<td>${c.coupon_start}</td>
								<td>${c.coupon_end}</td>
								<td></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
			</div>
			
		</main>
	</div>
</body>
</html>