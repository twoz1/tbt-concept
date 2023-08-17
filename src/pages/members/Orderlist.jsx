import '../../styles/members/Orderlist.css';
import { useState } from 'react';
import MyOrderItem from './MyOrderItem';

const Orderlist = ({ order }) => {
    const [btnActive, setBtnActive] = useState("");
    const clickBtn = (e) => {
        setBtnActive(e.target.value);

    }
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
                    <form action="#">
                        <div className="quick">
                            <button onClick={clickBtn} value="1month" className={btnActive === "1month" ? "on" : ""}>최근 1개월</button>
                            <button onClick={clickBtn} value="3months" className={btnActive === "3months" ? "on" : ""}>최근 3개월</button>
                            <button onClick={clickBtn} value="1year" className={btnActive === "1year" ? "on" : ""}>최근 1년</button>
                        </div>
                        <div>
                            <label>
                                <input type="date" />
                            </label>
                            <span> ~ </span>
                            <label>
                                <input type="date" />
                            </label>
                        </div>
                        <button className="date_submit" type="submit">검색</button>
                    </form>
                </div>
                <table className="ordertable">
                    <thead>
                        <tr>
                            <th scope="col">주문일</th>
                            <th scope="col">주문번호</th>
                            <th scope="col">상품정보</th>
                            <th scope="col">옵션</th>
                            <th scope="col">수량</th>
                            <th scope="col">상품금액</th>
                            <th scope="col">주문상황</th>
                            <th scope="col">리뷰</th>
                            <th></th>
                        </tr>
                    </thead>
                    {order.map((it) => { return (<MyOrderItem key={it.id}{...it} />) })}
                </table>
            </div>
        </div>
    );
}

export default Orderlist;