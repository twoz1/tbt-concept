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

                {/* =====2===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;취소&#93; 주문을 취소하고 싶어요.</span>
                            <div className="d-flex">
                                <p>주문취소는 주문내역에서 &#91;결제완료&#93; 상태로 확인될 경우,<br />
                                    고객님께서 MY PAGE에서 직접 취소를 하실 수 있습니다.<br />
                                    <br />
                                    다만, &#91;상품준비중&#93; 상태에서 취소요청을 접수하실 경우,<br />
                                    업체 측에서 취소 가능 여부를 확인 후 처리하기에 시간이 소요되며<br />
                                    이미 출고가 되었다면 부득이 상품 수령 후 반품 접수를 해주셔야 되는 점 양해 부탁드립니다.<br />
                                    <br />
                                    주문내역에서 &#91;배송중&#93; 상태로 확인된다면 상품이 출고되어 취소가 어려워 상품 수령 후,<br />
                                    교환&#47;반품으로 접수 및 반품 비용은 고객님께서 부담해주셔야 됩니다.<br />
                                    <br />
                                    &#91;주문취소 접수 방법&#93;<br />
                                    주문상태 &#58; &#91; 결제완료 & 상품준비중 &#93;<br />
                                    &#45; MY PAGE &#62; 주문&#47;배송조회 &#62; 상세보기 &#62; &#34;주문 취소&#34; 버튼 클릭<br />
                                    <br />
                                    &#91;취소완료 확인 방법&#93;<br />
                                    &#45; MY PAGE &#62; 취소&#47;교환&#47;반품 조회 &#62; &#34;주문번호&#34; 버튼 클릭<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues02')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====3===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;포인트&#93; 상품 구매 후 POINT는 언제 적립되나요&#63;</span>
                            <div className="d-flex">
                                <p>
                                    상품 구매로 인한 포인트 적립은 배송 완료일 기준 익일부터 7일 차에 자동 적립되며,<br />
                                    <br />
                                    사용 기한은 지급일로부터 1년입니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    단, 교환이나 반품을 신청하신 경우 포인트 적립은 자동 취소되며<br />
                                    <br />
                                    교환의 경우 상품 배송 완료 시점부터 8일 후 자동 재적립됩니다.<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues03')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====4===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;배송&#93; 배송지가 검색되지 않아요.</span>
                            <div className="d-flex">
                                <p>주소록 검색은 &#91;행정안전부 주소 찾기&#93; 사이트에 등록된 정보를 기반으로 설정되어 있습니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    만약, 신축 건물인 경우 행정안전부에 주소가 등록되어 있지 않을 수 있으며, <br />
                                    <br />
                                    이 경우 tbt concept 사이트에서는 검색이 안될 수 있습니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    주소 사이트에 배송지의 주소가 등록되어 있음에도 tbt concept에서 검색이 되지 않는 경우,<br />
                                    <br />
                                    &#91;MY PAGE &#62; 1&#58;1 문의하기&#93; 또는, tbt concept 고객센터 1566&#45;5027로 문의 부탁드립니다.<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues04')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====5===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;교환&#47;반품&#93; 교환&#47;반품 불가한 이유가 뭔가요&#63;</span>
                            <div className="d-flex">
                                <p>기본적으로 상품 수령 후 익일로부터 7일 이내 접수 가능하지만,<br />
                                    <br />
                                    하단의 유의사항에 해당될 경우 교환&#47;반품이 불가할 수 있으니 확인 부탁드립니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    &#91;유의사항&#93;<br />
                                    <br />
                                    1&#41; 제품의 외부 착용 및 실사용 또는 훼손한 경우<br />
                                    <br />
                                    2&#41; 사은품 누락, 상품 TAG, 보증서, 상품 부자재가 제거 혹은 분실된 경우<br />
                                    <br />
                                    3&#41; 밀봉 포장을 개봉했거나 내부 포장재를 훼손 또는 분실한 경우<br />
                                    <br />
                                    4&#41; 시간이 경과되어 재판매가 어려울 정도로 상품 가치가 상실된 경우<br />
                                    <br />
                                    5&#41; 고객님의 요청에 따라 주문 제작되어 고객님 외에 사용이 어려운 경우<br />
                                    <br />
                                    6&#41; 배송된 상품이 설치가 완료된 경우&#41;가전, 가구 등&#41;<br />
                                    <br />
                                    7&#41; 기타 전자 상거래 등에서의 소비자 보호에 관한 법률이 정하는 청약 철회 제한 사유에 해당할 때<br />
                                    <br />
                                    8&#41; 신선&#47;냉동식품 관련 교환&#47;반품 불가<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues05')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====6===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;상품평&#93; 리뷰 작성으로 적립되는 POINT는 어떻게 되나요&#63;</span>
                            <div className="d-flex">
                                <p>
                                    리뷰 작성 시, 일반 후기는 500 POINT, 포토 후기는 1,000 POINT, 동영상 후기는 1,500 POINT가<br />
                                    자동 지급됩니다.<br />
                                    <br />
                                    동영상 리뷰는 검수 과정을 거쳐 리뷰 운영 정책에 적합할 경우<br />
                                    노출 처리되고 검수는 영업일 기준으로<br />
                                    약 3&#126;5일 이내 소요되고 동영상 노출 시 포인트는 자동 적립 됩니다.<br />
                                    <br />
                                    <br />
                                    동영상 리뷰 검수 중 부적절한 동영상은 노출 제외 처리 됩니다.<br />
                                    해당 리뷰에 사진이 첨부된 경우는 사진리뷰의 포인트가 적립되고,<br />
                                    사진이 첨부되어 있지 않은 경우는 일반리뷰의 포인트가 적립됩니다.<br />
                                    <br />
                                    <br />
                                    그 외 추가로 적립되는 포인트의 종류는 다음과 같습니다.<br />
                                    <br />
                                    <br />
                                    &#42; 상품별 최초 리뷰 작성 1,000 POINT 지급<br />
                                    <br />
                                    &#42; 나의 첫 리뷰 작성 3,000 POINT 지급<br />
                                    <br />
                                    &#42; 베스트 리뷰 선정 3,000 POINT 지급<br />
                                    <br />
                                    &#42; 프리미엄 리뷰 선정 20,000 POINT 지급<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues06')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====7===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;배송&#93; 베스트 &#38; 프리미엄 리뷰 POINT는 어떻게 되나요?</span>
                            <div className="d-flex">
                                <p>베스트 및 프리미엄 리뷰는 아래 기준에 의해 선정됩니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    &#91;공통사항&#93;<br />
                                    <br />
                                    작성해 주신 리뷰는 상대 평가로 검토 후 선정합니다.<br />
                                    <br />
                                    내용의 유 의미성을 기준으로 선정하며, 이미지의 경우 착용 컷, 제품 디테일 컷 등<br />
                                    <br />
                                    여러 장의 다양한 촬영 이미지를 첨부한 경우 선정 대상에 유리합니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    &#91;베스트 리뷰&#93;<br />
                                    <br />
                                    &bigodot; 지급 POINT &#58; 3,000P<br />
                                    <br />
                                    &bigodot; 글자 및 이미지 개수 &#58; 300자 이상&#47; 1장 이상<br />
                                    <br />
                                    &bigodot; 선정 및 지급 &#58; 매주 1회 선정, 해당 주의 금요일에 포인트 지급<br />
                                    <br />
                                    <br />
                                    <br />
                                    &#91;프리미엄 리뷰&#93;<br />
                                    <br />
                                    &bigodot; 지급 POINT &#58; 20,000P<br />
                                    <br />
                                    &bigodot; 글자 및 이미지 개수 &#58; 800자 이상&#47; 2장 이상<br />
                                    <br />
                                    &bigodot; 선정 및 지급 &#58; 2주 마다 1회 선정, 해당 주 금요일에 포인트 지급<br />
                                    <br />
                                    <br />
                                    <br />
                                    &#91;참고사항&#93;<br />
                                    <br />
                                    최초 등록된 내용을 기반으로 베스트 및 프리미엄 리뷰를 선정하여 지급하고 있습니다.<br />
                                    <br />
                                    등록 이후, 내용 및 이미지 등 수정된 사항은 반영하지 않으니<br />
                                    <br />
                                    이 점 참고하여 꼭 최초 등록 시 고객님들의 솔직한 후기 작성 부탁드립니다.<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues07')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====8===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;배송&#93; 여러 개 상품을 주문했는데 배송 택배비가 상품마다 발생되나요&#63;</span>
                            <div className="d-flex">
                                <p>
                                    tbt concept은 온라인 편집샵으로 여러 파트너사가 입점하여 판매를 진행하고 있습니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    상품 주문 결제 시, 각 브랜드 별 상품 준비 및 출고를 진행하므로<br />
                                    <br />
                                    개별 배송이 진행되오니 참고 부탁드립니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    이에 따라, 택배비도 각 파트너사 별 정책에 따라 비용이 부과되고 있으며<br />
                                    <br />
                                    배송비 조건은 상품 페이지 내 상품 요약 정보를 통해 확인이 가능합니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    배송 택배비 관련하여 상세한 안내가 필요하시면 고객센터 1566&#45;5027로 문의 부탁드립니다.<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues08')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====9===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;교환&#47;반품&#93; 교환 접수 시, 동일한 사이즈로 접수가 된 것 같은데 확인이 안되나요&#63;</span>
                            <div className="d-flex">
                                <p>
                                    교환 접수 시, 동일한 옵션으로 교환 신청이 진행될 경우<br />
                                    <br />
                                    별도의 alert 오류창으로 한번 더 확인이 필요하다고 표시됩니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    동일 사이즈로 교환 접수가 진행될 경우 정상적인 교환 처리가 어려울 수 있으므로<br />
                                    <br />
                                    반드시 희망 옵션 등을 체크하여 접수 부탁드립니다.<br />
                                    <br />
                                    <br />
                                    <br />
                                    이 외에도 사이트 이용 시 팝업 등이 표시된다면 확인 후 이용 부탁드립니다.<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues09')}>닫기</button>
                        </div>
                    </div>
                </div>

                {/* =====10===== */}
                <div className="modal_cover">
                    <div className="pop_CS">
                        <div>
                            <span>&#91;교환&#47;반품&#93; 상품을 반송할 때 주의사항은 무엇인가요&#63;</span>
                            <div className="d-flex">
                                <p>
                                    &#91;회수방법에 따른 주의사항&#93;<br />
                                    &#45; 자동회수&#58; 택배기사가 반품회수를 위해 2&#45;3일이내 회수지로 방문할 예정<br />
                                    &#45; 직접반송&#58; 원송장을 통한 착불반송 or 타택배 선불반송 中 선택 후 반송<br />
                                    <br />
                                    &#45; 원송장통한 착불반송은 택배사 APP, WEB, ARS 자동접수 후 취소 시<br />
                                    재접수 불가하니 택배사 상담원통해 유선으로 재접수바랍니다.<br />
                                    <br />
                                    &#45; 택배사 정책 및 사정에 따른 문제는 더블유컨셉과는 무관하오니<br />
                                    택배사로 컨택하여 확인부탁드립니다.<br />
                                    <br />
                                    &#45; 반송 후 반송장번호는 필히 소지하시기 바랍니다.<br />
                                    <br />
                                    &#91;상품반송 시 주의사항&#93;<br />
                                    &#45; 택제거, 포장박스훼손, 구성품 누락, 사용흔적이 있을경우<br />
                                    기타 추가 비용 발생 및 재반송될 수 있습니다.<br />
                                    &#45; 택배비 미입금, 타상품 반입 등이 있을 경우 환불이 지연될 수 있습니다.<br />
                                    <br />
                                    &#45; 경비실 등 제3의 장소에 물품을 보관하여 분실, 도난 등 문제 발생하는 경우<br />
                                    고객귀책사유에 해당하오니 반송 시 유의하시기 바랍니다.<br />
                                </p>
                            </div>
                        </div>

                        <div className="btn_close">
                            <button onClick={() => closeModal('freqQues10')}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>//최종div
    );
};

export default Modal_csPop;