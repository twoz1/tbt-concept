import { useState, useEffect } from 'react';
import MyCouponItem from './MyCouponItem';
import axios from 'axios';

const MyCouponList = ({ loginUser }) => {

  const [coupon, setCoupon] = useState([]);

  useEffect(() => {
    axios
      .get('/coupon/cUserList', { user_id: loginUser.user_id })
      .then(response => {
        setCoupon(response.data);

        console.log(response.data);
      }).catch((err) => {
        alert(`** checkdata 서버연결 실패 => ${err.message}`);
      });

  }, []);

  console.log("유저아이디 : " + loginUser.user_id);


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
          {coupon.map((it) => {
            return (<MyCouponItem key={it.id}{...it}
            />)
          })}
        </table>
      </div>
    </div>
  )
}

export default MyCouponList;
