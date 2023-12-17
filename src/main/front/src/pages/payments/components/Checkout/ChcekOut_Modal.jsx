
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChcekOut_address from './ChcekOut_address';
import useModal from "../../../customHooks/useModal";
import ChcekOut_OrderAVC from "./ChcekOut_OrderAVC";
import navigateTo from "../../../config/navigateTo";
import '../../../../styles/payments/CheckOut_Modal.css';

const CheckOut_Modal = ({ closeModal}) => {

  const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
  const [addressList, setAddressList] = useState([]);
  const [showAddressFormContent, setShowAddressFormContent] = useState(false);
  const [pageState, setPageState] = useState(false);


  useEffect(() => {
    if (loginUser == null) {
      alert("로그인 후 이용해주세요.");
      navigateTo("/");
    } else {
      setPageState(true);
      axios
        .get('/address/aList')
        .then((response) => {
          const userAddressList = response.data.filter(address => address.user_id === loginUser.user_id);
          setAddressList(userAddressList);
          console.log(`** checkdata 서버연결 성공 => ${userAddressList}`);
        })
        .catch((err) => {
          alert(`** checkdata 서버연결 실패 => ${err.message}`);
        });
    }
  }, []);

  console.log('리스트다냐옹',addressList);

  // 주소 추가 함수
  const addAddressToList = (newAddress) => {
    setAddressList((prevList) => [...prevList, newAddress]);
  };

  function insertAddressList() {
    const confirmResult = window.confirm('주소를 등록하시겠습니까?');

    if (confirmResult) {
        const addressAvc = document.getElementById('address_avc1').value;
        const addressName = document.getElementById('address_name1').value;
        const addressCity = document.getElementById('address_city1').value;
        const addressDetail = document.getElementById('address_detail1').value;
        const phoneNum1 = document.getElementById('address_phone_num1').value;
        const phoneNum2 = document.getElementById('address_phone_num2').value;
        const phoneNum3 = document.getElementById('address_phone_num3').value;

  
        if (!addressAvc || !addressName || !addressCity || !phoneNum1 || !phoneNum2 || !phoneNum3) {
            alert('모든 필수 항목을 입력하세요.');
            return;
        }

        const num = `${phoneNum1}-${phoneNum2}-${phoneNum3}`;

        axios
            .post('/address/aListInsert', {
                user_id: loginUser.user_id,
                address_avc: addressAvc,
                address_name: addressName,
                address_city: addressCity,
                address_detail: addressDetail,
                address_phone_num: num,
                order_message: document.getElementById('order_message1').value,
            })
            .then((response) => {
                if (response.data === '완료') {
                    alert('주소가 등록되었습니다.');
                    const newAddress = {
                        address_name: addressName,
                        address_avc: addressAvc,
                        address_city: addressCity,
                        address_detail: addressDetail,
                        address_phone_num: num,
                        order_message: document.getElementById('order_message1').value,
                    };
                    addAddressToList(newAddress);
                }
            })
            .catch((err) => {
                alert('[시스템 오류] 잠시 후에 다시 시도하세요.' + err.message);
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

  const newAddressClick = () => {
    setShowAddressFormContent(true);
  };

  const [enroll_company, setEnroll_company] = useState({
    zonecode:'',
    address:'',
  });
  
  const [popup, setPopup] = useState(false);
  
  const handleInput = (e) => {
    setEnroll_company({
        ...enroll_company,
          [e.target.name]:e.target.value,
      })
  }
  
  const handleComplete = (data) => {
    setPopup(!popup);
  }
      
  return (
    pageState && (
    <div className="cAddress_Modal">
      <div className="Cmodal_cover">
        <div className="Cmodal">
          <h3>주소 선택</h3>
          <div className='newAddressSubmit'>
            <span className='newAddressSubmit_btn' type="button" onClick={newAddressClick}>
              배송지 신규 입력하기
            </span>

            {showAddressFormContent && (
              <div>

                <table className='newAddressInput'>

                  <tr className='orderinput_hidden'>
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
                      <input type="text" id="address_name1" required />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      휴대폰 번호 <span>&#42;</span>
                    </th>
                    <td className="receiver_phone">
                      <input type='text' id="address_phone_num1"  required/>
                      <span className="hyphen"> - </span>
                      <input type="text" minLength="3" id="address_phone_num2" maxLength="4"  required />
                      <span className="hyphen"> - </span>
                      <input type="text" minLength="4" id="address_phone_num3" maxLength="4" required />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      배송 주소 <span>&#42;</span>
                    </th>
                    <td className="customer_address">
                      <input type="text" id="address_avc1"
                        minLength="5" maxLength="7"
                        onChange={handleInput} value={enroll_company.zonecode}
                        required
                      />


                    <button className='addressSearchBtn' onClick={handleComplete}> 우편번호 찾기</button>
                    {popup && <ChcekOut_OrderAVC company={enroll_company} setcompany={setEnroll_company}></ChcekOut_OrderAVC>}

                      <p>
                        <input type="text" id="address_city1" onChange={handleInput} value={enroll_company.address} required />
                        &nbsp; - &nbsp;
                        <input type="text" id="address_detail1" />
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>배송 메시지</th>
                    <td className="message">
                      <input type="text" id="order_message1" />
                    </td>
                  </tr>
                </table>
                <div className='checkout_modal_btn'>
                  <button className='checkout_submit_button' type='button' onClick={() => { insertAddressList()}}>등록</button>
                </div>

              </div>
            )}
          </div>

          <form action="">
            <table className="modal_2_t">
              <thead>
                <tr>
                  <th>받으시는분</th>
                  <th>주소</th>
                  <th>연락처</th>
                  <th>주문 메시지</th>
                  <th>선택</th>
                  <th>관리</th>
                </tr>
              </thead>

              <tbody>
                {addressList.map((address, index) => (
                  <ChcekOut_address key={index} {...address} closeModal={closeModal} setAddressList={setAddressList} />
                ))}
              </tbody>
            </table>
          </form>
            <div className="checkout_modal_btn">
              <button className="checkout_close_button" type="button" onClick={() => closeModal("address")}>
                닫기
              </button>
            </div>
        </div>
      </div>
    </div>
        )
  );
};

export default CheckOut_Modal;