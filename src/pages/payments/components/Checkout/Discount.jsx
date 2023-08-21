import React, { useState, useEffect } from 'react';

const Discount = ({ price, quantityGoods }) => {
    const [totalCount, setTotalCount] = useState(price * quantityGoods);
    const [selectedCoupon, setSelectedCoupon] = useState("default");

    const couponOptions = [
        { value: 'default', label: '쿠폰선택', discount: 1 },
        { value: 'welcome', label: '회원가입 감사 10% 할인 쿠폰', discount: 0.9 },
        { value: 'summer', label: 's/s기념 10% 할인 쿠폰', discount: 0.9 },
    ];

    const handleCouponChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCoupon(selectedValue);

        const selectedCouponInfo = couponOptions.find(coupon => coupon.value === selectedValue);
        if (selectedCouponInfo) {
            const discountedTotal = price * quantityGoods * selectedCouponInfo.discount;
            setTotalCount(discountedTotal);
        } else {
            setTotalCount(price * quantityGoods); // Default total count if no coupon is selected
        }
    };

    useEffect(() => {
        if (selectedCoupon === "default") {
            setTotalCount(price * quantityGoods);
        }
    }, [selectedCoupon, price, quantityGoods]);

    const prepr = () => {
        return totalCount;
    }

    return (
        <div className="discount">
            <h3>할인받기</h3>
            <table className="discount_table">
                <tbody>
                    <tr>
                        <th>결제 예정금액</th>
                        <td>{prepr()}</td>
                    </tr>
                    <tr>
                        <th>할인 쿠폰</th>
                        <td>
                            <select className="checkout_cou" onChange={handleCouponChange} value={selectedCoupon}>
                                {couponOptions.map((coupon) => (
                                    <option key={coupon.discount} value={coupon.value}>
                                        {coupon.label}
                                    </option>
                                ))}
                            </select>
                            <span>원</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Discount;
