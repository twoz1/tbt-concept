import React, { useState } from 'react';
import useModal from "../../../customHooks/useModal";
import CheckOut_Modal from "../../../members/components/checkout/ChcekOut_Modal";

// 페이지 로드 시 자동으로 호출되는 함수
window.onload = function () {
    setTimeout(function() {
      generateOrderNumber();
    }, 0);
  };
function generateOrderNumber() {
  

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
    let order_id_value = timestamp;

    // 생성된 주문번호를 주문번호 입력란에 설정
    let order_id_input = document.getElementById("order_id");
    let order_date_input = document.getElementById("order_date");

    if (order_id_input && order_date_input) {
        order_id_input.value = order_id_value;
        order_date_input.value = timestamp.substring(0, 8);
        console.log("***" + timestamp.length);
    } else {
        console.error("Element with id 'order_id' or 'order_date' not found.");
    }
}

// 숫자가 한 자리일 경우 앞에 0을 추가하는 함수
function padZero(number) {
    return number < 10 ? "0" + number : number;
}

const Information = () => {
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const { openModal, closeModal, isModal } = useModal();


    const handleRadioChange = (event) => {
        if (event.target.value === 'new') {
            setShowPlaceholder(false);
        } else {
            setShowPlaceholder(true);
        }
    };
    return (
        <div className="information">
            <div className="checkout">
                <h3>배송지 정보</h3>
                <p>
                    <span className="color">&#42;</span> 필수항목
                </p>
            </div>
            <div>
                <table className="information_table checkout_table">
                    <tbody>
                    <tr className='orderinput_hidden'>
	               		<th>주문번호</th>
	               		<td>
	               			<input type="text" name="order_id" id="order_id" required  />
						</td>
	               	</tr>
	               	<tr className='orderinput_hidden'>
	               		<th>회원 아이디</th>
	               		<td>
	               			<input type="text" name="user_id" id="user_id"required  value="qqqq123"/>
						</td>
	               	</tr>
                    <tr className='orderinput_hidden'>
	               		<th>주문일자</th>
	               		<td>
	               			<input type="text"  name="order_date" id="order_date" required  />
						</td>
	               	</tr>
	               	<tr className='orderinput_hidden'>
	               		<th>입금상태</th>
	               		<td>
                           <input type="text" name="order_state" id="order_state" readonly  value="입금대기"/>
						</td>
	               	</tr>
                    <tr className='orderinput_hidden'>
	               		<th>배송상태</th>
	               		<td>
                           <input type="text" name="order_del_state" id="order_del_state" readonly value="배송대기"/>
						</td>
	               	</tr>
                        
                        <tr>
                            <th>
                                배송지 선택 <span>&#42;</span>
                            </th>
                            <td className="address">
                                <label>
                                    <input type="radio" name="address_radio" value="default" onChange={handleRadioChange} required />
                                    기본주소
                                </label>
                                <label>
                                    <input type="radio" name="address_radio" value="new" onChange={handleRadioChange} required />
                                    새로 입력
                                </label>
                                <button
                                        type="button"
                                        onClick={() => {
                                            openModal('checkoutModal');
                                        }}
                                        >
                                        주소록
                                </button>
                                {isModal('checkoutModal') && <CheckOut_Modal closeModal={closeModal} />}
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <th>
                                받으시는 분 <span>&#42;</span>
                            </th>
                            <td className="receiver">
                                <input type="text" name="order_receiver" id="order_receiver" value="김박이" placeholder={showPlaceholder ? '최*조' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                휴대폰 번호 <span>&#42;</span>
                            </th>
                            <td className="receiver_phone">
                                <select name="order_receiver_phone_num" id="order_receiver_phone_num" style={{ backgroundColor: showPlaceholder ? '' : 'white' }}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="070">070</option>
                                </select>
                                <span className="hyphen"> - </span>
                                <input type="text" minLength="3" name="order_receiver_phone_num" id="order_receiver_phone_num" value="5000" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }}  required />
                                <span className="hyphen"> - </span>
                                <input type="text" minLength="4" name="order_receiver_phone_num" id="order_receiver_phone_num" value="5000" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }}  required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                배송 주소 <span>&#42;</span>
                            </th>
                            <td className="customer_address">
                                <input type="text" name="order_receiver_avc" id="order_receiver_avc" minLength="5" value="13630"placeholder={showPlaceholder ? '13630' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                                <p>
                                    <input type="text" name="order_receiver_city" id="order_receiver_city" value="경기도 성남시 분당구 돌마로 46 " placeholder={showPlaceholder ? '경기도 성남시 분당구 돌마로 46 ' : '상세주소를 입력해주세요.'} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                                    &nbsp; - &nbsp;
                                    <input type="text" name="order_receiver_detail" id="order_receiver_detail" value="광천빌딩 5층" placeholder={showPlaceholder ? '광천빌딩 5층' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>배송 메시지</th>
                            <td className="message">
                                <select name="order_message" id="order_message" >
                                        <option value="">선택</option>
                                        <option value="문앞">문앞</option>
                                        <option value="조심히">조심히</option>
                                        <option value="경비실">경비실에 맡김</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;
