<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리뷰 디테일 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/review/axReview.js"></script>
</head>
<body>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="review_detail master_save">
				<h2 class="master_title">리뷰 상세</h2>
				<table>
					<tr>
						<th>리뷰ID</th>
						<td>${requestScope.reviewDetail.review_id}</td>

					</tr>

					<tr>
						<th>상품ID</th>
						<td>${requestScope.reviewDetail.product_id}</td>
					</tr>

					<tr>
						<th>회원ID</th>
						<td>${requestScope.reviewDetail.user_id}</td>
					</tr>

					<tr>
						<th>별점</th>
						<td>${requestScope.reviewDetail.review_star}</td>
					</tr>

					<tr>
						<th>리뷰내용</th>
						<td>${requestScope.reviewDetail.review_content}</td>
					</tr>


					<tr>
						<th>사진</th>
						<td><img
							src="${requestScope.reviewDetail.review_upload_file}" alt="리뷰이미지" /></td>
					</tr>
					
					<tr>
						<th>삭제</th>
						<td>
							<button onclick="axReviewDeleteDetail(${requestScope.reviewDetail.review_id})"
								id="${requestScope.reviewDetail.review_id}">삭제</button>
						</td>
					</tr>
				</table>
				<hr />

				<div class="nav_box">
					<a class="m_button" href="reviewList">리뷰목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>