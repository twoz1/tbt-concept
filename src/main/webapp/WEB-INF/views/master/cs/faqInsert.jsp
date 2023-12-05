<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>FAQ | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/cs/faqInsert.css" />
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="faq_insert master_save">
				<h2 class="master_title">FAQ 등록</h2>

				<form action="faqInsert" method="Post">
					<table>
						<tr>
							<th>제목</th>
							<td>
								<input type="text" name="faq_title" id="faq_title" maxlength="50" required />
							</td>
						</tr>

						<tr>
							<th>문의 유형</th>
							<td>
								<select name="faq_type" id="faq_type" required>
									<option value="">선택</option>
									<option value="교환/반품">교환/반품</option>
									<option value="취소">취소</option>
									<option value="배송">배송</option>
									<option value="상품평">상품평</option>
									<option value="증빙서류발급">증빙서류발급</option>
								</select>
							</td>
						</tr>

						<tr>
							<th>내용</th>
							<td>
								<textarea name="faq_content" maxlength="1000" id="faq_content" required></textarea>
							</td>
						</tr>

						<tr>
							<td colspan="2">
								<button type="reset">초기화</button>
								<button type="submit">등록</button>
							</td>
						</tr>
					</table>
				</form>
				<hr />
				
				<div class="nav_box">
					<a class="m_button" href="faqList">FAQ목록</a>
				</div>
				
			</div>
		</main>
	</div>
</body>
</html>