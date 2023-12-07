
import React, { useEffect, useState } from 'react';
import useModal from "../../../customHooks/useModal";
import CheckOut_Modal from "./ChcekOut_Modal";
import ChcekOut_OrderAVC from "./ChcekOut_OrderAVC";
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import navigateTo from "../../../config/navigateTo";
//import { useNavigate } from 'react-router-dom';




const AddressForm = () => {

    
    const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
    const [pageState, setPageState] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const { openModal, isModal,closeModal } = useModal();
    const [showCheckOutModal, setShowCheckOutModal] = useState(false); // 추가

    const handleRadioChange = (event) => {
        if (event.target.value === 'new') {
            setShowPlaceholder(false);
        } else {
            setShowPlaceholder(true);
        }
    };

   // const navigate = useNavigate();

    function insertAddressList() {
        const confirmResult = window.confirm('주소를 등록하시겠습니까?');

        if (confirmResult) {
            let url = '/address/aListInsert';

            let num =
                document.getElementById('address_phone_num1').value +
                '-' +
                document.getElementById('address_phone_num2').value +
                '-' +
                document.getElementById('address_phone_num3').value;

            axios
                .post(url, {
                    user_id: loginUser.user_id,
                    address_avc: document.getElementById('address_avc1').value,
                    address_name: document.getElementById('address_name1').value,
                    address_city: document.getElementById('address_city1').value,
                    address_detail: document.getElementById('address_detail1').value,
                    address_phone_num: num,
                    order_message: document.getElementById('order_message1').value,
                })
                .then((response) => {
                    if (response.data === '완료') {
                        // 주소 추가 성공 시에 수행할 작업을 여기에 추가하세요.
                        alert('주소가 등록되었습니다.');
                        setShowCheckOutModal(true);
                    }
                    // 이전 페이지로 이동 또는 다른 작업을 수행할 수 있습니다.
                })
                .catch((err) => {
                    alert('[시스템 오류] 잠시 후에 다시 시도하세요.' + err.message);
                    //console.error("폼 엘리먼트를 찾을 수 없습니다.");
                });
        }
    }

    useEffect(() => {

        if (loginUser == null) {
            alert("로그인 후 이용해주세요.");
            navigateTo("/");
        } else {
            setPageState(true);
        }
    }, []);

    return (pageState && (

        <div>
          
                <table>

                    <tr  className='orderinput_hidden'>
                        <th >
                            회원 ID <span>&#42;</span>
                            <input type="text" id="user_id" value={loginUser.user_id} required />
                        </th>
                    </tr>   
                    <tr>

                        <th>
                            받으시는 분 <span>&#42;</span>
                        </th>
                        <td className="receiver">
                            <input type="text" id="address_name1" placeholder={showPlaceholder ? '최*조' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            휴대폰 번호 <span>&#42;</span>
                        </th>
                        <td className="receiver_phone">
                            <select id="address_phone_num1" style={{ backgroundColor: showPlaceholder ? '' : 'white' }}>
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="070">070</option>
                            </select>
                            <span className="hyphen"> - </span>
                            <input type="text" minLength="3"  id="address_phone_num2" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                            <span className="hyphen"> - </span>
                            <input type="text" minLength="4"  id="address_phone_num3" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            배송 주소 <span>&#42;</span>
                        </th>
                        <td className="customer_address">
                            <input type="text" id="address_avc1"
                                minLength="5" maxLength="7"
                                placeholder={showPlaceholder ? '13630' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }}
                                required
                            />
                            <button className='addressAvcbtn' type='button'
                                onClick={() => {
                                    openModal('ChcekOut_OrderAVC'); 
                                }}  
                            >
                                &nbsp;&nbsp; 우편번호 찾기
                            </button>
                            {isModal('ChcekOut_OrderAVC') && <ChcekOut_OrderAVC closeModal={closeModal} />}
                            <p>
                                <input type="text"  id="address_city1" placeholder={showPlaceholder ? '경기도 성남시 분당구 돌마로 46 ' : '상세주소를 입력해주세요.'} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                                &nbsp; - &nbsp;
                                <input type="text"  id="address_detail1" placeholder={showPlaceholder ? '광천빌딩 5층' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th>배송 메시지</th>
                        <td className="message">
                            <input type="text"  id="order_message1" />
                        </td>
                    </tr>
                </table>
                <div className='checkout_modal'>
                <button className='checkout_submit_button' type='button' onClick={() => { insertAddressList()}} >등록</button>
                </div>
                {showCheckOutModal && <CheckOut_Modal closeModal={() => setShowCheckOutModal(false)} />}
        </div>
    ));
};
export default AddressForm;