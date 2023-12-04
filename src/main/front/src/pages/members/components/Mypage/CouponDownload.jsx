import React from 'react';
import axios from 'axios';

const CouponDownload = ({ coupon_id, coupon_name, coupon_disc, loginUser }) => {

    const clickDownCoupon = (e) => {
        e.preventDefault();

        console.log("쿠폰" + coupon_id + "로그인유저" + loginUser.user_id);

        axios
            .post('/coupon/cInsert', {
                coupon_id: coupon_id,
                user_id: loginUser.user_id,
                coupon_start: new Date().toLocaleSt
                coupon_end: new Date().setFullYear(new Date().getFullYearring(), () + 1),
            })
            .then((response) => {
                console.log(response.data);
                if (response.data > 0) {
                    alert("쿠폰 발급이 완료되었습니다.");
                } else {
                    alert("쿠폰 발급에 실패했습니다.");
                }

                console.log(`** checkdata222 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata222 서버연결 실패 => ${err.message}`);
            });

    }

    return (
        <div className="coupon">
            <p>
                {coupon_name}<br /><strong>{coupon_disc}%</strong> <span>할인쿠폰</span><br /><button type="submit" onClick={e => { clickDownCoupon(e) }}>다운로드 <i
                    className="fa-solid fa-download"></i></button>
            </p>
        </div>
    )
}

export default CouponDownload;