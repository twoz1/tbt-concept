<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 상세보기 | tbt_concept</title>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="order_detail master_list">
            <h2 class="master_title">주문 상세</h2>
            <table>
            	<tr>
            		<th>주문번호 : </th>
            		<td>${requestScope.orderDetail.order_id}</td>
            	</tr>
            	<tr>
            		<th>회원 ID : </th>
            		<td>${requestScope.orderDetail.user_id}</td>
            	</tr>
            	<tr>
            		<th>주문일자 : </th>
            		<td>${requestScope.orderDetail.date}</td>
            	</tr>
            	<tr>
            		<th>받는사람 : </th>
            		<td>${requestScope.orderDetail.reciver}</td>
            	</tr>
            	<tr>
            		<th>주소 : </th>
            		<td>
            			${requestScope.orderDetail.reciver_avc}
            			${requestScope.orderDetail.reciver_city}
            			${requestScope.orderDetail.reciver_detail}
            		</td>
            	</tr>
            	<tr>
            		<th>받는사람 핸드폰 번호 :</th>
            		<td>${requestScope.orderDetail.reciver_phone_num}</td>
            	</tr>
            	<tr>
            		<th>배송 메세지 : </th>
            		<td>${requestScope.orderDetail.message}</td>
            	</tr>
            	<tr>
            		<th>결제방법 : </th>
            		<td>${requestScope.orderDetail.pay}</td>
            	</tr>
            	<tr>
            		<th>쿠폰 : </th>
            		<td>${requestScope.orderDetail.order_coupon}</td>
            	</tr>
            	<tr>
            		<th>주문 상품 종류수량 :</th>
            		<td>${requestScope.orderDetail.each_quan}</td>
            	</tr>
            	<tr>
            		<th>총결제금액 : </th>
            		<td>${requestScope.orderDetail.total_price}</td>
            	</tr>
            	<tr>
            		<th>입금상태 : </th>
            		<td>${requestScope.orderDetail.state}</td>
            	</tr>
            	<tr>
            		<th>배송상태 : </th>
            		<td>${requestScope.orderDetail.del_state}</td>
            	</tr>
            	<tr>
            		<th>송장번호 : </th>
            		<td>${requestScope.orderDetail.del_num}</td>
            	</tr>
            </table>
         </div>
      </main>
   </div>
</body>
</html>