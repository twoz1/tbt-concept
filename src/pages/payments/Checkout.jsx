import '../../styles/payments/Checkout.css';

const Checkout = () => {
    return (
        <div>
            <div className="center m_c">
                <section className="check_left">
                    <div className="title_route">
                        <h2>
                            <strong>NEW</strong>
                        </h2>
                        <ul>
                            <li>쇼핑백</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>주문결제</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>주문왼료</li>
                        </ul>
                    </div>

                    <form action="#">
                        <div className="information">
                            <div className="checkout">
                                <h3>배송지 정보</h3>
                                <p>
                                    <span className="color">&#42;</span>필수항목
                                </p>
                            </div>

                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            {/* <th style="width:150px;"> */}
                                            배송지 선택 <span>&#42;</span>
                                        </th>
                                        <td className="address">
                                            <span>
                                                <input type="radio" checked required />
                                                기본주소
                                            </span>
                                            <span>
                                                <input type="radio" />
                                                최근 배송지
                                            </span>
                                            <span>
                                                <input type="radio" />
                                                새로 입력
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            받으시는 분 <span>&#42;</span>
                                        </th>
                                        <td className="receiver">
                                            <input type="text" name="receiver_name" id="receiver_name_read" placeholder="최*조" required />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            휴대폰 번호 <span>&#42;</span>
                                        </th>
                                        <td className="receiver_phone">
                                            <select name="receiver_phone" id="receiver_phone_read">
                                                <option value="010">010</option>
                                                <option value="011">011</option>
                                                <option value="070">070</option>
                                            </select>{' '}
                                            -
                                            <input type="text" minlength="3" maxlength="4" /> -
                                            <input type="text" minlength="4" maxlength="4" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            배송 주소 <span>&#42;</span>
                                        </th>
                                        <td className="customer_address">
                                            <input type="text" minlength="7" />
                                            <p>
                                                <input type="text" placeholder="상세주소를 입력해주세요" />
                                                <input type="text" />
                                                {/* <input type="text" style="margin-left: 5px;" /> */}
                                            </p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>배송 메시지</th>
                                        <td className="message">
                                            {' '}
                                            <input type="text" placeholder="메세지를 입력하세요." />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="item">
                            <h3>주문상품</h3>

                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <th>상품정보</th>
                                        <th>수량</th>
                                        <th>가격</th>
                                        <th>총 상품 금액</th>
                                        <th>배송비</th>
                                    </tr>

                                    <tr>
                                        <td>
                                            {/* <td style="width:20px;"> */}
                                            <input type="checkbox" />
                                        </td>
                                        <th className="item_img">
                                            {/* <img src={require('../../images/sunglass_1.jpeg')} alt="glass_1" /> */}
                                            <div className="item_name">
                                                <span>ETTY black</span>
                                            </div>
                                        </th>
                                        <td>1</td>
                                        <td>89&#46;000</td>
                                        <td>89&#46;000</td>
                                        <td>무료</td>
                                    </tr>

                                    <tr>
                                        <td colspan="6">
                                            <span>&#42;</span>제주&#47;도서산간 지역의 경우 추가 배송비가 발생할 수 있습니다.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="discount">
                            <h3>할인받기</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>결제 예정금액</th>
                                        {/* <th style="width:150px;">결제 예정금액</th> */}
                                        <td>89&#46;000</td>
                                    </tr>
                                    <tr>
                                        <th>할인 쿠폰</th>
                                        <td>
                                            <input type="text" placeholder="쿠폰을 사용해보세요." />
                                            <span>원</span>
                                            <a href="./modal/modal_3.html">쿠폰사용조회하기</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>T Ponit</th>
                                        <td>
                                            <input type="text" />
                                            <span>P</span>
                                            <input type="checkbox" />
                                            모두사용하기
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="pay">
                            <h3>결제수단</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th colspan="1">
                                            <input type="radio" />
                                            <span>일반결제</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colspan="1">
                                            <a href="#">신용카드</a>
                                            <a href="#">간편결제</a>
                                            <a href="#">휴대폰결제</a>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <select name="pay_select" id="pay_select_read">
                                                <option value="difault">카드선택</option>
                                                <option value="신한">신한카드</option>
                                                <option value="농협">농협카드</option>
                                                <option value="국민">국민카드</option>
                                                <option value="삼성">삼성카드</option>
                                            </select>
                                            <select name="pay_month_select" id="pay_month_select_read">
                                                <option value="difault">할부선택</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>
                                                {' '}
                                                &#45;할부 최소 금액은 5만원이며 30만원 이상 결제 시에 카드사에 따라 공인인증 사용이 요구될 수 있습니다&#46;
                                                <br />
                                                &#45;청구할인은 카드사에서 제공하며&#184;결제대금의 청구 시점에 차감 청구되는 할인 방식입니다&#46;
                                                <br />
                                                &#45;수협&#184;광주&#184;전북JB&#184;MG 새마을&#184;우체국&#184;저축은행&#184;산업&#184;제주&#184;신협&#184;현대증권카드는 사용할 수 없습니다.
                                            </p>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </section>
                <section className="check_right">
                    <div className="side_pay side_pay1">
                        <h3>최종결제금액</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>총삼품금액</th>
                                    <td>89&#46;000</td>
                                </tr>
                                <tr>
                                    <th>배송비</th>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>할인쿠폰</th>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>T Point</th>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="side_pay side_pay2">
                        <form action="#">
                            <table>
                                <tbody>
                                    <tr>
                                        <th colspan="1">
                                            <input type="checkbox" />
                                            <span>
                                                주문 정보를 확인하였으며&#184;
                                                <br /> 약관 전체에 동의합니다&#46;
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colspan="1">
                                            <input type="checkbox" />
                                            <span>
                                                주문 상품정보에 동의&#40;필수&#41;<a href="./modal/modal_1.html">내용보기</a>
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colspan="1">
                                            <input type="checkbox" />
                                            <span>
                                                결제대행서비스 이용을 위한 <br />
                                                개인정보 제3자 제공 및 위탁 동의&#40;필수&#41;<a href="./modal/modal_2.html">내용보기</a>
                                            </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colspan="1">
                                            <input type="checkbox" />
                                            <span>개인정보 제3자 제공에 대한 동의&#40;필수&#41;</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                            <button>결제하기</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Checkout;
