// import React, { useState, useEffect } from 'react';

// const Discount = ({ price, quantityGoods }) => {
//     const [totalCount, setTotalCount] = useState(price * quantityGoods);
//     const [selectedCoupon, setSelectedCoupon] = useState('default');

//     const couponOptions = [
//         { value: 'default', label: '쿠폰선택', discount: 1 },
//         { value: 'welcome', label: '회원가입 감사 10% 할인 쿠폰', discount: 0.9 },
//         { value: 'summer', label: 's/s기념 10% 할인 쿠폰', discount: 0.9 },
//     ];

//     const handleCouponChange = (event) => {
//         const selectedValue = event.target.value;
//         setSelectedCoupon(selectedValue);

//         const selectedCouponInfo = couponOptions.find((coupon) => coupon.value === selectedValue);
//         if (selectedCouponInfo) {
//             const discountedTotal = price * quantityGoods * selectedCouponInfo.discount;
//             setTotalCount(discountedTotal);
//         } else {
//             setTotalCount(price * quantityGoods); // Default total count if no coupon is selected
//         }
//     };

//     useEffect(() => {
//         if (selectedCoupon === 'default') {
//             setTotalCount(price * quantityGoods);
//         }
//     }, [selectedCoupon, price, quantityGoods]);

//     const prePr = () => {
//         return totalCount;
//     };
//     const totalPrice = () => {
//         const totalPrice = price * quantityGoods;
//         return totalPrice;
//     };
//     const disCount = () => {
//         const disCount = totalPrice() * 0.1;
//         return disCount;
//     };
//     console.log(quantityGoods)
//     return (
//         <div className="discount">
//             <h3>할인받기</h3>
//             <table className="discount_table">
//                 <tbody>

//                     <tr>
//                         <th>할인 쿠폰</th>
//                         <td>
//                             <select className="checkout_cou" onChange={handleCouponChange} value={selectedCoupon}>
//                                 {couponOptions.map((coupon) => (
//                                     <option key={coupon.discount} value={coupon.value}>
//                                         {coupon.label}
//                                     </option>
//                                 ))}
//                             </select>
//                             <span className="unit">원</span>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//             <h3>최종 결제 금액</h3>
//             <table className="total_table">
//                 <tbody>
//                     <tr>
//                         <th className="fnPriceTitle" colSpan={2}>
//                             최종 결제금액
//                         </th>
//                     </tr>
//                     <tr>
//                         <th>상품금액</th>
//                         <th className="fnPrice">
//                             {totalPrice().toLocaleString()}
//                             <span className="unit">원</span>
//                         </th>
//                     </tr>
//                     {selectedCoupon !== 'default' && (
//                         <tr>
//                             <th>할인율</th>
//                             <th className="fnPrice">
//                                 {disCount().toLocaleString()}
//                                 <span className="unit">원</span>
//                             </th>
//                         </tr>
//                     )}
//                     <tr>
//                         <th>최종금액</th>
//                         <th className="fnPrice">
//                             {prePr().toLocaleString()}
//                             <span className="unit">원</span>
//                         </th>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Discount;
import { useState, useEffect } from 'react';
const Discount = () => {
    const [totalCount, setTotalCount] = useState(81000);
    const [selectedCoupon, setSelectedCoupon] = useState('default');

    const couponOptions = [
        { value: 'default', label: '쿠폰선택', discount: 0 },
        { value: 'welcome', label: '회원가입 감사 10% 할인 쿠폰', discount: 0.9 },
        { value: 'summer', label: 's/s기념 10% 할인 쿠폰', discount: 0.9 },
    ];

    const handleCouponChange = (event) => {
        const selectedValue = event.target.value;
        const selectedCouponInfo = couponOptions.find((coupon) => coupon.value === selectedValue);
        setSelectedCoupon(selectedValue);

        if (selectedCouponInfo) {
            // const discountedTotal = totalCount - (totalCount * selectedCouponInfo.discount);
            const discountedTotal = totalCount * selectedCouponInfo.discount;
            setTotalCount(discountedTotal);
        } else {
            setTotalCount(89000); // Default total count if no coupon is selected
        }
    };

    useEffect(() => {
        if (selectedCoupon === 'default') {
            setTotalCount(81000);
        }
    }, [selectedCoupon]);
    return (
        <div className="discount">
            ``
            <h3>할인받기</h3>
            <table className="discount_table">
                <tbody>
                    <tr>
                        <th>결제 예정금액</th>
                        <td>{totalCount}</td>
                    </tr>
                    <tr>
                        <th>할인 쿠폰</th>
                        <td>
                            <select className="checkout_cou" onChange={handleCouponChange} value={selectedCoupon}>
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
    );
};
export default Discount;
