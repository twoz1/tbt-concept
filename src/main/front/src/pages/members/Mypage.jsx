import '../../styles/members/Mypage.css';
import MyOrderList from './components/Mypage/MyOrderList';
import MyCouponList from './components/Mypage/MyCouponList';
import MyWishList from './components/Mypage/MyWishList';
import useScrollToTop from '../customHooks/useScrollToTop';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CouponDownload from './components/Mypage/CouponDownload';
import navigateTo from '../config/navigateTo';
import { Link } from 'react-router-dom';


const Mypage = ({ order }) => {
    useScrollToTop();

    //const loginUser = useSelector((state) => (state));
    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    const [pageState, setPageState] = useState(false);
    console.log(loginUser);

    const [couponList, setCouponList] = useState([]);

    useEffect(() => {

        if (loginUser == null) {
            alert("로그인 후 이용해주세요.");
            navigateTo("/");
        } else {
            setPageState(true);
        }


        axios
            .get('/coupon/cList')
            .then((response) => {
                if (response.data !== null) {
                    setCouponList(response.data);
                }
                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });

        console.log(couponList);
    }, []);

    return (pageState && (
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
                                <span className={loginUser.user_rank}>{loginUser.user_rank}</span>
                            </div>
                            <p>
                                <span><strong>{loginUser.user_name}</strong> 회원님 안녕하세요!</span>
                                <span>정보수정 만들곳 ~임시~</span>
                                <Link to="update">
                                    정보수정
                                </Link>
                            </p>
                        </div>
                        <div className="member_right">
                            {couponList.map((it) => {
                                return (<CouponDownload key={it.coupon_id} {...it} loginUser={loginUser} />)
                            })}

                        </div>
                    </div>
                </div>
                <MyOrderList order={order} />
                <MyCouponList loginUser={loginUser} />
                <MyWishList />
            </div>
        </div >
    ));
}

export default Mypage;