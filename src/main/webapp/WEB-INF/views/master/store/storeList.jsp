<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지점 리스트 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/store/storeList.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/store/store.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="store_list master_list">
				<h2 class="master_title">지점 리스트</h2>
				<a class="m_button l_button" href="storeInsert">지점등록</a>
				<table>
					<tr>
						<th>지점명</th>
						<th>연락처</th>
						<th>주소</th>
						<th>상세주소</th>
						<th></th>
						<th></th>
					</tr>
					<c:if test="${not empty requestScope.storeList}">
						<c:forEach var="s" items="${requestScope.storeList}">
							<tr>
								<td>${s.store_id}점</td>
								<td>${s.store_tel}</td>
								<td>${s.store_address}</td>
								<td>${s.store_address_detail}</td>
								<td><a href="storeDetail?store_id=${s.store_id}">상세보기</a></td>
								<td><button onclick="storeDelete('${s.store_id}')" id="${s.store_id}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
			</div>
		</main>
	</div>
</body>
</html>