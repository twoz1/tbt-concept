import React from 'react';

const MyCouponItem = ({ startDate,couponTitle,endDate,couponState }) => {
    return (
        <tbody className="MyCouponItem">
            <tr>
                <td>{endDate}</td>
                <td>{couponTitle}</td>
                <td>{startDate}</td>
                <td>{couponState}</td>
            </tr>
        </tbody>
    )
}

export default MyCouponItem;