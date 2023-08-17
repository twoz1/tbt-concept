import '../../../../styles/payments/Compo/modal_1.css'
const CheckModal1 = () => {
    return (
        <div className="modal_1">
            <div className="modal_cover">
                <div className="modal">
                    <table>
                        <tr>
                            <th>
                                <a href="../checkout/checkout.html">
                                    <i className="fa-regular fa-x"></i>
                                </a>
                                <h3>결제대행서비스 이용에 따른 개인정보 제3자 제공 동의</h3>
                            </th>
                        </tr>

                        <tr>
                            <td>1.회사의 서비스 이행을 위해 개인정보를 제3자에게 제공하는 경우는 다음과 같습니다&#46;</td>
                        </tr>
                        <tr>
                            <td>
                                <span>&#42;제공받는자&#47;목적&#58;&nbsp;TBT컨셉 &#47; 신용카드 결제, 계좌이체 결제, 가상계좌 결제&#44; &#42;제공정보&#58;거래정보</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>&#42;제공받는자&#47;목적&#58;&nbsp;다날 &#47; 휴대폰결제 &#42;제공정보&#58;거래정보</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>&#42;제공받는자&#47;목적&#58;&nbsp;네이버파이낸셜&#40;주&#41; &#47; 네이버페이 결제 &#42; 제공정보&#58;거래정보</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>&#42;제공받는자&#47;목적&#58;&nbsp;&#40;주&#41;엔에이치엔페이코 &#47; PAYCO 결제 &#42;제공정보&#58;거래정보</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>
                                    <a href="../checkout/checkout.html">확인</a>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CheckModal1;
