import '../../../../styles/payments/Compo/modal_2.css';
const CheckModal2 = () => {
    return (
        <div className="modal_1">
            <div class="modal_cover">
                <div class="modal">
                    <table>
                        <tr>
                            <th colspan="4">
                                <a href="../checkout/checkout.html">
                                    <i class="fa-regular fa-x"></i>
                                </a>
                                <h3>개인정보 제3자 제공에 대한 동의&#40;필수&#41;</h3>
                            </th>
                        </tr>

                        <tr>
                            <td>제공받는자</td>
                            <td>제공항목</td>
                            <td>제공받는자의 이용 목적</td>
                            <td>제공받는 자의 보유 및 이용 기간</td>
                        </tr>

                        <tr>
                            <th>TBT 컨셉</th>
                            <td>성명,휴대폰 번호&#44; 상품 구매정보&#44; 배송 주소&#44; 개인통관고유부호&#40;해외 배송 상품에 한해 제공&#41;</td>
                            <th>주문확인 및 배송&#44; 상담 교환 &#47;반품처리</th>
                            <th>이용 목적 달성 후 지체 없이 파기 또는 법정 의무 보유 기간</th>
                        </tr>

                        <tr>
                            <td colspan="4">
                                <p>
                                    &middot; 이용자는 동의를 거부 할 권리가 있습니다&#46; 단&#44; 동의를 거부 할 경우 입점판매업체의 상품 구입이 불가합니다&#46; 또한 동의 완료 후에도 서비시를 원치
                                    않을 경우에는 당사 민원처리센터&#40;1577&#45;1577&#41;를 통해 철회를 요청할 수 있습니다&#46;
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default CheckModal2;
