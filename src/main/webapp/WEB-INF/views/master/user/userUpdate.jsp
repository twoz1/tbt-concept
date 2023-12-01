<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 수정 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
		<%@ include file="../masterHeader.jsp"%>
		<main id="master_main">
			<div class="user_update master_save">
				<h2 class="master_title">회원수정</h2>
				<form action="userUpdate" method="post">
					<table>
						<tr>
							<th>회원ID</th>
							<td>${requestScope.userDetail.user_id}
								<input type="hidden" name="user_id" value="${requestScope.userDetail.user_id}">
							</td>
						</tr>
						<tr>
							<th>이름</th>
							<td>
								<input type="text" name="user_name" value="${requestScope.userDetail.user_name}">
							</td>
						</tr>
						<tr>
							<th>비밀번호</th>
							<td>${requestScope.userDetail.user_pw}
								<input type="hidden" name="user_pw" value="${requestScope.userDetail.user_pw}">
							</td>
						</tr>
						<tr>
							<th>휴대폰 번호</th>
							<td></td>
						</tr>
						<tr>
							<th>가입일</th>
							<td>${requestScope.userDetail.user_birth}
							<input type="hidden" name="user_birth" value="${requestScope.userDetail.user_birth}">
							</td>
						</tr>
						<tr>
							<th>등급</th>
							<td>
								<select name="user_rank" id="user_rank">
									<option ${requestScope.userDetail.user_rank == 'WHITE' ? "selected" : "" }>WHITE</option>
									<option ${requestScope.userDetail.user_rank == 'SILVER' ? "selected" : "" }>SILVER</option>
									<option ${requestScope.userDetail.user_rank == 'GOLD' ? "selected" : "" }>GOLD</option>
									<option ${requestScope.userDetail.user_rank == 'DIAMOND' ? "selected" : "" }>DIAMOND</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>이벤트 정보 수신 여부</th>
							<td>
								<select name="user_event_check" id="user_event_check">
									<option value="Y" ${requestScope.userDetail.user_event_check == 'Y' ? "selected" : "" }>Y</option>
									<option value="N" ${requestScope.userDetail.user_event_check == 'N' ? "selected" : "" }>N</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>우편번호</th>
							<td></td>
						</tr>
						<tr>
							<th>도로명 주소</th>
							<td></td>
						</tr>
						<tr>
							<th>상세주소</th>
							<td></td>
						</tr>
						<tr>
							<td colspan="2">
								<button type="reset">초기화</button>
								<button type="submit">수정</button>
							</td>
						</tr>
					</table>
				</form>
				<a class="m_button" href="userDetail?user_id=${requestScope.userDetail.user_id}">회원상세</a>
				<a class="m_button" href="userList">회원상세</a>
				&nbsp; <a href="javascript:history.go(-1)">이전</a>&nbsp;
			</div>
		</main>
	</div>
</body>
</html>