import React, { useEffect, useState } from 'react';
import useModal from "../../../customHooks/useModal";
import CheckOut_Modal from "./ChcekOut_Modal";
import ChcekOut_OrderAVC from "./ChcekOut_OrderAVC";
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Configstore from '../../../../pages/config/Configstore';
import { useSelector } from 'react-redux';



// 숫자가 한 자리일 경우 앞에 0을 추가하는 함수
function padZero(number) {
    return number < 10 ? "0" + number : number;
}
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




<<<<<<< HEAD
const Information = ({ }) => {
=======
    const handleAddressBookClick = () => {
        window.open('/addressOpen', '_blank', 'width=1040, height=800');
    };
>>>>>>> hyeonju


    const addressValueList = useSelector(state => state.address);

    useEffect(() => {
        console.log(addressValueList);

        if (addressValueList != null) {
            document.getElementById("address_avc").value = addressValueList.address.address_avc;
            document.getElementById("address_name").value = addressValueList.address.address_name;
            document.getElementById("address_city").value = addressValueList.address.address_city;
            document.getElementById("address_detail").value = addressValueList.address.address_detail;
            document.getElementById("address_phone_num").value = addressValueList.address.address_phone_num;
            document.getElementById("order_message").value = addressValueList.address.order_message;
        } else {
            document.getElementById("address_avc").value = "";
            document.getElementById("address_name").value = "";
            document.getElementById("address_city").value = "";
            document.getElementById("address_detail").value = "";
            document.getElementById("address_phone_num").value = "";
            document.getElementById("order_message").value = "";
        }


    }, [addressValueList]);



    // const location = useLocation();
    // const { address_name, address_phone_num, address_avc, address_city, address_detail, order_message } = location.state;
    // console.log('너 들어왔니?',address_name);

    // 페이지 로드 시 자동으로 호출되는 함수
    useEffect(() => {
        generateOrderNumber();
    }, []);

    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const { openModal, closeModal, isModal } = useModal();

    const handleRadioChange = (event) => {
        if (event.target.value === 'new') {
            setShowPlaceholder(false);
        } else {
            setShowPlaceholder(true);
        }
    };

    // const [addressList, setAddressList] = useState([]);

    // // => 실행과 동시에 처음 한번 서버요청
    // useEffect(() => {
    //     axios
    //         .get('/address/aList')
    //         .then((response) => {
    //             setAddressList(response.data);

    //             console.log(`** checkdata 서버연결 성공 => ${response.data}`);
    //         }).catch((err) => {
    //             alert(`** checkdata 서버연결 실패 => ${err.message}`);
    //         });
    // }, []);

    // console.log("addressList", addressList);


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
                                <input type="text" name="order_id" id="order_id" required />
                            </td>
                        </tr>
                        <tr className='orderinput_hidden'>
                            <th>회원 아이디</th>
                            <td>
                                <input type="text" name="user_id" id="user_id" required value="q123" />
                            </td>
                        </tr>
                        <tr className='orderinput_hidden'>
                            <th>주문일자</th>
                            <td>
                                <input type="text" name="order_date" id="order_date" required />
                            </td>
                        </tr>
                        <tr className='orderinput_hidden'>
                            <th>입금상태</th>
                            <td>
                                <input type="text" name="order_state" id="order_state" readonly value="입금대기" />
                            </td>
                        </tr>
                        <tr className='orderinput_hidden'>
                            <th>배송상태</th>
                            <td>
                                <input type="text" name="order_del_state" id="order_del_state" readonly value="배송대기" />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                받으시는 분 <span>&#42;</span>
                            </th>
                            <td className="receiver">
                                <input type="text" name="address_name" id="address_name" placeholder={showPlaceholder ? '최*조' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required /> &nbsp;&nbsp;
                                <span type="button" onClick={() => openModal('address')}>주소록</span>
                                {isModal('address') && <CheckOut_Modal closeModal={closeModal} />}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                휴대폰 번호 <span>&#42;</span>
                            </th>
                            <td className="receiver_phone">
                                <input type="text" minLength="3" name="address_phone_num" id="address_phone_num" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />

                            </td>
                        </tr>
                        <tr>
                            <th>
                                배송 주소 <span>&#42;</span>
                            </th>
                            <td className="customer_address">
                                <input type="text" name="address_avc" id="address_avc"
                                    minLength="5" maxLength="7"
                                    placeholder={showPlaceholder ? '13630' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }}
                                    required
                                />
                                <p>
                                    <input type="text" name="address_city" id="address_city" placeholder={showPlaceholder ? '경기도 성남시 분당구 돌마로 46 ' : '상세주소를 입력해주세요.'} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                                    &nbsp; - &nbsp;
                                    <input type="text" name="address_detail" id="address_detail" placeholder={showPlaceholder ? '광천빌딩 5층' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>배송 메시지</th>
                            <td className="message">
                                <input type="text" name="order_message" id="order_message" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;