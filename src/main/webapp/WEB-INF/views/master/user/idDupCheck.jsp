<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ID 중복확인</title>
<script>


function idOK() {

	opener.document.getElementById('user_id').value='${param.user_id}';
	opener.document.getElementById('idDup').disabled='disabled';
	opener.document.getElementById('submitTag').disabled='';
	opener.document.getElementById('user_id').readOnly=true; // OK
	opener.document.getElementById('user_name').focus();
	
	close();

}
</script>
<style>
   body {
      background-color: LightYellow;
      font-family: 맑은고딕;
   }
   #wrap {
      margin-left: 0;
      text-align: center;
   }
   h3 { color: navy; }   
</style>
</head>
<body>
<div id="wrap">
	<h3>ID 중복확인</h3>
	<h4>Parameter id값 확인</h4>
	=> Parameter_ID : ${param.user_id} <br>
	=> entity_ID : ${entity.user_id} <hr>
	<form action="idDupCheck" method="get">
		User_ID :
		<input type="text" name="user_id" id="user_id" value="${param.user_id}">
		<input type="submit" value="ID중복확인" onclick="return idCheck()"> <br>
		<!-- inCheck.js 의  idCheck() 의 결과에 따라 submit 결정 -->
		<span id="iMessage" class="eMessage"></span>
	</form>
	
	<br><br>
	
	<div id="msgBlock">
		<c:if test="${idUse == 'T'}">
			${entity.user_id} 는(은) 사용가능 합니다. &nbsp;&nbsp;
			<button onclick="idOK()">ID 선택</button>
		</c:if>
		<c:if test="${idUse == 'F'}">
			${entity.user_id} 는(은) 사용 불가능 합니다. (사용중) <br>
			다시 입력 하세요.	
	
    		<script>
    			document.getElementById('user_id').focus();
    			opener.document.getElementById('user_id').value='';
    		</script>
		</c:if>
	</div>
</div>
</body>
</html>