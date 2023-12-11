import { useState, useEffect } from 'react';
import MyOrderItem from './MyOrderItem';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MyOrderList = ({ loginUser }) => {

    const [order, setOrder] = useState([]);

    useEffect(() => {

        axios.get('/order/userOrderList?user_id=' + loginUser.user_id)
            .then((response) => {
                if (response.data !== null) {
                    setOrder(response.data);
                }
                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });


    }, [])




    return (
        <div className="MyOrderList">
            <div className="orderlist cover">
                <div className="order_title">
                    <h3>최근 주문 내역</h3>
                    <span><Link to="/orderlist">MORE<i className="fa-sharp fa-small fa-plus"></i></Link></span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">주문일</th>
                            <th scope="col">주문번호</th>
                            <th scope="col">상품 종류 수량</th>
                            <th scope="col">상품 총 금액</th>
                            <th scope="col">결제 수단</th>
                            <th scope="col">배송 상태</th>
                            <th></th>
                        </tr>
                    </thead>
                    {order.slice(0, 3).map((order) => { return (<MyOrderItem key={order.order_id} {...order} />) })}
                </table>
            </div>
        </div>
    );
}

export default MyOrderList;