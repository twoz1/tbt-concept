<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>News 상세 | tbt_concept</title>
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="news_detail master_save">
				<h2 class="master_title">News 상세</h2>
				<table>
					<tr>
						<th>News ID</th>
						<td>${requestScope.newsDetail.news_id}</td>
					</tr>
					<tr>
						<th>제목</th>
						<td>${requestScope.newsDetail.news_title}</td>
					</tr>
					<tr>
						<th>내용</th>
						<td>
							${requestScope.newsDetail.faq_content}
						</td>
					</tr>
				</table>
				<br/><hr/>
				
				<div class="nav_box">
					<a class="m_button" href="newsDetail?jCode=U&news_id=${requestScope.newsDetail.news_id}">News 수정</a>
					<a class="m_button" href="newsList">News목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>