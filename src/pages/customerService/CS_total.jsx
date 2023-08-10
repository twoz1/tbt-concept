import '../../styles/customerService/css/CS_total.css';

const CS_total = () => {
    return (
        <div>
            <div className="center m_c">
                <div className="csTotal">
                    <div className="title_route">
                        <h2><strong>CUSTOMER SERVICE</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>CUSTOMER SERVICE</li>
                        </ul>
                    </div>
        
                    {/* =====================검색 상단바======================= */}
                    <div className="cs_sch">
                        <div className="cs_schLeft">
                            <span>
                                <strong>FAQ<br/>SEARCH</strong>
                            </span>
        
                            <label for="schText">
                                <input type="text" id="schText" placeholder="검색 후 문의가 해결되지 않으면 1&#58;1 상담을 이용하세요&#46;" maxlength="26"/>
                            </label>
        
                            <button type="submit" name="button">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
        
                        <div className="cs_schRight">
                            <div>
                                <span><strong>고객센터 이용안내</strong></span>
                                <p>
                                    1566&#45;1234<br/>
                                    운영시간 &#58; 평일 09&#58;00 &#126; 18&#58;00<br/>
                                    &#40;점심시간 &#58; 12&#58;30 &#126; 13&#58;30&#41;
                                </p>
                            </div>
                        </div>
                    </div>
        
                    {/* =====================검색 퀵메뉴======================= */}
                    <div className="cs_quickMemu">
                        <h3>QUICK MENU</h3>
        
                        <ul>
                            <li><a href="#cs1on1_ask_id">상품 문의</a></li>
                            <li><a href="#freq_ask_id">자주 찾는 질문</a></li>
                            <li><a href="#newCli_service_id">신규 서비스</a></li>
                            <li><a href="#news_id">NEWS</a></li>
                        </ul>
                    </div>
        
                    {/* =====================CS 목록 - 상품문의======================= */}
                    <div>
                        <section id="cs1on1_ask_id" className="cs1on1_ask">
                            <h3><strong>상품 문의</strong></h3>
                            <div className="btn_cs1on1"><a href="#"><strong>1&#58;1 문의하기</strong></a></div>
                            <hr/>
        
                            <div>
                                <p>작성한 게시물이 없습니다.</p>
                            </div>
                        </section>
        
                        {/* =====================CS 목록 - 자주 찾는 질문======================= */}
                        <section id="freq_ask_id" className="freq_ask">
                            <h3><strong>자주 찾는 질문</strong></h3>
                            <hr/>
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;증빙서류 발급&#93;</strong>
                                        현금영수증 발행은 어떻게 신청하나요&#63;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                       <strong>&#91;취소&#93;</strong>
                                        주문을 취소하고 싶어요&#46;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;포인트&#93;</strong>
                                        상품 구매 후 POINT는 언제 적립되나요&#63;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;배송&#93;</strong>
                                        배송지가 검색되지 않아요&#46;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;교환&#47;반품&#93;</strong>
                                        교환&#47;반품 불가한 이유가 뭔가요&#63;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;상품평&#93;</strong>
                                        리뷰 작성으로 적립되는 POINT는 어떻게 되나요&#63;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;상품평&#93;</strong>
                                        베스트 &#38; 프리미엄 리뷰 POINT는 어떻게 되나요&#63;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;배송&#93;</strong>
                                        여러 개 상품을 주문했는데 배송 택배비가 상품마다 발생되나요&#63;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;교환&#47;반품&#93;</strong>
                                        교환 접수 시&#44; 동일한 사이즈로 접수가 된 것 같은데 확인이 안되나요&#63;
                                    </a>
                                </p>
                            </div>
        
                            <div>
                                <p>
                                    <a href="#">
                                        <strong>&#91;교환&#47;반품&#93;</strong>
                                        상품을 반송할 때 주의사항은 무엇인가요&#63;
                                    </a>
                                </p>
                            </div>
                        </section>
        
                        {/* =====================CS 목록 - 신규 서비스======================= */}
                        <section id="newCli_service_id" className="newCli_service">
                            <h3><strong>신규 서비스</strong></h3>
                            <hr/>
                            <div className="new_serv_details">
                                <details>
                                    <summary>MY&hearts;</summary>
                                    <img src={require("./img/newservice1_my.jpg")} alt="MY사진"/>
                                </details>
        
                                <details>
                                    <summary>선물하기</summary>
                                    <img src={require("./img/newservice2_my.jpg")} alt="MY사진"/>
                                </details>
        
                                <details>
                                    <summary>상품평 쓰기</summary>
                                    <img src={require("./img/newservice3_my.jpg")} alt="MY사진"/>
                                </details>
                            </div>
                        </section>
                        
                        {/* ====================CS 목록 - NEWS======================= */}
                        <section id="news_id" className="news">
                            <h3><strong>NEWS</strong></h3>
                            <hr/>
                            <div className="news_list">
                                <p>
                                    <a href="#">
                                        <strong>&#91;안내&#93;</strong>
                                        사이트 점검으로 인한 서비스 일시중지
                                    </a>
                                </p>
        
                                <p>
                                    <a href="#">
                                        <strong>&#91;안내&#93;</strong>
                                        5&#47;29일 대체휴일 고객센터 휴무 안내
                                    </a>
                                </p>
        
                                <p>
                                    <a href="#">
                                        <strong>&#91;안내&#93;</strong>
                                        장바구니 정책 변경 안내
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>//최종div
    );
};

export default CS_total;