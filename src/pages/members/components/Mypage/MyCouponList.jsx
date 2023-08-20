import { useState } from 'react';
import MyCouponItem from './MyCouponItem';

const couponList = [
  {
    id: 0,
    startDate: "2023-01-01",
    couponTitle: "회원가입 감사 10% 할인 쿠폰",
    endDate: "2023-01-31",
    couponState: "사용가능"
  },
  {
    id: 0,
    startDate: "2023-01-01",
    couponTitle: "s/s기념 10% 할인 쿠폰",
    endDate: "2023-01-31",
    couponState: "사용가능"
  },

]

const MyCouponList = () => {

  const [coupon, setCoupon] = useState(couponList);

  return (
    <div className="MycouponList">
      <div className="couponlist cover">
        <h3>보유중인 쿠폰</h3>
        <table>
          <thead>
            <tr>
              <th scope="col">발급일자</th>
              <th scope="col">쿠폰명</th>
              <th scope="col">유효기간</th>
              <th scope="col">상태</th>
            </tr>
          </thead>
          {coupon.map((it) => { return (<MyCouponItem key={it.id}{...it}
          />) })}
        </table>
      </div>
    </div>
  )
}

export default MyCouponList;
