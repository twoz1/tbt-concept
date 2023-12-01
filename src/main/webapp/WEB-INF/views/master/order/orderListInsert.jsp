<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문 등록 | tbt_concept</title>
<!-- 주문번호 생성 및 폼에 설정하는 JavaScript 코드 -->
<script>
    // 페이지 로드 시 자동으로 호출되는 함수
    window.onload = function() {
        generateOrderNumber();
    };

    function generateOrderNumber() {
        // "ORD"로 시작하는 주문번호 생성
        let orderChar = "T";

        // 현재 날짜 및 시간 정보를 사용하여 일련번호 생성
        let now = new Date();
        let timestamp =
            now.getFullYear().toString() +
            padZero(now.getMonth() + 1) +
            padZero(now.getDate()) +
            padZero(now.getHours()) +
            padZero(now.getMinutes()) +
            padZero(now.getSeconds());

        // 무작위 값(0부터 999 사이의 정수) 생성 및 추가
        let randomValue = padZero(Math.floor(Math.random() * 1000));
        timestamp += randomValue;

        // 일련번호를 조합하여 주문번호 생성
        let order_id_value = orderChar + timestamp;

        // 생성된 주문번호를 주문번호 입력란에 설정
        document.getElementById("order_id").value = order_id_value;
        document.getElementById("order_date").value = timestamp.substr(0, 8);
        console.log("***" + timestamp.length);
    }

    // 숫자가 한 자리일 경우 앞에 0을 추가하는 함수
    function padZero(number) {
        return number < 10 ? "0" + number : number;
    }
</script>
</head>
<body>
	<div id="master_wrap">
      <%@ include file="../masterHeader.jsp" %>
      <main id="master_main">
         <div class="order_list master_list">
            <h2 class="master_title">주문 생성</h2>
            <form action="orderListInsert" method="Post" id="orderInsert">
	            <table>
	               	<tr>
	               		<th>주문번호</th>
	               		<td>
	               			<input type="text" name="order_id" id="order_id"required readonly />
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
	               			<input type="text"  name="order_date" id="order_date"required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>받는사람</th>
	               		<td>
	               			<input type="text" name="order_receiver" id="order_receiver" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>우편번호</th>
	               		<td>
	               			<input type="text" name="order_receiver_avc" id="order_receiver_avc" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>주소 1 </th>
	               		<td>
	               			<input type="text" name="order_receiver_city" id="order_receiver_city" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>주소 2 </th>
	               		<td>
	               			<input type="text" name="order_receiver_detail" id="order_receiver_detail" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>전화번호 </th>
	               		<td>
	               			<input type="text" name="order_receiver_phone_num" id="order_receiver_phone_num" required />
						</td>
	               	</tr>
	               	<tr>
	               		<th>배송메시지 </th>
	               			<td><select name="order_message" id="order_message" >
									<option value="">선택</option>
									<option value="문앞">문앞</option>
									<option value="조심히">조심히</option>
									<option value="경비실">경비실에 맡김</option>
							</select></td>
	               	</tr>
	               	<tr>
	               		<th>결제방법 </th>
	               		<td><select name="order_pay" id="order_pay" required>
								<option value="">선택</option>
								<option value="신한">신한</option>
								<option value="농협">농협</option>
								<option value="국민">국민</option>
						</select>
						 <select name="order_pay" id="order_pay">
                                <option value="default">할부선택</option>
                                <option value="0">선택안함</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
						</td>
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
	               			<input type="text" name="order_total_each_quan" id="order_total_each_quan" required/>
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
	               			<input type="text" name="order_state" id="order_state" readonly  value="입금대기"/>
	               		</td>
	               	</tr>
	               	<tr>
	              	 	<th>배송상태</th>
	              	 	<td>
	              	 		<input type="text" name="order_del_state" id="order_del_state" readonly value="배송대기"/>
	              	 	</td>
	               	</tr> 
	               	<tr>
	               		<th>송장번호</th>
	               		<td>
	               			<input type="text" name="order_del_num" id="order_del_num"  />
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
            <div class="nav_box">
				<a class="m_button" href="masterIndex">Master Index</a>
			</div>
         </div>
      </main>
   </div>
</body>
</html>