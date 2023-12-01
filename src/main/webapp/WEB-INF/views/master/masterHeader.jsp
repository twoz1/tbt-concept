<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/resources/lib/css/masterIndex.css">
<script src="/resources/lib/js/jquery-3.2.1.min.js"></script>
<script src="/resources/lib/js/masterJs.js"></script>
	<header>
		<h1 class="master_logo">
			<a href="/">
				<img src="/resources/images/logo_white.png" alt="logo">
			</a>
		</h1>
		<ul class="master_gnb">
			<li><a href="#">회원관리</a>
				<ul>
					<li><a href="/master/user/userList">회원목록</a></li>
					<li><a href="">리뷰관리</a></li>
					<li><a href="">등급관리</a></li>
					<li><a href="/master/address/addressList">주소관리</a></li>
				</ul>
			</li>

			<li><a href="#">상품관리</a>
				<ul>
					<li><a href="/master/product/productList">상품목록</a></li>
					<li><a href="/master/product/productInsert">상품등록</a></li>
				</ul>
			</li>

			<li><a href="#">주문관리</a>
				<ul>
					<li><a href="/master/order/orderList">주문목록</a></li>
					<li><a href="/master/cart/cartList">장바구니목록</a></li>
				</ul>
			</li>


			<li><a href="#">CS관리</a>
				<ul>
					<li><a href="/master/cs/qna1on1List">1:1문의</a></li>
					<li><a href="">자주찾는질문</a></li>
					<li><a href="">NEWS</a></li>
				</ul>
			</li>

			<li><a href="#">지점관리</a>
				<ul>
					<li><a href="/master/store/storeList">지점목록</a></li>
					<li><a href="/master/store/storeInsert">지점등록</a></li>
				</ul>
			</li>
		</ul>
	</header>