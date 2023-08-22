
import '../../styles/payments/Checkout.css';
import Title from './components/Checkout/Title';
import Information from './components/Checkout/Information';
import Item from './components/Checkout/Item';
import Discount from './components/Checkout/Discount';
import Pay from './components/Checkout/Pay';
import SidePay from './components/Checkout/SidePay';
import Join_Modal02 from '../members/components/Join/Join_Modal02';
import Join_Modal03 from '../members/components/Join/Join_Modal03';
import { useState } from 'react';

import g_antonCrystal_01 from '../../images/g_antonCrystal_01.jpg';
import g_andyBrownCrystal_01 from '../../images/g_andyBrownCrystal_01.jpg';

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
                        <form action="#">
                            <div className="information">
                                <Information />
                            </div>
                            <Item checkoutList={checkoutList} />

                            <div className="discount">
                                <h3>할인받기</h3>
                                <table className="discount_table">
                                    <tbody>
                                        <tr>
                                            <th>할인 쿠폰</th>
                                            <td>
                                                <select className="checkout_cou" onChange={handleCouponChange}>
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
                        </form>
                    </section>
                    <section className="check_right">
                        <SidePay totalPrice={totalPrice} selectedCoupon={selectedCoupon} />
                    </section>
                </div>
            </div>
        </div>
    );
};
export default Checkout;