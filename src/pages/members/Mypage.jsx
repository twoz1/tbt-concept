import '../../styles/members/Mypage.css';

const Mypage = () => {

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
                <div className="orderlist cover">
                    <div className="order_title">
                        <h3>최근 주문 내역</h3>
                        <span><a href="../orderlist/orderlist.html">MORE<i className="fa-sharp fa-small fa-plus"></i></a></span>
                    </div>
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
                                <th></th>
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
                        </tbody>
                    </table>
                </div>
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
                            <tr>
                                <td>2023-01-01</td>
                                <td>회원가입 감사 10% 할인 쿠폰</td>
                                <td>2023-01-31</td>
                                <td>사용가능</td>
                            </tr>
                            <tr>
                                <td>2023-01-01</td>
                                <td>s/s기념 10% 할인 쿠폰</td>
                                <td>2023-01-31</td>
                                <td>사용가능</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="wishlist cover">
                    <h3>관심 상품</h3>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">관심등록일</th>
                                <th scope="col">상품명</th>
                                <th scope="col">옵션</th>
                                <th scope="col">상태</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023-01-01</td>
                                <td>
                                    <a href="#" className="product">
                                        <strong>tbt N-01</strong>
                                        <p>sunglass N-01 시리즈 black,white,navy</p>
                                    </a>
                                </td>
                                <td>Black</td>
                                <td><a href="#"><i className="fa-sharp fa-solid fa-heart"></i></a></td>
                                <td><a href="#">장바구니에 담기&gt;</a></td>
                            </tr>
                            <tr>
                                <td>2023-01-01</td>
                                <td>
                                    <a href="#" className="product">
                                        <strong>tbt N-01</strong>
                                        <p>sunglass N-01 시리즈 black,white,navy</p>
                                    </a>
                                </td>
                                <td>Black</td>
                                <td><a href="#"><i className="fa-sharp fa-solid fa-heart"></i></a></td>
                                <td><a href="#">장바구니에 담기&gt;</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Mypage;