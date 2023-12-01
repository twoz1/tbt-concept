<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 상세 | tbt_concept</title>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="user_detail master_save">
            <h2 class="master_title">회원상세</h2>

            <table>
               <tr>
					<th>회원ID</th>               
               		<td>${requestScope.userDetail.user_id}</td>
               </tr>
               <tr>
					<th>이름</th>               
               		<td>${requestScope.userDetail.user_name}</td>
               </tr>
               <tr>
					<th>비밀번호</th>               
               		<td>${requestScope.userDetail.user_pw}</td>
               </tr>
               <tr>
					<th>휴대폰 번호</th>               
               		<td></td>
               </tr>
               <tr>
					<th>가입일</th>               
               		<td>${requestScope.userDetail.user_birth}</td>
               </tr>
               <tr>
					<th>등급</th>               
               		<td>${requestScope.userDetail.user_rank}</td>
               </tr>
               <tr>
					<th>이벤트 정보 수신 여부</th>               
               		<td>${requestScope.userDetail.user_event_check}</td>
               </tr>
               <tr>
					<th>우편번호</th>               
               		<td></td>
               </tr>
               <tr>
					<th>도로명 주소</th>               
               		<td></td>
               </tr>
               <tr>
					<th>상세주소</th>               
               		<td></td>
               </tr>

            </table>
            
            <a class="m_button" href="userDetail?jCode=U&user_id=${requestScope.userDetail.user_id}">회원수정</a>
            <a class="m_button" href="userList">회원목록</a>
         </div>
      </main>
   </div>
</body>
</html>