import { useState, useEffect } from "react";

const Discount = () => {
    const [totalCount, setTotalCount] = useState(81000);
    const [selectedCoupon, setSelectedCoupon] = useState("default");
    
    const couponOptions = [
        { value: "default", label: "쿠폰선택", discount: 0 },
        { value: "welcome", label: "회원가입 감사 10% 할인 쿠폰", discount: 0.9 },
        { value: "summer", label: "s/s기념 10% 할인 쿠폰", discount: 0.9 },
    ];
    
    const handleCouponChange = (event) => {
        const selectedValue = event.target.value;
        const selectedCouponInfo = couponOptions.find(coupon => coupon.value === selectedValue);
        setSelectedCoupon(selectedValue);
        
        if (selectedCouponInfo) {
            // const discountedTotal = totalCount - (totalCount * selectedCouponInfo.discount);
            const discountedTotal = totalCount  * selectedCouponInfo.discount;
            setTotalCount(discountedTotal);
        } else {
            setTotalCount(89000); // Default total count if no coupon is selected
        }
    };
    
    useEffect(() => {
        if (selectedCoupon === "default") {
            setTotalCount(81000);
        }
    }, [selectedCoupon]);

    return (
        <div className="discount">
            <h3>할인받기</h3>
            <table>
                <tbody>
                    <tr>
                        <th>결제 예정금액</th>
                        <td>{totalCount}</td>
                    </tr>
                    <tr>
                        <th>할인 쿠폰</th>
                        <td>
                            <select className="checkout_cou" onChange={handleCouponChange} value={selectedCoupon}>
                                {couponOptions.map(coupon => (
                                    <option key={coupon.value} value={coupon.value}>
                                        {coupon.label}
                                    </option>
                                ))}
                            </select>
                            <span>원</span>
                        </td>
                    </tr>
                    <tr>
                        <th>T Point</th>
                        <td>
                            <input type="text" />
                            <span>P</span>
                            <input type="checkbox" />
                            모두 사용하기
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Discount;
