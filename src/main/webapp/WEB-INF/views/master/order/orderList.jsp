<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 리스트 | tbt_concept</title>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="order_list master_list">
            <h2 class="master_title">주문 리스트</h2>
            <table>
            	<tr>
            		<th>주문번호</th>
            		<th>회원 이메일</th>
            		<th>쿠폰리스트 아이디</th>
            		<th>주문일자</th>
            		<th>받는사람</th>
            		<th>받는사람 우편번호</th>
            		<th>받는사람 메인주소</th>
            		<th>받는사람 상세주소</th>
            		<th>받는사람 핸드폰 번호</th>
            		<th>배송 메세지</th>
            		<th>결제방법</th>
            		<th>쿠폰</th>
            		<th>주문 상품 종류수량</th>
            		<th>총결제금액</th>
            		<th>배송상태</th>
            		<th>송장번호</th>
            	</tr>
            	<c:if test="${not empty requsetScope.orderList}">
            		<c:forEach var="o" items="${requsetScope.orderList}">
            			<tr>
            				<td><a href="orderDetail?o.order_id=${o.order_id}">${o.order_id}</a></td>
            				<td>${o.user_id}</td>
            				<td>${o.coupon_list_id}</td>
            				<td>${o.order_date}</td>
            				<td>${o.order_receiver}</td>
            				<td>${o.order_receiver_avc}</td>
            				<td>${o.order_receiver_city}</td>
            				<td>${o.order_receiver_detail}</td>
            				<td>${o.order_receiver_phoneNum}</td>
            				<td>${o.order_message}</td>
            				<td>${o.order_pay}</td>
            				<td>${o.order_total_eachQuan}</td>
            				<td>${o.order_totalPrice}</td>
            				<td>${o.order_state}</td>
            				<td>${o.order_delState}</td>
            				<td>${o.order_delNum}</td>
            			</tr>
            		</c:forEach>
            	</c:if>
            </table>
         </div>
      </main>
   </div>
</body>
</html>