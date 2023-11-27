<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입 | tbt_concept</title>

<script>

"use strict"
function idDupCheck() {
	   // 1) 입력값의 무결성 확인
	   if( iCheck == false){
	  		iCheck=idCheck();
	   }else {
	   // 2) 서버로 id 회인요청 -> 결과는 새창으로
	   		let url = "idDupCheck?user_id=" + document.getElementById('user_id').value;
	   		window.open(url, '_blank', 'width=400,height=300,resizable=yes,scrollbars=yes,toolbar=no,menubar=yes');
	   }
	   
}
let iCheck = false;

function idCheck() {
	  let id=document.getElementById('user_id').value;
	  if (id.length<4 || id.length>30) { 
	     document.getElementById('iMessage').innerHTML='id 는 4~10 글자 입니다.' ;
	     return false;

	  // => 영문과 숫자로만 입력했는지 : id 에서 영문과 숫자를 모두 '' 로 변경했을때 length 가 0 이면 OK    
	  }else if ( id.replace(/[a-z.0-9]/gi,'').length > 0 ) {
	      document.getElementById('iMessage').innerHTML='id 는 영문과 숫자만 입력하세요.' ;
	      return false;
	  }else {
	     document.getElementById('iMessage').innerHTML='' ;
	     return true;
	   };//if
	} //idCheck

</script>
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
					 <td><input type="text" name="user_id" id="user_id">
					 <button type="button" id="idDup" onclick="idDupCheck()">ID중복확인</button>
					 <br><span id="iMessage" class="eMessage"></span></td>
					 </td>
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
					
					<!-- <tr>
					 <th>등급</th>
					 <td><input type="text" name="user_rank" id="user_rank"></td>
					</tr> -->
									
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