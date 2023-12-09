<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>News 상세 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/cs/newsDetail.css" />
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
						<td>${requestScope.newsDetail.newsId}</td>
					</tr>
					<tr>
						<th>제목</th>
						<td>${requestScope.newsDetail.news_title}</td>
					</tr>
					<tr>
						<th>내용</th>
						<td>
							${requestScope.newsDetail.news_content}
						</td>
					</tr>
				</table>
				<br/><hr/>
				
				
				<div class="nav_box">
					<a class="m_button" href="newsDetail?jCode=U&newsId=${requestScope.newsDetail.newsId}">News 수정</a>
					<a class="m_button" href="newsList">News목록</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>