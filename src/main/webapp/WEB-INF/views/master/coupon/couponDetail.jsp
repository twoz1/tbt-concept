<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>쿠폰 상세 | tbt_concept</title>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="coupon_detail master_save">
            <h2 class="master_title">쿠폰상세</h2>

            <table>
               <tr>
					<th>쿠폰ID</th>               
               		<td>${requestScope.couponDetail.coupon_id}</td>
               </tr>
               <tr>
					<th>쿠폰명</th>               
               		<td>${requestScope.couponDetail.coupon_name}</td>
               </tr>
               <tr>
					<th>할인율</th>               
               		<td>${requestScope.couponDetail.coupon_disc}</td>
               </tr>

            </table>
            
            <a class="m_button" href="couponDetail?jCode=U&coupon_id=${requestScope.couponDetail.coupon_id}">쿠폰수정</a>
            <a class="m_button" href="couponList">쿠폰목록</a>
         </div>
      </main>
   </div>
</body>
</html>