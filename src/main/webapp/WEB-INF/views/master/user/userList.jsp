<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 목록 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/user/axUser.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="user_list master_list">
				<h2 class="master_title">회원 리스트</h2>
				<table>
					<tr>
						<th>회원ID</th>
						<th>이름</th>
						<th>휴대폰 번호</th>
						<th>가입일</th>
						<th>등급</th>
						<th>이벤트 정보 수신 여부</th>
						<!-- <th>주소</th> -->
						<th></th>
						<th></th>
					</tr>
					
					<c:if test="${not empty requestScope.userList}">
						<c:forEach var="u" items="${requestScope.userList}">
							<tr>
								<td><a href="userDetail?user_id=${u.user_id}">${u.user_id}</a></td>

								<td>${u.user_name}</td>
								<td>${u.user_phone_num}</td>
								<td>${u.user_birth}</td>
								<td>${u.user_rank}</td>
								<td>${u.user_event_check}</td>
							    <!--<td>${u.address_avc}
									${u.address_city}
									${u.address_detail}
								</td>
								 -->	

								<td><a href="userDetail?user_id=${u.user_id}">상세보기</a></td>
								<td><button onclick="axUserDelete('${u.user_id}')" id="${u.user_id}">탈퇴</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
			</div>
		</main>
	</div>
</body>
</html>