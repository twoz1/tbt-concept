<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>News 리스트 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/cs/axCS.js"></script>
<link rel="stylesheet" href="/resources/lib/css/cs/newsList.css" />
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="news_list master_list">
				<h2 class="master_title">News 리스트</h2>
				<a class="m_button l_button" href="newsInsert">News 등록</a>
				
				<table>
					<tr>
						<th>News ID</th>
						<th>제목</th>
						<th>내용</th>
						<th></th>
						<th></th>
					</tr>

					<c:if test="${not empty requestScope.newsList}">
						<c:forEach var="n" items="${requestScope.newsList}">
							<tr>
								<td>${n.news_id}</td>
								<td><a href="newsDetail?news_id=${n.news_id}" class="n_titleW" id="hiddenContentsN">${n.news_title}</a></td>
								<td><a href="newsDetail?news_id=${n.news_id}" class="n_contentW" id="hiddenContentsN">${n.news_content}</a></td>
								<td>
									<a href="newsDetail?news_id=${n.news_id}">상세보기</a>
								</td>
								<td>
									<button onclick="axNewsDelete(${n.news_id})" id="${n.news_id}">삭제</button>
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