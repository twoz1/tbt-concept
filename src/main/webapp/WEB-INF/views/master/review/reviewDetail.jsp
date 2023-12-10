<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리뷰 디테일 | tbt_concept</title>
</head>
<body>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="review_detail master_save">
				<h2 class="master_title">QnA 수정</h2>
				<form action="reviewDetail" method="Post" id="reviewDetail" enctype="multipart/form-data">
					<table>
						<tr>
							<th>리뷰ID</th>
							<td>${requestScope.reviewDetail.review_id}
								<input type="hidden" name="review_id" id="review_id" value="${requestScope.reviewDetail.review_id}" />
							</td>
						</tr>

						<tr>
							<th>상품ID</th>
							<td>${requestScope.reviewDetail.product_id}
								<input type="hidden" name="product_id" id="product_id" value="${requestScope.reviewDetail.product_id}" />
							</td>
						</tr>

						<tr>
							<th>회원ID</th>
							<td>${requestScope.reviewDetail.user_id}
								<input type="hidden" name="user_id" id="user_id" value="${requestScope.reviewDetail.user_id}" />
							</td>
						</tr>

						<tr>
							<th>별점</th>
							<td>${requestScope.reviewDetail.review_star}
								<input type="hidden" name="review_star" id="review_star" value="${requestScope.reviewDetail.review_star}" />
							</td>
						</tr>

						<tr>
							<th>리뷰내용</th>
							<td>${requestScope.reviewDetail.review_content}
								<input type="hidden" name="review_content" id="review_content" value="${requestScope.reviewDetail.review_content}" />
							</td>
						</tr>


						<tr>
							<th>사진</th>
							<td>${requestScope.reviewDetail.review_upload_file}
								<input type="hidden" name="review_upload_file" id="review_upload_file" value="${requestScope.reviewDetail.review_upload_file}" />
							</td>
						</tr>
					</table>
				</form>
				
				<hr/>
				
				<div class="nav_box">
					<a class="m_button" href="reviewList">리뷰목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>