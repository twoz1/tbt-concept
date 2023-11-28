<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>QnA 리스트 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="qna1on1_list master_list">
				<h2 class="master_title">상품 리스트</h2>
				<a class="m_button l_button" href="productInsert">상품등록</a>

				<c:if test="${not empty requestScope.message}">${requestScope.message}</c:if>

				<table>
					<tr>
						<th>문의번호</th>
						<th>문의유형</th>
						<th>상품ID</th>
						<th>고객ID</th>
						<th>제목</th>
						<th>답변여부</th>
						<th></th>
						<th></th>
					</tr>

					<c:if test="${not empty requestScope.qna1on1List}">
						<c:forEach var="q" items="${requestScope.qna1on1List}">
							<tr>
								<td><a href="qna1on1Detail?qna_id=${q.qna_id}">${q.qna_id}</a></td>
								<td>${q.qna_type}</td>
								<td>${q.product_id}</td>
								<td>${q.user_id}</td>
								<td><a href="qna1on1Detail?qna_id=${q.qna_id}">${q.qna_title}</a></td>
								<td>${q.qna_answer}</td>
								<td><a href="qna1on1Detail?qna_id=${q.qna_id}">상세보기</a></td>
								<%-- <td><a href="qna1on1Detail?qna_id=${q.qna_id}">삭제</a></td> --%>
								<td><button>삭제</button></td>
							</tr>
						</c:forEach>
					</c:if>
				</table>
			</div>
		</main>
	</div>
</body>
</html>