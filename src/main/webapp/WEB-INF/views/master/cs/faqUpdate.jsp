<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>FAQ 수정 | tbt_concept</title>
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="faq_update master_save">
				<h2 class="master_title">FAQ 수정</h2>

				<form action="faqUpdate" method="Post">
					<table>
						<tr>
							<th>FAQ ID</th>
							<td>
								<input name="faq_id" value="${requestScope.faqDetail.faq_id}" readonly/>
							</td>
						</tr>


						<tr>
							<th>제목</th>
							<td>
								<input type="text" name="faq_title" id="faq_title" maxlength="50" value="${requestScope.faqDetail.faq_title}"/>
							</td>
						</tr>

						<tr>
							<th>문의 유형</th>
							<td>
								<select name="faq_type" id="faq_type">
									<option value="">선택</option>
									<option value="교환/반품" ${requestScope.faqDetail.faq_type == '교환/반품' ? "selected" : "" }>교환/반품</option>
									<option value="취소" ${requestScope.faqDetail.faq_type == '취소' ? "selected" : "" }>취소</option>
									<option value="배송" ${requestScope.faqDetail.faq_type == '배송' ? "selected" : "" }>배송</option>
									<option value="상품평" ${requestScope.faqDetail.faq_type == '상품평' ? "selected" : "" }>상품평</option>
									<option value="증빙서류발급" ${requestScope.faqDetail.faq_type == '증빙서류발급' ? "selected" : "" }>증빙서류발급</option>
								</select>
							</td>
						</tr>

						<tr>
							<th>내용</th>
							<td>
								<textarea name="faq_content" maxlength="1000" id="faq_content">${requestScope.faqDetail.faq_content}</textarea>
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
					<a class="m_button" href="faqDetail?faq_id=${requestScope.faqDetail.faq_id}">FAQ 상세</a>
					<a class="m_button" href="faqList">FAQ목록</a>
				</div>
				
			</div>
		</main>
	</div>
</body>
</html>