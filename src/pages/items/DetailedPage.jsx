
import "../../styles/items/DetailedPage.css"
import DpTopSection from "./components/DpTopSection";
import DpSelectOption from "./components/DpSelectOption";
import DpNavigation from "./components/DpNavigation";
import DpReviewScore from "./components/DpReviewScore";
import DpProductDetail from "./components/DpProductDetail";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import mockItemsContext from './MockItems';

const DetailedPage = () => {
    const { id } = useParams();
    const productList = useContext(mockItemsContext);
    const ProductListSelected = productList.find(product => product.id === parseInt(id));
    console.log(productList);

    return (
        <div className="DetailedPage">
            <div className="center m_c">
                <div className="section">
                    <DpTopSection ProductListSelected={ProductListSelected}/>
                    <DpSelectOption  />
                </div>

                <DpNavigation></DpNavigation>

                <DpProductDetail ProductListSelected={ProductListSelected}/>

                {/* <!-- ==============리뷰1======================================================= --> */}


                <div className="nav nav2">
                    <ul>
                        <li><a href="#detail">DETAIL</a></li>
                        <li><a href="#review">REVIEW</a></li>
                        <li><a href="#question_answer">Q&amp;A</a></li>
                        <li><a href="#return_delivery">RETURN&amp;DELIVERY</a></li>
                    </ul>
                </div>


                <div className="review_score_percent" id="review">

                    <DpReviewScore></DpReviewScore>

                    <div className="review_right">
                        <div>

                            <strong>아주 좋아요</strong>
                            <div className="bar" id="top_bar"></div>
                            <em>100%</em>
                        </div>

                        <div>
                            <strong>마음에 들어요</strong>
                            <div className="bar"></div>
                            <em>0%</em>
                        </div>

                        <div>
                            <strong>보통이에요</strong>
                            <div className="bar"></div>
                            <em>0%</em>
                        </div>

                        <div>
                            <strong>그냥 그래요</strong>
                            <div className="bar"></div>
                            <em>0%</em>
                        </div>

                        <div>
                            <strong>별로에요</strong>
                            <div className="bar"></div>
                            <em>0%</em>
                        </div>
                    </div>
                </div>


                <div className="review_nav">
                    <span>최신순</span>
                    <span>평점높은순</span>
                    <span>평점낮은순</span>
                    {/* <span>추천순</span> */}
                </div>
                <hr />
                {/* <!-- ===============리뷰2============================================================================= --> */}
                <div>

                    <div className="customer_review" id="question_answer">
                        <div className="star_id_date">
                            <span>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                아주 좋아요
                            </span>
                            <span>tb&#176;&#176;&#176;&#176;&#176;&#176;&#176; 2023.06.20</span>
                        </div>

                        <p>
                            선글라스 색감이 너무 예뻐요&#33;&#33;
                            친구들이 잘 어울린다고 칭찬해줘서 기쁘네요. <br /> tbt 컨셉에 예쁜 선글라스랑 안경이 너무 많아서 다 사고 싶어요 ㅠㅠ
                            tbt 컨셉 최고&#33;&#33;&#33;&#33;
                        </p>

                        {/* <div className="customer_review_button">
                            <div>
                                <a href="">신고</a> &#124;
                                <a href="">숨김</a>
                            </div>
                            <a href="">like <i className="fa-regular fa-thumbs-up"></i></a>
                        </div> */}
                    </div>
                    {/* <!-- ================큐앤에이========================================================================================== --> */}
                    <div className="nav nav3">
                        <ul>
                            <li><a href="#detail">DETAIL</a></li>
                            <li><a href="#review">REVIEW</a></li>
                            <li><a href="#question_answer">Q&amp;A</a></li>
                            <li><a href="#return_delivery">RETURN&amp;DELIVERY</a></li>
                        </ul>
                    </div>

                    <div className="q_a_button">
                        <a href="">상품문의</a>
                    </div>

                    <div className="customer_q_a">

                        <span id="q_a_answer_complecation">
                            <em>답변완료</em></span>
                        <span id="q_a_inquiy">출고문의</span>
                        <span id="q_a_user_id">nic&#176;&#176;&#176;&#176;&#176;&#176;</span>
                        <span id="q_a_date">2023.05.25</span>

                    </div>

                    {/* <div className="customer_q_a_next_page">
                        <a href="">1</a>
                        <a href="">2</a>
                    </div> */}

                    <div className="nav nav4">
                        <ul>
                            <li><a href="#detail">DETAIL</a></li>
                            <li><a href="#review">REVIEW</a></li>
                            <li><a href="#question_answer">Q&amp;A</a></li>
                            <li><a href="#return_delivery">RETURN&amp;DELIVERY</a></li>
                        </ul>
                    </div>

                    {/* <!-- ================환불정책============================================ --> */}
                    <div className="return_delivery" id="return_delivery">
                        <div>
                            <p>배송&#47;교환&#47;반품&#47;A&#47;S 관련 유의사항 <br />
                                상품상세설명의 배송&#47;교환&#47;반품&#47;취소 관련 안내가 기재된 경우 <br />
                                다음 안내사항보다 우선 적용됩니다.
                            </p>
                        </div>

                        <table className="return_delivery_content">
                            <tr>
                                <th>배송정보</th>
                                <td>
                                    <ul>
                                        <li>상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.</li>
                                        <li>일부 주문상품 또는 예약상품의 경우 기본 배송일 외에 추가 배송 소요일이 발생될 수 있습니다.</li>
                                        <li>동일 브랜드의 상품이라도 상품별 출고일시가 달라 각각 배송될 수 있습니다.</li>
                                        <li> 제주 및 도서산간 지역은 출고, 반품, 교환시 추가 배송비&#40;항공, 도선료&#41;가 부과 될 수 있습니다.</li>
                                        <li> 상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>취소&#47;반품&#47;교환 안내</th>
                                <td>
                                    <ul>
                                        <li> 회수지 정보 &#58; 경기도 성남시 돌마로 46 5층 그린컴퓨터아카데미 성남분당점 &#47; &#40;주&#41;티비티컨셉코리아</li>
                                        <li>동일 브랜드의 상품이라도 교환&#47;반품 회수지가 다를 수 있습니다. 상품상세 정보 또는 회수지 정보를 확인하신 후 반드시 지정된 회수지로
                                            보내주세요.
                                            상품을 지정된 회수지가 아닌곳으로 보내실 경우 택배 분실 또는 재발송에 따른 추가 비용이 발생할 수 있습니다.</li>
                                        <li>고객센터나 &#34;My Page&#62;주문취소&#47;교환&#47;반품 신청&#34;을 통한 교환&#47;반품 접수 없이 상품을 회수지로
                                            보내실 경우 재발송에 따른 추가 비용이 발생할 수 있으며 경우에 따라서는 교환&#47;반품이 어려울 수 있습니다.</li>
                                        <li>상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환&#47;반품 택배비 고객부담으로 왕복택배비가 발생합니다. &#40;전자상거래 등에서의
                                            소비자보호에 관한 법률 제18조&#40;청약 철회등&#41;9항에 의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.&#41;
                                        </li>
                                        <li>결제완료 직후 즉시 주문취소는&#34;MY Page&#62; 취소&#47;교환&#47;반품 신청&#34;에서 직접 처리 가능합니다.</li>
                                        <li>결제완료 직후 즉시 주문취소는 &#34;MY Page&#62; 취소&#47;교환&#47;반품 신청&#34;에서 직접 처리 가능합니다.</li>
                                        <li>주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.</li>
                                        <li>주문상태가 상품준비중인 경우 취소신청이 가능하며 판매자의 승인 여부&#40;이미 배송을 했거나 포장을 완료한 경우&#41;에 따라 취소가
                                            불가능할 수 있습니다.
                                            교환 신청은 최초 1회에 한하며, 교환 배송 완료 후에는 추가 교환 신청은 불가합니다.</li>
                                        <li>반품&#47;교환은 미사용 제품에 한해 배송완료 후 7일 이내 접수하여 주십시오.
                                            임의반품은 불가하오니 반드시 고객센터나 &#34;MY Page&#62; 주문취소&#47;교환&#47;반품 신청&#34;을 통해서 신청접수를
                                            하시기 바랍니다.</li>
                                        <li>상품하자, 오배송의 경우 택배비 무료로 교환&#47;반품이 가능하지만 모니터의 색상차이, 착용감, 사이즈의 개인의 선호도는 상품의 하자 사유가
                                            아닙니다.
                                            고객 부주의로 상품이 훼손, 변경된 경우 반품 &#47; 교환이 불가능 합니다</li>
                                        <li>취소&#47;반품 대금환불이 지연 시 전자상거래법에 의거하여 환불지연 배상처리 절차가 진행됩니다.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>반품&#47;교환이 불가능한 경우</th>
                                <td>
                                    <ul>
                                        <li> 제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG, 보증서, 상품 부자재가 제거 혹은 분실된 경우</li>
                                        <li>밀봉포장을 개봉했거나 내부 포장재를 훼손 또는 분실한 경우&#34;단, 제품확인을 위한 개봉 제외&#34;</li>
                                        <li>시간이 경과되어 재판매가 어려울 정도로 상품가치가 상실된 경우</li>
                                        <li>고객님의 요청에 따라 주문 제작되어 고객님 외에 사용이 어려운 경우</li>
                                        <li>배송된 상품이 설치가 완료된 경우&#34;가전, 가구 등&#34;</li>
                                        <li>기타 전자상거래 등에서의 소비자보호에 관한 법률이 정하는 청약철회 제한사유에 해당하는 경우</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>A&#47;S 안내</th>
                                <td>
                                    <ul>
                                        <li> A&#47;S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는 더블유컨셉 고객센터를 통해 부탁드립니다.</li>
                                        <li>상품불량에 의한 반품, 교환, A&#47;S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준&#40;공정거래위원회
                                            고시&#41;에 따라 받으실 수 있습니다.</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedPage;