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
<script>
   history.replaceState({}, null, location.pathname);
</script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="user_list master_list">
				<h2 class="master_title">회원 리스트</h2>
				<div class="searchBox">
					<form action="userList" method="get">
					    <select name="searchType" id="searchType" onchange="keywordClear()">
					        <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					        <option value="user_id" ${requestScope.searchType == 'user_id' ? "selected" : "" }>회원ID</option>
					        <option value="user_name" ${requestScope.searchType == 'user_name' ? "selected" : "" }>회원이름</option>
					    </select>
					    <input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					    <button type="submit" id="searchBtn">Search</button>
					</form>
				</div>
				<div>
					회원 수 : ${getUserCount}
				</div>
				<table>
					<tr>
						<th>회원ID</th>
						<th>이름</th>
						<th>가입일</th>
						<th>등급</th>
						<th>이벤트 정보 수신 여부</th>
						<!-- <th>주소</th> -->
						<th></th>
						<th></th>
					</tr>
					
					<c:if test="${not empty requestScope.user}">
						<c:forEach var="u" items="${requestScope.user}">
							<tr>
								<td><a href="userDetail?user_id=${u.user_id}">${u.user_id}</a></td>
								<td>${u.user_name}</td>
								<td>${u.user_birth}</td>
								<td>${u.user_rank}</td>
								<td>${u.user_event_check}</td>
								
								<td><a href="userDetail?user_id=${u.user_id}">상세보기</a></td>
								<td><button onclick="axUserDelete('${u.user_id}')" id="${u.user_id}">탈퇴</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
				<div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="userList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="userList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
						</c:when>
						<c:otherwise>
						  	<span class ="firstB">처음</span>
						  	<span class ="ltB">&LT;</span>
						</c:otherwise>
					</c:choose> 	 
					 
					<c:forEach var="i" items="${resultDTO.pageList}">
						<c:if test="${i==resultDTO.page}">
							<span><strong>${i}</strong></span>&nbsp;
						</c:if>
						<c:if test="${i!=resultDTO.page}">
							<a href="userList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="userList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="userList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
						</c:when>
						<c:otherwise>
							<span class="gtB">&GT;</span>
							<span class="lastB">마지막</span>
						</c:otherwise>
					</c:choose>
				</div>
			</div>
		</main>
	</div>
</body>
</html>