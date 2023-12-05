import React from 'react';
import '../../../../styles/members/join_modal03.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CheckOut_Modal = () => {

    const [addressList, setAddressList] = useState([]);

    // => 실행과 동시에 처음 한번 서버요청
    useEffect(() => {
        axios
            .get('/address/aList')
            .then((response) => {
                setAddressList(response.data);

                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });
    }, []);

    console.log("addressList", addressList);
    return (
        <div className="Join_Modal03">
            <div className="modal_cover">
                <div className="modal_3">
                    <h3>주소 선택</h3>

                    <form action="">
                        <table className='modal_2_t'>
                            <thead>
                                <tr>
                                    <th>받으시는분</th>
                                    <th>주소</th>
                                    <th>연락처</th>
                                    <th>주문 메시지</th>
                                    <th>관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addressList.map((address, index) => (
                                    <tr key={index}>
                                        <td>{address.address_name}</td>
                                        <td>{`${address.address_avc}${address.address_city}${address.address_detail}`}</td>
                                        <td>{address.address_phone_num}</td>
                                        <td></td>
                                        <td>
                                            <button>삭제</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='checkout_modal'>
                        <button className='checkout_close_button' onClick={() => window.close()}>닫기</button>
                            <button className='checkout_submit_button' type='button'>등록</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut_Modal;

