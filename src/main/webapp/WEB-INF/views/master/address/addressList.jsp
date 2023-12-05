<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주소목록 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/user/axUser.js"></script>
<script src="/resources/lib/js/cart/cart.js"></script>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="address_list master_list">
            <h2 class="master_title">회원 리스트</h2>
            <div>
					<form action="searchCartListA" method="get">
						<select name="searchType" id="searchType" onchange="keywordClear()">
							<option value="all">전체</option>
							<option value="userId">고객ID</option>
						</select>
						
						<input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." />
						<button id="searchBtn">Search</button>
					</form>
				</div>
				
            <table>
              	<tr>
					<th>회원 ID</th>
					<th>받는 사람</th>
					<th>휴대폰 번호</th>
					<th>주소</th>
					<!-- <th>삭제</th> -->
				</tr>
				
					<c:if test="${not empty requestScope.addressList}">
						<c:forEach var="a" items="${requestScope.addressList}">
							<tr>
								<td>${a.user_id}</td>
								<td>${a.address_name}</td>
								<td>${a.address_phone_num}</td>
							    <td>${a.address_avc}
									${a.address_city}
									${a.address_detail}
								</td>	
								<%-- <td><button onclick="axUserDelete('${a.user_id}')" id="${a.user_id}">삭제</button></td> --%>
							</tr>
						</c:forEach>
					</c:if>
					
					  <%--  <c:if test="${empty requestScope.addressList}">
                        <tr>
                        <td colspan="7">출력할 Data 가 1건도 없습니다.</td>
      </tr>
   </c:if> --%>
            </table>
         </div>
      </main>
   </div>
</body>
</html>