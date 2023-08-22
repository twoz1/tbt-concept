import React, { useState } from 'react';

const Pay = () => {
    return (
        <div className="pay">
            <h3>결제수단</h3>
            <table className='pay_table'>
                <tbody>
                    <tr>
                        <th colSpan="1">
                            <input type="radio"  checked/>
                            <span>일반결제</span>
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="1">
                            <a href="#">신용카드</a>
                            <a href="#">간편결제</a>
                            <a href="#">휴대폰결제</a>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <select name="pay_select" id="pay_select_read">
                                <option value="default">카드선택</option>
                                <option value="신한">신한카드</option>
                                <option value="농협">농협카드</option>
                                <option value="국민">국민카드</option>
                                <option value="삼성">삼성카드</option>
                            </select>
                            <select name="pay_month_select" id="pay_month_select_read">
                                <option value="default">할부선택</option>
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
    );
};

export default Pay;
