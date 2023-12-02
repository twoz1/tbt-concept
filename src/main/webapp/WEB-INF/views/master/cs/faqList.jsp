<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>FAQ 리스트 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/cs/faqList.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/cs/axCS.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="faq_list master_list">
				<h2 class="master_title">FAQ 리스트</h2>
				<a class="m_button l_button" href="faqInsert">FAQ 등록</a>
				
				<table>
					<tr>
						<th>FAQ ID</th>
						<th>제목</th>
						<th>문의 유형</th>
						<th>내용</th>
						<th></th>
						<th></th>
					</tr>

					<c:if test="${not empty requestScope.faqList}">
						<c:forEach var="f" items="${requestScope.faqList}">
							<tr>
								<td>${f.faq_id}</td>
								<td><a href="faqDetail?faq_id=${f.faq_id}" class="f_titleW" id="hiddenContentsF">${f.faq_title}</a></td>
								<td>
									<c:if test="${f.faq_type == 'a'}">교환/반품</c:if>
									<c:if test="${f.faq_type == 'b'}">취소</c:if>
									<c:if test="${f.faq_type == 'c'}">배송</c:if>
									<c:if test="${f.faq_type == 'd'}">상품평</c:if>
									<c:if test="${f.faq_type == 'e'}">증빙서류발급</c:if>
								</td>
								<td><a href="faqDetail?faq_id=${f.faq_id}" class="f_contentW" id="hiddenContents">${f.faq_content}</a></td>
								<td>
									<a href="faqDetail?faq_id=${f.faq_id}">상세보기</a>
								</td>
								<td>
									<button onclick="axFaqDelete(${f.faq_id})" id="${f.faq_id}">삭제</button>
								</td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
			</div>
		</main>
	</div>
</body>
</html>