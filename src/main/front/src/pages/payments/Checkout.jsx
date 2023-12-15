import '../../styles/payments/Checkout.css';
import Title from './components/Checkout/Title';
import Information from './components/Checkout/Information';
import Item from './components/Checkout/Item';

import Pay from './components/Checkout/Pay';
import SidePay from './components/Checkout/SidePay';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import navigateTo from '../config/navigateTo';
import { useParams } from "react-router-dom";

import axios from 'axios';

// 임의의 상품 목록
const checkoutList = [];

const Checkout = () => {

    const { user_id } = useParams();
    useEffect(() => {
        // 여기서 user_id를 사용할 수 있음
        console.log('User ID in Information:', user_id);
    }, [user_id]);

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    const [pageState, setPageState] = useState(false);
    console.log(loginUser);

    // 쿠폰 받아오기
    // 임의의 쿠폰 목록
    const [couponOptions, setCouponOptions] = useState([]);

    useEffect(() => {
        if (loginUser == null) {
            alert("로그인 후 이용해주세요.");
            navigateTo("/");
        } else {
            setPageState(true);
        }

        axios
            .get('/coupon/cUserList', { params: { user_id: loginUser.user_id } })
            .then(response => {
                if (response.data != null) {
                    let arrayOfObjects = response.data.map(item => {
                        return {
                            coupon_id: parseInt(item[0]),
                            coupon_name: item[1],
                            coupon_disc: parseInt(item[2]),
                            user_id: item[3],
                            coupon_start: item[4],
                            coupon_end: item[5]
                        };
                    });

                    setCouponOptions(arrayOfObjects);

                }
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });
    }, []);

    //
    console.log(couponOptions);


    const location = useLocation();
    const { quantityGoods, product_name, product_img1, product_price, product_id, checkItemsInfo } = location.state;

    const newProduct = {
        product_id: product_id,
        product_name: product_name,
        product_price: product_price,
        cart_quan: quantityGoods,
        product_img1: product_img1,
    };


    console.log(checkItemsInfo);
    console.log(newProduct);

    let updatedCheckoutList = [];

    if (Object.values(newProduct).some(value => !value)) {
        updatedCheckoutList = checkItemsInfo;
    } else {
        updatedCheckoutList = [newProduct];
    }

    // console.log(updatedCheckoutList);

    const [selectedCoupon, setSelectedCoupon] = useState(null);


    const handleCouponChange = (event) => {
        const selectedValue = event.target.value;
        const selectedCouponInfo = couponOptions.find((coupon) => coupon.coupon_id === parseInt(selectedValue));

        console.log("선택된 쿠폰", selectedCouponInfo);
        setSelectedCoupon(selectedCouponInfo);
    };


    const calculateTotalPrice = (items) => {
        if (!items || !Array.isArray(items) || items.length === 0) {
            return 0;
        }

        let totalPrice = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i] && items[i].product_price !== undefined && items[i].cart_quan !== undefined) {
                totalPrice += items[i].product_price * items[i].cart_quan;
            }
        }

        return totalPrice;
    };

    let totalPrice = calculateTotalPrice(updatedCheckoutList);
    console.log(totalPrice);



    return (
        pageState && (
            <div>
                <div className="center m_c">
                    <div className="check_box">
                        <section className="check_left">
                            <Title />
                            <Information user_id={loginUser.user_id} />
                            <Item updatedCheckoutList={updatedCheckoutList} />
                            <div className="discount">
                                <h3>할인받기</h3>
                                <table className="discount_table checkout_table">
                                    <tbody>
                                        <tr>
                                            <th>할인 쿠폰</th>
                                            <td>
                                                <select className="checkout_cou" name="coupon_id" id="coupon_id" onChange={handleCouponChange}>
                                                    <option value="0">쿠폰선택</option>
                                                    {couponOptions.map((coupon) => (
                                                        coupon.coupon_end !== "사용완료" && (
                                                            <option key={coupon.coupon_id} value={coupon.coupon_id}>
                                                            {coupon.coupon_name}
                                                        </option>
                                                        )
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Pay />
                            <section className="check_right">
                                <SidePay totalPrice={totalPrice} selectedCoupon={selectedCoupon} updatedCheckoutList={updatedCheckoutList} />
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        )
    );
};

export default Checkout;
