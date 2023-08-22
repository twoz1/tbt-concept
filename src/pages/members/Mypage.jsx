import '../../styles/members/Mypage.css';
import MyOrderList from './components/Mypage/MyOrderList';
import MyCouponList from './components/Mypage/MyCouponList';
import MyWishList from './components/Mypage/MyWishList';
import useScrollToTop from '../customHooks/useScrollToTop';


const Mypage = ({ order }) => {
    useScrollToTop();
    return (
        <div className="Mypage">
            <div className="center m_c">
                <div className="title_route">
                    <h2>my page</h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>my page</li>
                    </ul>
                </div>
                <div className="member_cover cover">
                    <h3>회원 정보</h3>
                    <div className="member_box">
                        <div className="member_left">
                            <div className="round">
                                <span>회원 등급</span>
                            </div>
                            <p>
                                <span><strong>최고조</strong> 회원님 안녕하세요!</span>
                                <span>현재 주문건수 2건으로 땡땡 등급입니다.</span>
                            </p>
                        </div>
                        <div className="member_right">
                            <div className="coupon">
                                <p>
                                    회원가입 감사<br /><strong>10%</strong> <span>할인쿠폰</span><br /><a href="#">다운로드 <i
                                        className="fa-solid fa-download"></i></a>
                                </p>
                            </div>
                            <div className="coupon">
                                <p>
                                    spring / summer기념<br /><strong>10%</strong> <span>할인쿠폰</span><br /><a href="#">다운로드 <i
                                        className="fa-solid fa-download"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <MyOrderList order={order} />
                <MyCouponList />
                <MyWishList />
            </div>
        </div>
    );
}

export default Mypage;