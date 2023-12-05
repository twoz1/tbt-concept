<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 상테 업데이트 | tbt_concept</title>
<script>
function typeChange() {
    let order_stateChange = "입금완료";
    let order_delStateChanging = "배송중";
    let order_delStateChange = "배송완료";

    // "입금대기" 상태인 경우에만 변경
    if (document.getElementById("order_state").value.trim() === "입금대기") {
        document.getElementById("order_state").value = order_stateChange;
    }
    
    if (document.getElementById("order_del_state").value.trim() === "배송대기") {
        document.getElementById("order_del_state").value = order_delStateChanging;
    }else {
       document.getElementById("order_del_state").value = order_delStateChange;
    }
}

/* function generateInvoiceNumber() {
    // 여기에 송장번호 생성 로직 추가 (서버에서 생성되는 송장번호)
    let invoiceNumber = Math.floor(Math.random() * 10000000000000);
    return invoiceNumber;
}

function fillInvoiceNumber() {
    let invoiceNumber = generateInvoiceNumber();
    document.getElementById("order_del_num").value = invoiceNumber;
} */
function createDelNumber() {
    // 여기에 송장번호 생성 로직 추가 (서버에서 생성되는 송장번호)
    let invoiceNumber = Math.floor(Math.random() * 10000000000000);
    return invoiceNumber;
}

function changeDelNumber() {
    let invoiceNumber = createDelNumber();
    document.getElementById("order_del_num").value = invoiceNumber;
}

</script>
</head>
<body>
   <div id="master_wrap">
      <%@ include file="../masterHeader.jsp"%>
      <main id="master_main">
         <div class="user_list master_list">
            <h2 class="master_title">주문 상테 업데이트</h2>
            <form action="orderListUpdate" method="Post">
               <table>
                  <tr>
                     <th>주문번호</th>
                     <td><input type="text" name="order_id" id="order_id"
                        required readonly
                        value="${requestScope.orderListDetail.order_id}" /></td>
                  </tr>
                  <tr>
                     <th>회원 아이디</th>
                     <td><input type="text" name="user_id" id="user_id" required
                        readonly value="${requestScope.orderListDetail.user_id}" /></td>
                  </tr>
                  <tr>
                     <th>주문일자</th>
                     <td><input type="hidden" name="order_date" id="order_date"
                        required readonly
                        value="${requestScope.orderListDetail.order_date}" />
                        ${requestScope.orderListDetail.order_date}</td>
                  </tr>
                  <tr>
                     <th>받는사람</th>
                     <td><input type="text" name="address_name"
                        id="address_name" required readonly
                        value="${requestScope.orderListDetail.order_receiver}" /></td>
                  </tr>
                  <tr>
                     <th>우편번호</th>
                     <td><input type="text" name="address_avc"
                        id="address_avc" readonly required
                        value="${requestScope.orderListDetail.order_receiver_avc}" /></td>
                  </tr>
                  <tr>
                     <th>주소 1</th>
                     <td><input type="text" name="address_city"
                        id="address_city" readonly required
                        value="${requestScope.orderListDetail.order_receiver_city}" /></td>
                  </tr>
                  <tr>
                     <th>주소 2</th>
                     <td><input type="text" name="address_detail"
                        id="address_detail" readonly required
                        value="${requestScope.orderListDetail.order_receiver_detail}" />
                     </td>
                  </tr>
                  <tr>
                     <th>전화번호</th>
                     <td><input type="text" name="address_phone_num"
                        id="address_phone_num" required
                        value="${requestScope.orderListDetail.order_receiver_phone_num}" />
                     </td>
                  </tr>
                  <tr>
                     <th>배송메시지</th>
                     <td><input type="text" name="order_message"
                        id="order_message" required
                        value="${requestScope.orderListDetail.order_message}" readonly />
                     </td>
                  </tr>
                  <tr>
                     <th>결제방법</th>
                     <td><input type="text" name="order_pay" id="order_pay"
                        required readonly
                        value="${requestScope.orderListDetail.order_pay}" /></td>
                  </tr>
                  <tr>
                     <th>쿠폰</th>
                     <td><input type="text" name="order_coupon" id="order_coupon"
                        required readonly
                        value="${requestScope.orderListDetail.order_coupon}" /></td>
                  </tr>
                  <tr>
                     <th>물품 종류</th>
                     <td><input type="text" name="order_total_each_quan"
                        id="order_total_each_quan" required readonly
                        value="${requestScope.orderListDetail.order_total_each_quan}" />
                     </td>
                  </tr>
                  <tr>
                     <th>최종 금액</th>
                     <td><input type="text" name="order_total_price"
                        id="order_total_price" required readonly
                        value="${requestScope.orderListDetail.order_total_price}" /></td>
                  </tr>
                  <tr>
                     <th>입금상태</th>
                     <td><input type="text" name="order_state" id="order_state"
                        required readonly
                        value="${requestScope.orderListDetail.order_state}" /> <%-- <select name="order_state" id="order_state" required
                        value="${requestScope.orderListDetail.order_state}">
                           <option value="입금대기">입금대기</option>
                           <option value="입금완료">임급완료</option>
                     </select> --%></td>
                  </tr>
                  <tr>
                     <th>배송상태</th>
                     <td><input type="text" name="order_del_state"
                        id="order_del_state" required readonly
                        value="${requestScope.orderListDetail.order_del_state}" /> <%-- <select name="order_del_state" id="order_del_state"
                        required value="${requestScope.orderListDetail.order_del_state}">
                           <option value="배송대기">배송대기</option>
                           <option value="배송중">배송중</option>
                           <option value="배송완료">배송완료</option>
                     </select> --%></td>
                  </tr>
                  <tr>
                     <th>송장번호</th>
                     <td><input type="text" name="order_del_num"
                        id="order_del_num" required
                        value="${requestScope.orderListDetail.order_del_num}" /></td>
                  </tr>
                  <tr>
                     <td colspan="2">
                        <button type="reset">초기화</button>
                        <button type="submit">등록</button>
                        <button type="button" onclick="typeChange()">입금완료</button> <!-- <button type="button" onclick="typeChange()">배송중</button> -->
                        <button type="button" onclick="typeChange()">배송완료</button>
                        <button type="button" onclick="changeDelNumber()">송장번호
                           입력</button>
                     </td>
                  </tr>
               </table>
               <table>
                  <tr>
                     <th>주문번호</th>
                     <th>개별주문번호</th>
                     <th>상품ID</th>
                     <th>수량</th>
                     <th>가격</th>
                     <th>리뷰상태</th>
                  </tr>
                  <c:if test="${not empty requestScope.orderDetailList}">
                     <c:forEach var="od" items="${requestScope.orderDetailList}">
                        <tr>
                           <td>
                              ${od.order_id}
                           </td>
                           <td>
                              ${od.order_detail_id}
                              <input type="text" name="order_detail_id" id="order_detail_id" value="${od.order_detail_id}" required />
                           </td>
                           <td>
                              ${od.product_id}
                              <input type="text" name="product_id" id="product_id" value="${od.product_id}" required />
                           </td>
                           <td>
                              ${od.order_quan}
                              <input type="text" name="order_quan" id="order_quan" value="${od.order_quan}" required />
                           </td>
                           <td>
                              ${od.order_price}
                              <input type="text" name="order_price" id="order_price" value="${od.order_price}" required />
                           </td>
                           <td>
                              ${od.review_state}
                              <input type="text" name="review_state" id="review_state" value="${od.review_state}" required />
                           </td>
                        </tr>
                     </c:forEach>
                  </c:if>
               </table>
            </form>
         </div>
      </main>
   </div>
</body>
</html>


