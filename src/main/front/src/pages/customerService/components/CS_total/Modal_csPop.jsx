import '../../../../styles/customerService/CS_total.css';

const Modal_csPop = ({ closeModal }) => {
    return (
        <div>
            <div className="modal_2">
                {/* =====1===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;증빙서류 발급&#93; 현금영수증 발행은 어떻게 신청하나요&#63;</span>
                            <div className="d-flex">
                                <p>현금 결제&#40;실시간 계좌이체&#47;무통장 입금&#41;시 현금 영수증 발행 여부에 체크 하시고,<br />
                                    소득 공제용&#47;지출 증빙용 선택 후 주민번호, 휴대폰번호,<br />
                                    사업자번호를 입력한 후 결제하시면 됩니다.<br />
                                    <br />
                                    결제 시 현금 영수증 발행 여부를 체크하지 않은 경우,<br />
                                    배송 완료 이후 48시간 이내 발급되는 승인 번호, 결제 금액, 결제 일자를<br />
                                    고객님이 직접 국세청으로 자진 발급 신청하실 수 있습니다.<br />
                                    <br />
                                    현금영수증 발행의 경우, 하단의 예외 사항을 확인 부탁드립니다.<br />
                                    <br />
                                    <br />
                                    &#91;예외사항&#93;
                                    <br />
                                    1. 세금계산서는 현금영수증 발급으로 대체하고 있으므로 신청하실 수 없습니다.<br />
                                    <br />
                                    2. 결제완료 후에는 현금영수증 신청번호를 변경 할 수 없습니다.<br />
                                    <br />
                                    관련 문의사항은 1&#58;1상담이나 또는,<br />
                                    고객센터로 문의해 주시면 상세히 안내해 드리도록 하겠습니다.<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues01')}>닫기</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>//최종div
    );
};

export default Modal_csPop;