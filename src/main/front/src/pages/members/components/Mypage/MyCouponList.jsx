import { useState, useEffect } from 'react';
import MyCouponItem from './MyCouponItem';
import axios from 'axios';

const MyCouponList = ({ loginUser }) => {

  const [coupon, setCoupon] = useState([]);

  useEffect(() => {
    axios
      .get('/coupon/cUserList', { params: { user_id: loginUser.user_id } })
      .then(response => {
        if (response.data != null) {
          setCoupon(response.data);
        }
      }).catch((err) => {
        alert(`** checkdata 서버연결 실패 => ${err.message}`);
      });

  }, []);

  return (
    <div className="MycouponList">
      <div className="couponlist cover">
        <h3>보유중인 쿠폰</h3>
        <table>
          <thead>
            <tr>
              <th scope="col">발급일자</th>
              <th scope="col">쿠폰명</th>
              <th scope="col">할인율</th>
              <th scope="col">유효기간</th>
            </tr>
          </thead>
          {coupon.map((c) => {

            return (<MyCouponItem key={c[0]}
              couponName={c[1]}
              couponDisc={c[2]}
              couponStart={c[4]}
              couponEnd={c[5]}
            />)
          })}
        </table>
      </div>
    </div>
  )
}

export default MyCouponList;
