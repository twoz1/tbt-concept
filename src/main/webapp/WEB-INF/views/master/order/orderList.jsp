<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 리스트 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/order/axOrder.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="order_list master_list">
				<h2 class="master_title">주문 리스트</h2>
				<a class="m_button l_button" href="/master/order/orderListInsert">주문등록</a>
				<table>
					<tr>
						<th>주문번호</th>
						<th>회원 ID</th>
						<th>주문일자</th>
						<th>받는사람</th>
						<th>주소</th>
						<th>총결제금액</th>
						<th>입금상태</th>
						<th>배송상태</th>
						<th>상세보기</th>
						<th></th>
					</tr>
					<c:if test="${not empty requestScope.orderList}">
						<c:forEach var="o" items="${requestScope.orderList}">
							<tr>
								<td><a href="orderListDetail?order_id=${o.order_id}">${o.order_id}</a></td>
								<td>${o.user_id}</td>
								<td>${o.order_date}</td>
								<td>${o.address_name}</td>
								<td>${o.address_avc}${o.address_city} ${o.address_detail}</td>
								<td>${o.order_total_price}</td>
								<td>${o.order_state}</td>
								<td>${o.order_del_state}</td>
								<td><a href="orderListDetail?order_id=${o.order_id}">상세보기</a></td>
								<td><button onclick="axOrderDelete('${o.order_id}')"
										id="${o.order_id}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>

			</div>
		</main>
	</div>
</body>
</html>
