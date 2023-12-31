<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 상세보기 | tbt_concept</title>
</head>
<body>
   <div id="master_wrap">
      <%@ include file="../masterHeader.jsp"%>
      <main id="master_main">
         <div class="order_Listdetail master_list">
            <h2 class="master_title">주문 상세</h2>
            <table>
               <tr>
                  <th>주문번호</th>
                  <td>${requestScope.orderListDetail.order_id}</td>
               </tr>
               <tr>
                  <th>회원ID</th>
                  <td>${requestScope.orderListDetail.user_id}</td>
               </tr>
               <tr>
                  <th>주문일자</th>
                  <td>${requestScope.orderListDetail.order_date}</td>
               </tr>
               <tr>
                  <th>받는사람</th>
                  <td>${requestScope.orderListDetail.address_name}</td>
               </tr>
               <tr>
                  <th>주소</th>
                  <td>${requestScope.orderListDetail.address_avc}
                     ${requestScope.orderListDetail.address_city}
                     ${requestScope.orderListDetail.address_detail}</td>
               </tr>
               <tr>
                  <th>받는사람 핸드폰 번호</th>
                  <td>${requestScope.orderListDetail.address_phone_num}</td>
               </tr>
               <tr>
                  <th>배송 메세지</th>
                  <td>${requestScope.orderListDetail.order_message}</td>
               </tr>
               <tr>
                  <th>결제방법</th>
                  <td>${requestScope.orderListDetail.order_pay}</td>
               </tr>
               <tr>
                  <th>쿠폰</th>
                  <td>${requestScope.orderListDetail.coupon_id}</td>
               </tr>
               <tr>
                  <th>주문 상품 종류수량</th>
                  <td>${requestScope.orderListDetail.order_total_each_quan}</td>
               </tr>
               <tr>
                  <th>총결제금액</th>
                  <td>
                  	<fmt:formatNumber value="${requestScope.orderListDetail.order_total_price}" pattern="#,##0원"/>
                  	<%-- ${requestScope.orderListDetail.order_total_price} --%>
                  </td>
               </tr>
               <tr>
                  <th>입금상태</th>
                  <td id="order_state">${requestScope.orderListDetail.order_state}</td>
               </tr>
               <tr>
                  <th>배송상태</th>
                  <td>${requestScope.orderListDetail.order_del_state}</td>
               </tr>
               <tr>
                  <th>송장번호</th>
                  <td>${requestScope.orderListDetail.order_del_num}</td>
               </tr>
            </table>
            <a class="m_button"
               href="orderListDetail?jCode=O&order_id=${requestScope.orderListDetail.order_id}">주문수정
            </a>
        </div>
        <div class="order_detailList master_list">
            <table>
            <tr>
                  <th>주문번호</th>
                  <th>개별주문번호</th>
                  <th>상품이미지</th>
                  <th>상품ID</th>
                  <th>상품이름</th>
                  <th>수량</th>
                  <th>가격</th>
                  <th>리뷰상태</th>
               </tr>
            <c:if test="${not empty requestScope.orderDetailList}">
               <c:forEach var="od" items="${requestScope.orderDetailList}">
                  <tr>
                     <td>${od.order_id}</td>
                     <td>${od.order_detail_id}</td>  
                     <td>
                     	<img src="/resources/images/${od.product_img1}" alt="상품이미지1" />
                     	<%-- ${od.product_img1} --%>
                     </td>  
                     <td>${od.product_name}</td>  
                     <td>${od.product_id}</td>  
                     <td>${od.order_quan}</td>  
                     <td>
                     <fmt:formatNumber value="${od.order_price}" pattern="#,##0원"/>
                     	<%-- ${od.order_price} --%>
                     </td>  
                     <td>${od.review_state}</td>  
                  </tr>
               </c:forEach>
            </c:if>
            </table>
         </div>
      </main>
   </div>
</body>
</html>

