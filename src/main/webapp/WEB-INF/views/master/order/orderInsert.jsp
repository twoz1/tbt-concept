<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품 등록 | tbt_concept</title>
</head>
<body>
	<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="order_list master_list">
            <h2 class="master_title">주문 리스트</h2>
            <form action="orederListInsert" method="Post"
           		enctype="multipart/form-data" id="productInsert">
	            <table>
	               	<tr>
	               		<th>주문번호</th>
	               		<td>
	               			<input type="text" name="order_id" id="order_id"required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>회원 아이디</th>
	               		<td>
	               			<input type="text" name="user_id" id="user_id"required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>주문일자</th>
	               		<td>
	               			<input type="date" name="order_date" id="order_date"required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>받는사람</th>
	               		<td>
	               			<input type="text" name="order_reciver" id="order_reciver" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>우편번호</th>
	               		<td>
	               			<input type="text" name="order_reciver_avc" id="order_reciver_avc" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>주소 1 </th>
	               		<td>
	               			<input type="text" name="order_reciver_city" id="order_reciver_city" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>주소 2 </th>
	               		<td>
	               			<input type="text" name="order_reciver_detail" id="order_reciver_detail" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>전화번호 </th>
	               		<td>
	               			<input type="text" name="order_reciver_phone_num" id="order_reciver_phone_num" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>배송메시지 </th>
	               			<td><select name="order_message" id="order_message" >
									<option value="">선택</option>
									<option value="1">문앞</option>
									<option value="2">조심히</option>
									<option value="3">경비실에 맡김</option>
							</select></td>
	               	</tr>
	               	<tr>
	               		<th>결제방법 </th>
	               		<td><select name="order_pay" id="order_pay" required>
								<option value="">선택</option>
								<option value="Sinhan">신한</option>
								<option value="NH">농협</option>
								<option value="KB">국민</option>
						</select></td>
	               	</tr>
	               	<tr>
	               		<th>쿠폰 </th>
	               		<td><select name="order_coupon" id="order_coupon" required>
								<option value="">선택</option>
								<option value="ss">봄/여름</option>
								<option value="fw">가을/겨울</option>
						</select></td>
	               	</tr>
	               	<tr>
	               		<th>물품 종류 </th>
	               		<td>
	               			<input type="text" name="order_total_each_quan" id="order_total_each_quan" />
						</td>
	               	</tr>
	               	<tr>
	               		<th>최종 금액</th>
	               		<td>
	               			<input type="text" name="order_total_price" id="order_total_price" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>입금상태</th>
	               		<td>
	               			<input type="text" name="order_state" id="order_state"/>
						</td>
	               	</tr>
	               	<tr>
	              	 	<th>배송상태</th>
	               		<td>
	               			<input type="text" name="order_del_state" id="order_del_state"  />
						</td>
	               	</tr>
	               	<tr>
	               		<th>송장번호</th>
	               		<td>
	               			<input type="text" name="order_del_num" id="order_del_num" required />
						</td>
	               	</tr>
	            </table>
            </form>
         </div>
      </main>
   </div>
</body>
</html>