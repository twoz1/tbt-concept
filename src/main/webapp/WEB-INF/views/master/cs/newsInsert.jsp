<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>News | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/cs/newsInsert.css" />
</head>
<body>
<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="news_insert master_save">
				<h2 class="master_title">News 등록</h2>

				<form action="newsInsert" method="Post">
					<table>
						<tr>
							<th>제목</th>
							<td>
								<input type="text" name="news_title" id="news_title" maxlength="50" required />
							</td>
						</tr>

						<tr>
							<th>내용</th>
							<td>
								<textarea name="news_content" maxlength="1000" id="news_content" required></textarea>
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
					<a class="m_button" href="newsList">News목록</a>
				</div>
				
			</div>
		</main>
	</div>
</body>
</html>