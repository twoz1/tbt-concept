<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주소목록 | tbt_concept</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/lib/js/user/axUser.js"></script>
<script src="/resources/lib/js/cart/cart.js"></script>
<script>
   history.replaceState({}, null, location.pathname);
</script>
</head>
<body>
<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="address_list master_list">
            <h2 class="master_title">주소 목록</h2>
            <div class="searchBox">
					<form action="addressList" method="get">
					    <select name="searchType" id="searchType" onchange="keywordClear()">
					        <option value="all" ${requestScope.searchType == 'all' ? "selected" : "" }>전체</option>
					        <option value="user_id" ${requestScope.searchType == 'user_id' ? "selected" : "" }>회원ID</option>
					    </select>
					    <input type="text" name="keyword" id="keyword" placeholder="검색어를 입력하세요." value="${requestScope.keyword}" />
					    <button type="submit" id="searchBtn">Search</button>
					</form>
				</div>
            
            <table>
                 <tr>
               <th>회원</th>
               <th>회원 ID</th>
               <th>받는 사람</th>
               <th>휴대폰 번호</th>
               <th>주소</th>
               <th>배송 메시지<th>
               <!-- <th>삭제</th> -->
            </tr>
            
               <c:if test="${not empty requestScope.addressList}">
                  <c:forEach var="a" items="${requestScope.addressList}">
                     <tr>
                        <td>${a.duplicate_user_id}</td>
                        <td>${a.user_id}</td>
                        <td>${a.address_name}</td>
                        <td>${a.address_phone_num}</td>
                         <td>${a.address_avc}
                           ${a.address_city}
                           ${a.address_detail}
                        </td>   
                        <td>${a.order_message}</td>
                        <%-- <td><button onclick="axUserDelete('${a.user_id}')" id="${a.user_id}">삭제</button></td> --%>
                     </tr>
                  </c:forEach>
               </c:if>
               
                 <%--  <c:if test="${empty requestScope.addressList}">
                        <tr>
                        <td colspan="7">출력할 Data 가 1건도 없습니다.</td>
      </tr>
   </c:if> --%>
            </table>
            <div class="pageNation">
					 <c:choose>
						<c:when test="${resultDTO.start != resultDTO.page}">
						  	<a class ="firstB" href="addressList?page=${resultDTO.start}&searchType=${searchType}&keyword=${keyword}">처음</a>
		  					<a class ="ltB" href="addressList?page=${resultDTO.page-1}&searchType=${searchType}&keyword=${keyword}">&LT;</a>
						</c:when>
						<c:otherwise>
						  	<span class ="firstB">처음</span>
						  	<span class ="ltB">&LT;</span>
						</c:otherwise>
					</c:choose> 	 
					 
					<c:forEach var="i" items="${resultDTO.pageList}">
						<c:if test="${i==resultDTO.page}">
							<span><strong>${i}</strong></span>&nbsp;
						</c:if>
						<c:if test="${i!=resultDTO.page}">
							<a href="addressList?page=${i}&searchType=${searchType}&keyword=${keyword}">${i}</a>&nbsp;
						</c:if>
					</c:forEach>
					 
					<c:choose>
						<c:when test="${resultDTO.end != resultDTO.page}">
							<a class="gtB" href="addressList?page=${resultDTO.page+1}&searchType=${searchType}&keyword=${keyword}">&GT;</a>
							<a class="lastB" href="addressList?page=${resultDTO.end}&searchType=${searchType}&keyword=${keyword}">마지막</a>
						</c:when>
						<c:otherwise>
							<span class="gtB">&GT;</span>
							<span class="lastB">마지막</span>
						</c:otherwise>
					</c:choose>
				</div>
            
         </div>
      </main>
   </div>
</body>
</html>
