import React from 'react';

const MyCouponItem = ({ couponName, couponDisc, couponStart, couponEnd }) => {
    return (
        <tbody className="MyCouponItem">
            <tr>
                <td>{couponStart}</td>
                <td>{couponName} 쿠폰</td>
                <td>{couponDisc}%</td>
                <td>{couponEnd}</td>
            </tr>
        </tbody>
    )
}

export default MyCouponItem;