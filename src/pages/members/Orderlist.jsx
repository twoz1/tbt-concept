import '../../styles/members/Orderlist.css';

const Orderlist = () => {
    return(
        <div className="Orderlist">
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
                        <button className="on">최근 1개월</button>
                        <button>최근 3개월</button>
                        <button>최근 1년</button>
                    </div>
                    <div>
                        <label>
                            <input type="date"/>
                        </label>
                        <label> ~
                            <input type="date"/>
                        </label>
                    </div>
                    <button className="date_submit" type="submit">검색</button>
                </form>
            </div>
            <div className="orderlist">
                <table>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023-01-01</td>
                            <td>20230101S210</td>
                            <td>
                                <a href="#" className="product">
                                    <strong>tbt N-01</strong>
                                    <p>sunglass N-01 시리즈 black,white,navy</p>
                                </a>
                            </td>
                            <td>Black</td>
                            <td>1</td>
                            <td>100,000원</td>
                            <td>
                                <p className="delivery_text">배송중</p>
                                <p className="delivery"><a href="#">배송조회</a></p>
                            </td>
                            <td><a href="#" className="review">작성하기</a></td>
                            <td><a href="#">더보기&gt;</a></td>
                        </tr>
                        <tr>
                            <td>2023-01-01</td>
                            <td>20230101S210</td>
                            <td>
                                <a href="#" className="product">
                                    <strong>tbt N-01</strong>
                                    <p>sunglass N-01 시리즈 black,white,navy</p>
                                </a>
                            </td>
                            <td>Black</td>
                            <td>1</td>
                            <td>100,000원</td>
                            <td>
                                <p className="delivery_text">배송완료</p>
                            </td>
                            <td><a href="#" className="review">작성하기</a></td>
                            <td><a href="#">더보기&gt;</a></td>
                        </tr>
                        <tr>
                            <td>2023-01-01</td>
                            <td>20230101S210</td>
                            <td>
                                <a href="#" className="product">
                                    <strong>tbt N-01</strong>
                                    <p>sunglass N-01 시리즈 black,white,navy</p>
                                </a>
                            </td>
                            <td>Black</td>
                            <td>1</td>
                            <td>100,000원</td>
                            <td>
                                <p className="delivery_text">배송완료</p>
                            </td>
                            <td><a href="#" className="review">작성하기</a></td>
                            <td><a href="#">더보기&gt;</a></td>
                        </tr>
                        <tr>
                            <td>2023-01-01</td>
                            <td>20230101S210</td>
                            <td>
                                <a href="#" className="product">
                                    <strong>tbt N-01</strong>
                                    <p>sunglass N-01 시리즈 black,white,navy</p>
                                </a>
                            </td>
                            <td>Black</td>
                            <td>1</td>
                            <td>100,000원</td>
                            <td>
                                <p className="delivery_text">배송완료</p>
                            </td>
                            <td><a>작성완료</a></td>
                            <td><a href="#">더보기&gt;</a></td>
                        </tr>
                        <tr>
                            <td>2023-01-01</td>
                            <td>20230101S210</td>
                            <td>
                                <a href="#" className="product">
                                    <strong>tbt N-01</strong>
                                    <p>sunglass N-01 시리즈 black,white,navy</p>
                                </a>
                            </td>
                            <td>Black</td>
                            <td>1</td>
                            <td>100,000원</td>
                            <td>
                                <p className="delivery_text">배송완료</p>
                            </td>
                            <td><a>작성완료</a></td>
                            <td><a href="#">더보기&gt;</a></td>
                        </tr>
                        <tr>
                            <td>2023-01-01</td>
                            <td>20230101S210</td>
                            <td>
                                <a href="#" className="product">
                                    <strong>tbt N-01</strong>
                                    <p>sunglass N-01 시리즈 black,white,navy</p>
                                </a>
                            </td>
                            <td>Black</td>
                            <td>1</td>
                            <td>100,000원</td>
                            <td>
                                <p className="delivery_text">배송완료</p>
                            </td>
                            <td><a>작성완료</a></td>
                            <td><a href="#">더보기&gt;</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Orderlist;