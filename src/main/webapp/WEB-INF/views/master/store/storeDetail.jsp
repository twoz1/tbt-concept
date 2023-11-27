<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지점 상세 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/store/storeDetail.css" />
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="store_detail master_save">
				<h2 class="master_title">지점 상세</h2>
				<table>
					<tr>
						<th>지점명</th>
						<td>${requestScope.storeDetail.store_id}점</td>
					</tr>
					<tr>
						<th>연락처</th>
						<td>${requestScope.storeDetail.store_tel}</td>
					</tr>
					<tr>
						<th>주소</th>
						<td>${requestScope.storeDetail.store_address}</td>
					</tr>
					<tr>
						<th>상세주소</th>
						<td>${requestScope.storeDetail.store_address_detail}</td>
					</tr>
					<tr>
						<th>좌표 X</th>
						<td>${requestScope.storeDetail.store_x}</td>
					</tr>
					<tr>
						<th>좌표 Y</th>
						<td>${requestScope.storeDetail.store_y}</td>
					</tr>
				</table>
				<br/><hr/>
				<div class="nav_box">
					<a class="m_button" href="storeDetail?jCode=U&store_id=${requestScope.storeDetail.store_id}">지점수정</a>
					<a class="m_button" href="storeList">지점목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>