import React from 'react';
import '../../styles/members/OrderModal.css';

const OrderModal = ({ closeModal }) => {
    return (
        <div>
            <div className="modal_cover">
                <div className="modal_order">
                    <div><h4>주문자 정보</h4>
                        <table>
                            <tr>
                                <th scope="row">주문번호</th>
                                <td>20230101S210</td>
                                <th scope="row">주문일자</th>
                                <td>2023-01-01</td>
                            </tr>
                            <tr>
                                <th scope="row">주문자</th>
                                <td>최고조</td>
                                <th scope="row">입금현황</th>
                                <td>입금완료</td>
                            </tr>
                        </table></div>

                    <div>
                        <h4>배송지 정보</h4>
                        <table>
                            <tr>
                                <th scope="row">수취인명</th>
                                <td>최고조</td>
                                <th>수취인 연락처</th>
                                <td scope="row">010-1234-1234</td>
                            </tr>
                            <tr>
                                <th scope="row">주소</th>
                                <td colspan="3">경기도 성남시 수정구 구미동</td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <h4>상품 정보</h4>
                        <table>
                            <tr>
                                <th scope="col">상품명</th>
                                <th scope="col">옵션</th>
                                <th scope="col">수량</th>
                                <th scope="col">금액</th>
                            </tr>
                            <tr>
                                <td>antonCrystal</td>
                                <td>black</td>
                                <td>1</td>
                                <td>100,000원</td>
                            </tr>
                            <tr>
                                <td>antonCrystal</td>
                                <td>black</td>
                                <td>1</td>
                                <td>100,000원</td>
                            </tr>
                            <tr>
                                <td colspan="4" className="total">상품금액 <strong>200,000원</strong> + 배송비 <strong>0원</strong> =
                                    <strong className="strPoint"> 200,000원</strong>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <h4>배송 현황</h4>
                        <table>
                            <tr>
                                <th>배송사</th>
                                <td>CJ대한통운</td>
                                <th>송장번호</th>
                                <td>1234567890</td>
                            </tr>
                        </table>
                    </div>

                    <div className="Modal_btn">
                        <button onClick={() => window.open("https://www.cjlogistics.com/ko/tool/parcel/tracking", '_blank')}>베송조회</button>
                        <button className="close" onClick={() => closeModal('delivery')}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderModal;