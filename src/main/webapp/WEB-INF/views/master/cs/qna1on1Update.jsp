<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>QnA 수정 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/cs/qna1on1Update.css" />
<script src="/resources/lib/js/cs/axCS.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="qna1on1_update master_save">
				<h2 class="master_title">QnA 수정</h2>
				<form action="qna1on1Update" method="Post" id="qna1on1Update" enctype="multipart/form-data">
					<table>
						<tr>
							<th>문의번호</th>
							<td>${requestScope.qna1on1Detail.qna_id}
								<input type="hidden" name="qna_id" id="qna_id" value="${requestScope.qna1on1Detail.qna_id}" />
							</td>
						</tr>

						<tr>
							<th>문의유형</th>
							<td>${requestScope.qna1on1Detail.qna_type}
								<input type="hidden" name="qna_type" id="qna_type" value="${requestScope.qna1on1Detail.qna_type}" />
							</td>
						</tr>

						<tr>
							<th>제목</th>
							<td>${requestScope.qna1on1Detail.qna_title}
								<input type="hidden" name="qna_title" id="qna_title" value="${requestScope.qna1on1Detail.qna_title}" />
							</td>
						</tr>

						<tr>
							<th>고객ID</th>
							<td>${requestScope.qna1on1Detail.user_id}
								<input type="hidden" name="user_id" id="user_id" value="${requestScope.qna1on1Detail.user_id}" />
							</td>
						</tr>

						<tr>
							<th>고객phoneNum</th>
							<td>${requestScope.qna1on1Detail.qna_phone_num}
								<input type="hidden" name="qna_phone_num" id="qna_phone_num" value="${requestScope.qna1on1Detail.qna_phone_num}" />
							</td>
						</tr>

						<tr>
							<th>문자수신여부</th>
							<td>${requestScope.qna1on1Detail.qna_reply_check}<input
								type="hidden" name="qna_reply_check" id="qna_reply_check"
								value="${requestScope.qna1on1Detail.qna_reply_check}" />
							</td>
						</tr>

						<tr>
							<th>상품ID</th>
							<td>${requestScope.qna1on1Detail.product_id}
								<input type="hidden" name="product_id" id="product_id" value="${requestScope.qna1on1Detail.product_id}" />
							</td>
						</tr>

						<tr>
							<th>내용</th>
							<td>${requestScope.qna1on1Detail.qna_content}
								<input type="hidden" name="qna_content" id="qna_content" value="${requestScope.qna1on1Detail.qna_content}" />
							</td>
						</tr>

						<tr>
							<th>사진</th>
							<td>${requestScope.qna1on1Detail.qna_upload_file}
								<input type="hidden" name="qna_upload_file" id="qna_upload_file" value="${requestScope.qna1on1Detail.qna_upload_file}" />
							</td>
						</tr>

						<tr>
							<th>답변</th>
							<td>
								<textarea name="qna_answer" id="qna_answer">${requestScope.qna1on1Detail.qna_answer}</textarea>
							</td>
						</tr>

						<tr>
							<td colspan="2">
								<button type="reset" onclick="resetImg()">초기화</button>
								<button type="submit" onClick="qna1on1Update()">수정</button>
							</td>
						</tr>
					</table>
				</form>
				
				<hr/>
				
				<div class="nav_box">
					<a class="m_button" href="qna1on1List">QnA목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>