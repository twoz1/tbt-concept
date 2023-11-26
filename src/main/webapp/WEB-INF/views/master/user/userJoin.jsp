<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp" %>
		<main id="master_main">
			<div class="user_list master_list">
				<h2 class="master_title">회원가입</h2>
				<form action="userJoin" method="post" id="userJoin">
				 <table>
					<tr>
					 <th>회원 이메일</th>
					 <td><input type="text" name="user_id" id="user_id"></td>
					</tr>
					
					<tr>
					 <th>이름</th>
					 <td><input type="text" name="user_name" id="user_name"></td>
					</tr>
					
					<tr>
					 <th>비밀번호</th>
					 <td><input type="password" name="user_pw" id="user_pw"></td>
					</tr>
					
					<tr>
					 <th>휴대폰 번호</th>
					 <td><input type="text" name="user_phone_num" id="user_phone_num"></td>
					</tr>
					
					<tr>
					 <th>생년월일</th>
					 <td><input type="text" name="user_birth" id="user_birth"></td>
					</tr>
					
					<tr>
					 <th>등급</th>
					 <td><input type="text" name="user_rank" id="user_rank"></td>
					</tr>
										
					<tr>
					 <th>이벤트 정보 수신 여부</th>
					 <td>
						 <select name="user_event_check" id="user_event_check" >
						 	<option value="Y">Y</option>
						 	<option value="N">N</option>
						 </select>
					 </td>
					</tr>
					
					<tr>
					 <th>우편번호</th>
					 <td><input type="text" name="address_avc" id="address_avc"></td>
					</tr>
					
					<tr>
					 <th>도로명 주소</th>
					 <td><input type="text" name="address_city" id="address_city"></td>
					</tr>
					
					<tr>
					 <th>상세주소</th>
					 <td><input type="text" name="address_detail" id="address_detail"></td>
					</tr>
					
					<tr>
						<td colspan="2">
							<button type="reset">취소</button>
							<button type="submit">가입</button>
						</td>	
					</tr>
				 </table>
				</form>
				<div class="nav_box">
					<a class="m_button" href="masterIndex">Master Index</a>
				</div>
			</div>
		</main>
	</div>
</body>
</html>