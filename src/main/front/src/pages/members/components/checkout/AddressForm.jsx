
import React, { useEffect, useState } from 'react';
import useModal from "../../../customHooks/useModal";
import CheckOut_Modal from "../../../members/components/checkout/ChcekOut_Modal";
import ChcekOut_OrderAVC from "../../../members/components/checkout/ChcekOut_OrderAVC";
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';



const AddressForm = () => {

    const [ShowCheckOut_modal,setShowCheckOut_modal]=useState(false);

    const prevPageClick = () => {
        setShowCheckOut_modal(true);
    };
   
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const { openModal, closeModal, isModal } = useModal();

    const handleRadioChange = (event) => {
        if (event.target.value === 'new') {
            setShowPlaceholder(false);
        } else {
            setShowPlaceholder(true);
        }
    };

    function insertAddressList() {
        let url = "/address/aListInsert";
        let formData = new FormData(document.getElementById('aListInsert'));

        axios.post(url, formData)
            .then(response => {

            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[입력 오류] 다시 시도하세요.");
                } else {
                    alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });

    }

    return(

        <div>
            {ShowCheckOut_modal ? (
                        <CheckOut_Modal/>
                    ) : (
            <form action="">
             <table>
                        <tr>
                            <th>
                                받으시는 분 <span>&#42;</span>
                            </th>
                            <td className="receiver">
                                <input type="text" name="address_name" id="address_name" placeholder={showPlaceholder ? '최*조' : ''} style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                휴대폰 번호 <span>&#42;</span>
                            </th>
                            <td className="receiver_phone">
                                <select name="address_phone_num" id="address_phone_num" style={{ backgroundColor: showPlaceholder ? '' : 'white' }}>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="070">070</option>
                                </select>
                                <span className="hyphen"> - </span>
                                <input type="text" minLength="3" name="address_phone_num" id="address_phone_num" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
                                <span className="hyphen"> - </span>
                                <input type="text" minLength="4" name="address_phone_num" id="address_phone_num" maxLength="4" style={{ backgroundColor: showPlaceholder ? '' : 'white' }} required />
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
                                <button type='button'
                                    onClick={() => {
                                        openModal('ChcekOut_OrderAVC');
                                    }}
                                >
                                    우편번호 찾기
                                </button>
                                {isModal('ChcekOut_OrderAVC') && <ChcekOut_OrderAVC closeModal={closeModal} />}
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
                    </table>
                    <div className='checkout_modal'>
                            <button className='checkout_close_button' onClick={()=>prevPageClick()}>닫기</button>
                            
                            <button className='checkout_submit_button' type='button'onClick={()=>insertAddressList()} >등록</button>
                        </div>
                    </form>
                    )};
        </div>
    );
};
export default AddressForm;