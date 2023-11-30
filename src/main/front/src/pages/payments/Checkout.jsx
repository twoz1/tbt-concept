import '../../styles/payments/Checkout.css';
import Title from './components/Checkout/Title';
import Information from './components/Checkout/Information';
import Item from './components/Checkout/Item';

import Pay from './components/Checkout/Pay';
import SidePay from './components/Checkout/SidePay';
import Join_Modal02 from '../members/components/Join/Join_Modal02';
import Join_Modal03 from '../members/components/Join/Join_Modal03';

import g_antonCrystal_01 from '../../images/g_antonCrystal_01.jpg';
import g_andyBrownCrystal_01 from '../../images/g_andyBrownCrystal_01.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

//임의의 상품 목록
const checkoutList = [
    {
        id: 0,
        name: 'Andy Brown Crystal',
        price: 162000,
        quantity: 2,
        imageFront: g_andyBrownCrystal_01
    },
    {
        id: 1,
        name: 'Anton Crystal',
        price: 81000,
        quantity: 1,
        imageFront: g_antonCrystal_01,
    }
]

//임의의 쿠폰 목록
const couponOptions = [
    { value: 'welcome', label: '회원가입 감사 10% 할인 쿠폰', discount: 10 },
    { value: 'summer', label: 's/s기념 10% 할인 쿠폰', discount: 10 },
];

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

const Checkout = () => {

    const [selectedCoupon, setSelectedCoupon] = useState(null);

    const handleCouponChange = (event) => {
        const selectedValue = event.target.value;
        const selectedCouponInfo = couponOptions.find((coupon) => coupon.value === selectedValue);

        setSelectedCoupon(selectedCouponInfo);
    };
    console.log(selectedCoupon);

    //총 상품금액 (DB연결 후 재구현 예정)
    const totalPrice = (checkoutList[0].price * checkoutList[0].quantity)
        + (checkoutList[1].price * checkoutList[1].quantity);


    return (
        
        <div>
            <div className="center m_c">
                <div className="check_box">
                    <section className="check_left">
                        <Title />
                        <form action="oListInsert" id='oListInsert'>
                        <Information />
                            <Item checkoutList={checkoutList} />
                            <div className="discount">
                                <h3>할인받기</h3>
                                <table className="discount_table checkout_table">
                                    <tbody>
                                        <tr>
                                            <th>할인 쿠폰</th>
                                            <td>
                                                <select className="checkout_cou" name="order_coupon" id="order_coupon" onChange={handleCouponChange}>
                                                    <option value="쿠폰선택">쿠폰선택</option>
                                                    {couponOptions.map((coupon) => (
                                                        <option key={coupon.value} value={coupon.value}>
                                                            {coupon.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <Pay />
                            <section className="check_right">
                                <SidePay totalPrice={totalPrice} selectedCoupon={selectedCoupon} />
                            </section>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default Checkout;