<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>QnA 상세 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="qna1on1_detail master_save">
				<h2 class="master_title">QnA 상세</h2>

				<c:if test="${not empty requestScope.qna1on1Detail}">
					<table>
						<tr>
							<th>문의번호</th>
							<td>${requestScope.qna1on1Detail.qna_id}</td>
						</tr>

						<tr>
							<th>문의유형</th>
							<td>${requestScope.qna1on1Detail.qna_type}</td>
						</tr>

						<tr>
							<th>제목</th>
							<td>${requestScope.qna1on1Detail.qna_title}</td>
						</tr>

						<tr>
							<th>고객ID</th>
							<td>${requestScope.qna1on1Detail.user_id}</td>
						</tr>

						<tr>
							<th>고객phoneNum</th>
							<td>${requestScope.qna1on1Detail.qna_phone_num}</td>
						</tr>

						<tr>
							<th>상품ID</th>
							<td>${requestScope.qna1on1Detail.product_id}</td>
						</tr>

						<tr>
							<th>내용</th>
							<td>${requestScope.qna1on1Detail.qna_content}</td>
						</tr>

						<tr>
							<th>사진</th>
							<td>${requestScope.qna1on1Detail.qna_upload_filef}</td>
						</tr>

						<tr>
							<th>답변</th>
							<td>
								<textarea name="qna_answer" id="qna_answer">${requestScope.qna1on1Detail.qna_answer}</textarea>
							</td>
						</tr>
					</table>

					<br/><hr/>
					
					<div class="nav_box">
						<a class="m_button" href="qna1on1Detail?jCode=U&qna_id=${requestScope.qna1on1Detail.qna_id}">답변수정</a>
						<a class="m_button" href="qna1on1List">QnA목록</a>
					</div>
				</c:if>

				<c:if test="${empty requestScope.qna1on1Detail}">
					<tr>
						<td colspan="2">출력할 데이터 없음</td>
					</tr>
				</c:if>
			</div>
		</main>
	</div>
</body>
</html>