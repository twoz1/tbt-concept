import React from 'react';
import '../../../../styles/members/OrderModal.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail';

const OrderModal = ({ closeModal, user_id, order_id, order_date, address_name, address_avc, address_city,
    address_detail, address_phone_num, order_total_price, order_state, order_del_num, order_del_state }) => {

    const [orderDetail, setOrderDetail] = useState([]);
    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

    useEffect(() => {

        axios.get('/order/userOrderDetail?id=' + order_id)
            .then((response) => {
                if (response.data !== null) {
                    setOrderDetail(response.data);
                }
                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });

    }, [])

    function axOrderDelete(id) {
        let url = "/order/orderlistdelete/" + id;

        if (window.confirm("주문취소 하시겠습니까?")) {
            axios.delete(url
            ).then(response => {
                alert("취소되었습니다.");
                window.location.reload();
                console.log(response.data);
            }).catch(err => {
                if (err.response && err.response.status === 502) {
                    alert("[취소 오류]" + err.response.data);
                } else {
                    alert("[시스템 오류]" + err.message);
                }
            });
        } else {
            alert("취소되었습니다.");
        }
    }

    console.log(orderDetail);

    return (
        <div>
            <div className="modal_cover">
                <div className="modal_order">
                    <div>
                        <h4>주문자 정보</h4>
                        <table>
                            <tr>
                                <th scope="row">주문번호</th>
                                <td>{order_id}</td>
                                <th scope="row">주문일자</th>
                                <td>{order_date}</td>
                            </tr>
                            <tr>
                                <th scope="row">주문자</th>
                                <td>{loginUser.user_name}</td>
                                <th scope="row">입금현황</th>
                                <td>{order_state}</td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <h4>배송지 정보</h4>
                        <table>
                            <tr>
                                <th scope="row">수취인명</th>
                                <td>{address_name}</td>
                                <th>수취인 연락처</th>
                                <td scope="row">{address_phone_num}</td>
                            </tr>
                            <tr>
                                <th scope="row">주소</th>
                                <td colspan="3">{address_avc} {address_city} {address_detail}</td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <h4>상품 정보</h4>
                        <table>
                            <tr>
                                <th scope="col">상품명</th>
                                <th scope="col">수량</th>
                                <th scope="col">금액</th>
                                <th scope="col">리뷰</th>
                                <th scope="col"></th>
                            </tr>
                            <tbody class="orderDetail">
                                {orderDetail.map((detail) => { return (<OrderDetail user_id={user_id} {...detail} order_del_state={order_del_state} />) })}
                            </tbody>
                            <tr class="lastP">
                                <td colspan="4" className="total">
                                    {/* 상품금액 <strong>200,000원</strong> + 배송비 <strong>0원</strong> = */}
                                    총 결제 금액
                                    <strong className="strPoint"> {order_total_price.toLocaleString()}원</strong>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <div>
                            <h4>배송 현황</h4>
                            <a href='https://www.cjlogistics.com/ko/tool/parcel/tracking'>배송조회 바로가기</a>
                        </div>
                        <table>
                            <tr>
                                <th>배송사</th>
                                <td>CJ대한통운</td>
                                <th>송장번호</th>
                                <td>{order_del_num}</td>
                            </tr>
                        </table>
                    </div>

                    <div className="Modal_btn">
                        {/* <button onClick={() => window.open("https://www.cjlogistics.com/ko/tool/parcel/tracking", '_blank')}>배송조회</button> */}
                        {order_state === "입금대기" || order_del_state === "배송완료" ? <button className='order_cancel' onClick={() => axOrderDelete(order_id)}>주문취소</button> : ""}
                        <button className="close" onClick={() => closeModal('delivery')}>닫기</button>
                        {/* <button className='order_cancel' onClick={()=>axOrderDelete(order_id)}>주문취소</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderModal;