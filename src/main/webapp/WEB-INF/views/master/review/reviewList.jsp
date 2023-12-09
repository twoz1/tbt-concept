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
						<th></th>
					</tr>
					<c:if test="${not empty requestScope.reviewList}">
						<c:forEach var="r" items="${requestScope.reviewList}">
							<tr>
								<td>${r.reviewId}</td>
								<td>${r.product_id}</td>
								<td><a href="reviewDetail?user_id=${r.user_id}">${r.user_id}</a></td>
								<td><button onclick="axReviewDelete(${r.reviewId})"
										id="${r.reviewId}">삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
					<c:if test="${empty requestScope.reviewList}">
						<tr>
							<td colspan="7">출력할 Data 가 1건도 없습니다.</td>
						</tr>
					</c:if>
				</table>
				<div class="pageNation">
					<c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
							<a class="firstB" href="reviewList?page=${resultDTO.start}">처음</a>
							<a class="ltB" href="reviewList?page=${resultDTO.page-1}">&LT;</a>
						</c:when>
						<c:otherwise>
							<span class="firstB">처음</span>
							<span class="ltB">&LT;</span>
						</c:otherwise>
					</c:choose>

					<c:forEach var="i" items="${resultDTO.pageList}">
						<c:if test="${i==resultDTO.page}">
							<span><strong>${i}</strong></span>&nbsp;
						</c:if>
						<c:if test="${i!=resultDTO.page}">
							<a href="reviewList?page=${i}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>

					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="reviewList?page=${resultDTO.page+1}">&GT;</a>
							<a class="lastB" href="reviewList?page=${resultDTO.end}">마지막</a>
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