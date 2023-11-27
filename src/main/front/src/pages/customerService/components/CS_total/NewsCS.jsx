import React from 'react';
import '../../../../styles/customerService/NewsCS.css';
import useModal from '../../../customHooks/useModal';

const NewsCS = () => {

    // custom modal hook을 이용한 모달창 구현
    const { openModal, closeModal, isModal } = useModal();

    return (
        <div className='newsZ_index'>
            <section id="news_id" className="news">
                <h3><strong>NEWS</strong></h3>
                <hr />
                <div className="news_list">
                    <p>
                        <button onClick={() => openModal('news01')}>
                            <strong>&#91;안내&#93;</strong>
                            사이트 점검으로 인한 서비스 일시중지
                        </button>
                        {isModal('news01') && <div className="modal_cover">
                            <div className="pop_CS">
                                <div>
                                    <span>&#91;안내&#93; 사이트 점검으로 인한 서비스 일시중지</span>
                                    <div className="d-flex">
                                        <p>안녕하세요.<br />
                                            <br />
                                            tbt concept을 이용해주시는 고객님께 깊이 감사드립니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            tbt concept의 안정적인 서비스를 제공하기 위하여 시스템 점검을 진행합니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            &#45; 점검일시 &#58; 2023&#45;6&#45;4 &#40;일&#41; 오전 2&#58;00~06&#58;00<br />
                                            <br />
                                            &#45; 점검내용 &#58; 서비스 점검 <br />
                                            <br />
                                            &#45; 중단서비스 &#58; 사이트 &#40;PC&#47;Mobile&#41; 접속 불가<br />
                                            <br />
                                            <br />
                                            <br />
                                            점검 시간에는 사이트 접속이 중단되오니, tbt concept을 이용하는 고객님의 많은 양해를 부탁 드립니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            감사합니다.<br />
                                        </p>
                                    </div>
                                </div>

                                <div className="newsCloseBTN">
                                    <button onClick={() => closeModal('news01')}>닫기</button>
                                </div>
                            </div>
                        </div>}
                    </p>

                    <p>
                        <button onClick={() => openModal('news02')}>
                            <strong>&#91;안내&#93;</strong>
                            5&#47;29일 대체휴일 고객센터 휴무 안내
                        </button>
                        {isModal('news02') && <div className="modal_cover">
                            <div className="pop_CS">
                                <div>
                                    <span>&#91;안내&#93; 5&#47;29일 대체휴일 고객센터 휴무 안내</span>
                                    <div className="d-flex">
                                        <p>안녕하세요, tbt concept입니다.<br />
                                            <br />
                                            항상 tbt concept을 이용해주시는 고객님께 깊이 감사드립니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            2023년 5월 29일 대체휴일로 tbt concept 고객센터 휴무에 대해 안내드리오니 사이트 이용에 참고 부탁 드립니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            &#42; 2023년 5월 29일 월요일 &#58; 고객센터 휴무<br />
                                            <br />
                                            &#45; 전화&#47;채팅&#47;게시판 상담 중단됩니다.<br />
                                            <br />
                                            &#45; 상품 페이지 내 Q&#38;A 또는 1&#58;1게시판을 통해 남겨주시면 휴무 후 담당자가 순차적으로 답변 드리겠습니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            &#42; 2023년 5월 30일 화요일 &#58; 업무 재개일<br />
                                            <br />
                                            &#45; 해당일은 문의가 한시적 증가가 예상되어 고객센터 전화상담 연결 지연 및 게시판 답변이 다소 지연될 수 있습니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            고객님의 너그러운 양해 부탁 드립니다.<br />
                                            <br />
                                            <br />
                                            <br />
                                            감사합니다.<br />
                                        </p>
                                    </div>
                                </div>

                                <div className="newsCloseBTN">
                                    <button onClick={() => closeModal('news02')}>닫기</button>
                                </div>
                            </div>
                        </div>}

                    </p>

                    <p>
                        <button onClick={() => openModal('news03')}>
                            <strong>&#91;안내&#93;</strong>
                            장바구니 정책 변경 안내
                        </button>
                        {isModal('news03') && <div className="modal_cover">
                            <div className="pop_CS">
                                <div>
                                    <span>&#91;안내&#93; 장바구니 정책 변경 안내</span>
                                    <div className="d-flex">
                                        <p>안녕하세요. tbt concept입니다.<br />
                                            <br />
                                            tbt concept을 이용해 주시는 고객님께 깊이 감사드립니다.<br />
                                            <br />
                                            오는 1&#47;10일&#40;화&#41; tbt concept 장바구니 정책이 변경되어 안내드리오니 사이트 이용에 참고 부탁 드립니다.<br />
                                            <br />
                                            <br />
                                            &#42; 변경전<br />
                                            &#45; 보관 가능 상품수 제한 없음<br />
                                            <br />
                                            &#45; 나중에 구매하기 기능 이용 가능<br />
                                            <br />
                                            <br />
                                            &#42; 변경후<br />
                                            <br />
                                            &#45; 장바구니 내 상품 최대 100개까지 보관 가능<br />
                                            <br />
                                            &#45; 장바구니에 담긴 상품은 담긴 다음날부터 30일 보관 후 삭제<br />
                                            <br />
                                            &#45; 나중에 구매하기 기능 삭제 &#40;이용불가&#41;<br />
                                            <br />
                                            언제나 tbt concept과 함께 해주셔서 감사합니다.<br />
                                            <br />
                                            감사합니다.<br />
                                        </p>
                                    </div>
                                </div>

                                <div className="newsCloseBTN">
                                    <button onClick={() => closeModal('news03')}>닫기</button>
                                </div>
                            </div>
                        </div>}
                    </p>
                </div>
            </section>
        </div>//최종div


    )
}

export default NewsCS;