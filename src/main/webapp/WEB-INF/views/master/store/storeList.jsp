<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지점 리스트 | tbt_concept</title>
<link rel="stylesheet" href="/resources/lib/css/product/productList.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/product/axProducts.js"></script>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="store_list master_list">
				<h2 class="master_title">지점 리스트</h2>
				<a class="m_button l_button" href="storeInsert">지점등록</a>
				<table>
					
				</table>
			</div>
		</main>
	</div>
</body>
</html>