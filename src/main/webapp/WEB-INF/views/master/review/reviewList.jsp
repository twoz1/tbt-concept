<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리뷰 리스트 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/review/axReview.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="review_list master_list">
				<h2 class="master_title">리뷰 리스트</h2>
				<table>
					<tr>
						<th>리뷰ID</th>
						<th>상품ID</th>
						<th>회원ID</th>
						<th>삭제</th>
					</tr>
					<c:if test="${not empty requestScope.reviewList}">
						<c:forEach var="r" items="${requestScope.reviewList}">
							<tr>
								<td><a href="reviewDetail?review_id=${r.review_id}">${r.review_id}</a></td>
								<td>${r.product_id}</td>
								<td>${r.user_id}</a></td>
								<td><button onclick="axReviewDelete(${r.review_id})"
										id="${r.review_id}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
					<c:if test="${empty requestScope.reviewList}">
						<tr>
							<td colspan="7">출력할 Data 가 1건도 없습니다.</td>
						</tr>
					</c:if>
				</table>
			</div>
		</main>
	</div>
</body>
</html>