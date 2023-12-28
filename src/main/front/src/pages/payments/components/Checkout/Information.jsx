import React, { useEffect, useState } from 'react';
import useModal from "../../../customHooks/useModal";
import CheckOut_Modal from "./CheckOut_Modal";
import CheckOut_OrderAVC from "./CheckOut_OrderAVC";
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Configstore from '../../../../pages/config/Configstore';
import { useSelector } from 'react-redux';



const Information = ({ user_id}) => {


    const addressValueList = useSelector(state => state.address);

    useEffect(() => {
        console.log(addressValueList);

        if (addressValueList.address != null) {
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




    // 페이지 로드 시 자동으로 호출되는 함수
 
    const { openModal, closeModal, isModal } = useModal();


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
                        <tr>
                            <th>
                                받으시는 분 <span>&#42;</span>
                            </th>
                            <td className="receiver">
                                <input type="hidden" name="user_id" id="user_id" required value={user_id} />
                                <input type="text" name="address_name" id="address_name"   value={""} readonly required /> &nbsp;&nbsp;
                                <button type="button" onClick={() => openModal('address')}>주소록</button>
                                {isModal('address') && <CheckOut_Modal closeModal={closeModal} user_id={user_id}/>}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                휴대폰 번호 <span>&#42;</span>
                            </th>
                            <td className="receiver_phone">
                                <input type="text" minLength="3" name="address_phone_num" id="address_phone_num" maxLength="4"  value={""} readonly required />

                            </td>
                        </tr>
                        <tr>
                            <th>
                                배송 주소 <span>&#42;</span>
                            </th>
                            <td className="customer_address">
                                <input type="text" name="address_avc" id="address_avc"
                                    minLength="5" maxLength="7" value={""} readonly required
                                />
                                <p>
                                    <input type="text" name="address_city" id="address_city" value={""} readonly required />
                                    &nbsp; - &nbsp;
                                    <input type="text" name="address_detail" id="address_detail"  value={""} readonly required />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>배송 메시지</th>
                            <td className="message">
                                <input type="text" name="order_message" id="order_message" value={""} readonly />
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;