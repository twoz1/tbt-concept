<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>FAQ 상세 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/cs/faqDetail.css" />
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="faq_detail master_save">
				<h2 class="master_title">FAQ 상세</h2>
				<table>
					<tr>
						<th>FAQ ID</th>
						<td>${requestScope.faqDetail.faq_id}</td>
					</tr>

					<tr>
						<th>제목</th>
						<td>${requestScope.faqDetail.faq_title}</td>
					</tr>

					<tr>
						<th>문의 유형</th>
						<td>
							${requestScope.faqDetail.faq_type}
						</td>
					</tr>

					<tr>
						<th>내용</th>
						<td>
							${requestScope.faqDetail.faq_content.replaceAll('\\n','<br>')}
						</td>
					</tr>
				</table>
				<br/><hr/>
				
				<div class="nav_box">
					<a class="m_button" href="faqDetail?jCode=U&faq_id=${requestScope.faqDetail.faq_id}">FAQ 수정</a>
					<a class="m_button" href="faqList">FAQ목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>