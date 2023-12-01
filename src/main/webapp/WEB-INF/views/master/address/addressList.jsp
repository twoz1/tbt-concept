<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주소목록 | tbt_concept</title>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="user_list master_list">
            <h2 class="master_title">회원 리스트</h2>
            <table>
              	<tr>
					<th>회원 ID</th>
					<th>받으시는 분</th>
					<th>휴대폰 번호</th>
					<th>우편번호</th>
					<th>도로명주소</th>
					<th>상세주소</th>
				</tr>
				
					<c:if test="${not empty requestScope.addressList}">
						<c:forEach var="a" items="${requestScope.addressList}">
							<tr>
								<td><a href="userList?user_id=${a.user_id}">${a.user_id}</a></td>

								<td>${a.user_name}</td>
								<td>${a.user_pw}</td>
								<td>${a.user_phone_num}</td>
							    <td>${a.address_avc}
									${a.address_city}
									${a.address_detail}
								</td>	

								<td><button onclick="axUserDelete('${a.user_id}')" id="${a.user_id}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
            </table>
         </div>
      </main>
   </div>
</body>
</html>