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
         <div class="user_detail master_list">
            <h2 class="master_title">주문 상세보기</h2>
            <table>
            	<tr>
            		<th>주문번호 : </th>
            		<td>${requestScope.orderDetail.order_id}</td>
            	</tr>
            	<tr>
            		<th>회원 이메일 : </th>
            		<td>${requestScope.orderDetail.user_id}</td>
            	</tr>
            	<tr>
            		<th>쿠폰리스트 아이디 :</th>
            		<td>${requestScope.orderDetail.list_id}</td>
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
            		<th>받는사람 우편번호 : </th>
            		<td>${requestScope.orderDetail.reciver_avc}</td>
            	</tr>
            	<tr>
            		<th>받는사람 메인주소 : </th>
            		<td>${requestScope.orderDetail.reciver_city}</td>
            	</tr>
            	<tr>
            		<th>받는사람 상세주소 : </th>
            		<td>${requestScope.orderDetail.reciver_detail}</td>
            	</tr>
            	<tr>
            		<th>받는사람 핸드폰 번호 :</th>
            		<td>${requestScope.orderDetail.reciver_phoneNum}</td>
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
            		<td>${requestScope.orderDetail.total_eachQuan}</td>
            	</tr>
            	<tr>
            		<th>주문 상품 종류수량 :</th>
            		<td>${requestScope.orderDetail.totalPrice}</td>
            	</tr>
            	<tr>
            		<th>총결제금액 : </th>
            		<td>${requestScope.orderDetail.state}</td>
            	</tr>
            	<tr>
            		<th>배송상태 : </th>
            		<td></td>
            	</tr>
            	<tr>
            		<th>송장번호 : </th>
            		<td></td>
            	</tr>
            </table>
         </div>
      </main>
   </div>
</body>
</html>