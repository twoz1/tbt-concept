import '../../styles/payments/css/Basket.css';

const Basket = () => {
    return (
        <div>
            <div className="center m_c">
                <div className="basket_total">
                    <div className="title_route">
                        <h2><strong>SHOPPING BAG</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>SHOPPING BAG</li>
                        </ul>
                    </div>

                    <div className="basket_box">
                        <form action="#">
                            <div className="d_flex">
                                <figure className="basket_table">
                                    <h3>쇼핑백 상품</h3>

                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
                                                <th>상품 정보</th>
                                                <th>수량</th>
                                                <th>상품 가격</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <th><input type="checkbox" name="goods" /></th>

                                                <td className="goods_name">
                                                    <div><a href="../detailed_page/detaied_page.html"><img src="../basket/img/sunglass2.jpg" alt="상품사진" /></a></div>
                                                    <a href="../detailed_page/detaied_page.html">EVA crystal&#45;violet tint</a>
                                                </td>

                                                <td className="goods_quantity">
                                                    <select name="quantity">
                                                        <option value="수량" selected>수량</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </td>
                                                <td className="goods_price">165,000원</td>
                                            </tr>

                                            <tr>
                                                <th><input type="checkbox" name="goods" /></th>

                                                <td className="goods_name">
                                                    <div><a href="../detailed_page/detailed_page_glass.html"><img src="../basket/img/glass1.jpg" alt="상품사진" /></a></div>
                                                    <a href="../detailed_page/detailed_page_glass.html">EVA crystal</a>
                                                </td>

                                                <td className="goods_quantity">
                                                    <select name="quantity">
                                                        <option value="수량" selected>수량</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </td>
                                                <td className="goods_price">89,000원</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </figure>

                                <div className="basket_payment">
                                    <h3>주문 금액</h3>
                                    <hr />

                                    <ul>
                                        <li>
                                            <strong>총 상품 금액</strong>
                                            <p>
                                                254,000 원
                                            </p>
                                        </li>

                                        <li>
                                            <strong>배송비</strong>
                                            <p>
                                                0 원
                                            </p>
                                        </li>
                                    </ul>

                                    <button type="button">선택상품 주문하기</button>
                                </div>
                            </div>

                            <div className="btn_bottom">
                                <button type="button">선택상품삭제</button>
                                <button type="button">쇼핑계속하기</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>//최종div
    );
};

export default Basket;
