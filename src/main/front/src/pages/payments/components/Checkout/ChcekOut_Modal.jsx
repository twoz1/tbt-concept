
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddressForm from './AddressForm';
import ChcekOut_address from './ChcekOut_address';
import useModal from "../../../customHooks/useModal";
import ChcekOut_OrderAVC from "./ChcekOut_OrderAVC";
import navigateTo from "../../../config/navigateTo";

const CheckOut_Modal = ({ closeModal }) => {
  const { openModal, isModal } = useModal();
  const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
  const [addressList, setAddressList] = useState([]);
  //const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [showAddressFormContent, setShowAddressFormContent] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [pageState, setPageState] = useState(false);

  useEffect(() => {
    axios
      .get('/address/aList')
      .then((response) => {
        setAddressList(response.data);
        console.log(`** checkdata 서버연결 성공 => ${response.data}`);
      })
      .catch((err) => {
        alert(`** checkdata 서버연결 실패 => ${err.message}`);
      });
  }, []);


  // 주소 추가 함수
  const addAddressToList = (newAddress) => {
    setAddressList((prevList) => [...prevList, newAddress]);
  };

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
            alert('주소가 등록되었습니다.');
            //closeModal('addressForm');
            //setShowCheckOutModal(true);
            const newAddress = {
              address_name: document.getElementById('address_name1').value,
              address_avc: document.getElementById('address_avc1').value,
              address_city: document.getElementById('address_city1').value,
              address_detail: document.getElementById('address_detail1').value,
              address_phone_num: num,  // 여기에 전화번호 등 추가 필드도 포함할 수 있습니다.
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
  // useEffect(() => {
  //   if (loginUser == null) {
  //     alert("로그인 후 이용해주세요.");
  //     navigateTo("/");
  //   } else {
  //     setPageState(true);
  //   }
  // }, []);

  return (
    pageState && (
    <div className="Join_Modal03">
      <div className="modal_cover">
        <div className="modal_3">
          <h3>주소 선택</h3>
          <div>
            <button type="button" onClick={newAddressClick}>
              배송지 신규 입력
            </button>
            {showAddressFormContent && (
              <div>

                <table>

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
                      <input type="text" minLength="3" id="address_phone_num2" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                      <span className="hyphen"> - </span>
                      <input type="text" minLength="4" id="address_phone_num3" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
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
                      {/* <button className='addressAvcbtn' type='button'
                        onClick={() => {
                          openModal('ChcekOut_OrderAVC');
                        }}
                      >
                        &nbsp;&nbsp; 우편번호 찾기
                      </button>
                      {isModal('ChcekOut_OrderAVC') && <ChcekOut_OrderAVC closeModal={closeModal} />} */}
                      <p>
                        <input type="text" id="address_city1" placeholder={showPlaceholder ? '경기도 성남시 분당구 돌마로 46 ' : '상세주소를 입력해주세요.'} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                        &nbsp; - &nbsp;
                        <input type="text" id="address_detail1" placeholder={showPlaceholder ? '광천빌딩 5층' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
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
                <div className='checkout_modal'>
                  <button className='checkout_submit_button' type='button' onClick={() => { insertAddressList() }}>등록</button>
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
            <div className="checkout_modal">
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