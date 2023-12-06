import '../../styles/payments/Checkout.css';
import Title from './components/Checkout/Title';
import Information from './components/Checkout/Information';
import Item from './components/Checkout/Item';

import Pay from './components/Checkout/Pay';
import SidePay from './components/Checkout/SidePay';

import g_antonCrystal_01 from '../../images/g_antonCrystal_01.jpg';
import g_andyBrownCrystal_01 from '../../images/g_andyBrownCrystal_01.jpg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


//임의의 상품 목록
const checkoutList = []

//임의의 쿠폰 목록
const couponOptions = [
    { value: 'welcome', label: '회원가입 감사 10% 할인 쿠폰', discount: 10 },
    { value: 'summer', label: 's/s기념 10% 할인 쿠폰', discount: 10 },
];



const Checkout = ({}) => {
    
    const location = useLocation();
    const { quantityGoods, product_name, product_img1, product_price, product_id, code} = location.state;

    const newProduct = {
        id: checkoutList.length, // 아이디는 현재 배열 길이로 설정하거나 다른 방식으로 유니크한 값 생성
        product_id: product_id, 
        product_name: product_name,
        product_price: product_price,
        quantityGoods: quantityGoods,
        product_img1: product_img1,
        code : code,
      };
    
    const updatedCheckoutList = [...checkoutList, newProduct];


    const [selectedCoupon, setSelectedCoupon] = useState(null);
    
    const handleCouponChange = (event) => {
        const selectedValue = event.target.value;
        const selectedCouponInfo = couponOptions.find((coupon) => coupon.value === selectedValue);

        setSelectedCoupon(selectedCouponInfo);
    };
    // console.log(selectedCoupon);

    
    //총 상품금액 (DB연결 후 재구현 예정)
    const calculateTotalPrice = (items) => {
        let totalPrice = 0;
      
        for (let i = 0; i < items.length; i++) {
          totalPrice += items[i].product_price * items[i].quantityGoods;
        }
        return totalPrice;
      };
    const totalPrice = calculateTotalPrice(updatedCheckoutList);

    // const totalPrice = (checkoutList[0].price * checkoutList[0].quantity)
    // + (checkoutList[1].price * checkoutList[1].quantity);
    // const totalPrice2 = (newProduct[0].price * newProduct[0].quantity)
    //     + (newProduct[1].price * newProduct[1].quantity);
    
    console.log("^^^^^^^^^^^^^^^^^^", code);
    return (
        
        <div>
            <div className="center m_c">
                <div className="check_box">
                    <section className="check_left">
                        <Title />
                        <form action="oListInsert"  id='oListInsert'>
                        <Information />
                            <Item updatedCheckoutList={updatedCheckoutList}/>
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