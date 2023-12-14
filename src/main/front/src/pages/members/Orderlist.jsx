import '../../styles/members/Orderlist.css';
import { useEffect, useState } from 'react';
import MyOrderItem from './components/Mypage/MyOrderItem';
import useScrollToTop from '../customHooks/useScrollToTop';
import axios from 'axios';

const Orderlist = ({ }) => {
    useScrollToTop();

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

    // order데이터 가져오기
    const [order, setOrder] = useState([]);

    useEffect(() => {

        axios.get('/order/userOrderList?user_id=' + loginUser.user_id)
            .then((response) => {
                if (response.data !== null) {
                    setOrder(response.data);
                }
                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });
    }, [])


    const [btnActive, setBtnActive] = useState("");
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
    const [searchDate, setSearchDate] = useState(false);

    const clickSearch = () => {
        setSearchDate(true);
    }

    const filterDate = () => {
        return order.filter((order) => {
            const orderDate = new Date(order.order_date).toISOString().split('T')[0];
            return orderDate >= startDate && orderDate <= endDate;
        });
    };

    console.log(filterDate());

    const clickBtn = (e) => {
        setBtnActive(e.target.value);
        setSearchDate(false);

        if (e.target.value === "1month") {
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            setStartDate(oneMonthAgo.toISOString().split('T')[0]);
        } else if (e.target.value === "3months") {
            const threeMonthAgo = new Date();
            threeMonthAgo.setMonth(threeMonthAgo.getMonth() - 3);
            setStartDate(threeMonthAgo.toISOString().split('T')[0]);
        } else if (e.target.value === "1year") {
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            setStartDate(oneYearAgo.toISOString().split('T')[0]);
        }
    };

    return (
        <div className="Orderlist cover">
            <div className="center m_c">
                <div className="title_route">
                    <h2>order list</h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>my page</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>order list</li>
                    </ul>
                </div>
                <div className="search_bar">
                    <div className="btn_wrap">
                        <div className="quick">
                            <button onClick={clickBtn} value="1month" className={btnActive === "1month" ? "on" : ""}>최근 1개월</button>
                            <button onClick={clickBtn} value="3months" className={btnActive === "3months" ? "on" : ""}>최근 3개월</button>
                            <button onClick={clickBtn} value="1year" className={btnActive === "1year" ? "on" : ""}>최근 1년</button>
                        </div>
                        <div>
                            <label>
                                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </label>
                            <span> ~ </span>
                            <label>
                                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </label>
                        </div>
                        <button className="date_submit" type="button" onClick={clickSearch}>검색</button>
                    </div>
                </div>
                <table className="ordertable">
                    <thead>
                        <tr>
                            <th scope="col">주문일</th>
                            <th scope="col">주문번호</th>
                            <th scope="col">상품 종류 수량</th>
                            <th scope="col">상품 총 금액</th>
                            <th scope="col">결제 수단</th>
                            <th scope="col">배송 상태</th>
                            <th></th>
                        </tr>
                    </thead>
                    {searchDate && filterDate().map((it) => <MyOrderItem key={it.order_id}{...it} />)}
                </table>
            </div>
        </div>
    );
}

export default Orderlist;