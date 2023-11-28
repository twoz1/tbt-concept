<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 상세보기 | tbt_concept</title>
<script >
/* function typeChange() {

    let order_dateComplete = "입금완료";

    if(document.getElementById("order_date").value == "입금대기"){
	    document.getElementById("order_date").value = order_dateComplete;
    }
    
    
} */
/* function typeChange() {
    let orderStateElement = document.getElementById("order_state");

    // 만약 주문 상태가 "입금대기"일 때 "입금완료"로 변경
    if (orderStateElement.value === "입금대기") {
        orderStateElement.value = "입금완료";
    }
} */

function typeChange() {
    // 주문 상태 필드의 값을 "입금완료"로 변경
    let orderStateElement = document.getElementById("order_state");
    if (orderStateElement.value === "입금대기") {
        orderStateElement.value = "입금완료";

        // 주문 상태를 변경한 뒤 해당 값을 화면에 업데이트
        let orderStateDisplayElement = document.getElementById("orderStateDisplay");
        orderStateDisplayElement.textContent = "입금완료";
    }
}

</script>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="order_Listdetail master_list">
            <h2 class="master_title">주문 상세</h2>
            <table>
            	<tr>
            		<th>주문번호 : </th>
            		<td>${requestScope.orderListDetail.order_id}</td>
            	</tr>
            	<tr>
            		<th>회원 ID : </th>
            		<td>${requestScope.orderListDetail.user_id}</td>
            	</tr>
            	<tr>
            		<th>주문일자 : </th>
            		<td>${requestScope.orderListDetail.order_date}</td>
            	</tr>
            	<tr>
            		<th>받는사람 : </th>
            		<td>${requestScope.orderListDetail.order_receiver}</td>
            	</tr>
            	<tr>
            		<th>주소 : </th>
            		<td>
            			${requestScope.orderListDetail.order_receiver_avc}
            			${requestScope.orderListDetail.order_receiver_city}
            			${requestScope.orderListDetail.order_receiver_detail}
            		</td>
            	</tr>
            	<tr>
            		<th>받는사람 핸드폰 번호 :</th>
            		<td>${requestScope.orderListDetail.order_receiver_phone_num}</td>
            	</tr>
            	<tr>
            		<th>배송 메세지 : </th>
            		<td>${requestScope.orderListDetail.order_message}</td>
            	</tr>
            	<tr>
            		<th>결제방법 : </th>
            		<td>${requestScope.orderListDetail.order_pay}</td>
            	</tr>
            	<tr>
            		<th>쿠폰 : </th>
            		<td>${requestScope.orderListDetail.order_coupon}</td>
            	</tr>
            	<tr>
            		<th>주문 상품 종류수량 :</th>
            		<td>${requestScope.orderListDetail.order_total_each_quan}</td>
            	</tr>
            	<tr>
            		<th>총결제금액 : </th>
            		<td>${requestScope.orderListDetail.order_total_price}</td>
            	</tr>
            	<tr>
            		<th>입금상태 : </th>
            		<td id="orderStateDisplay">${requestScope.orderListDetail.order_state}</td>
            	</tr>
            	<tr>
            		<th>배송상태 : </th>
            		<td>${requestScope.orderListDetail.order_del_state}</td>
            	</tr>
            	<tr>
            		<th>송장번호 : </th>
            		<td>${requestScope.orderListDetail.order_del_num}</td>
            	</tr>
            </table>
            
            <a class="m_button" href="orderListDetail?jCode=U&order_id=${requestScope.orderListDetail.order_id}">주문수정</a>
            <button type="button" onclick="typeChange()">입금완료</button>
         </div>
      </main>
   </div>
</body>
</html>