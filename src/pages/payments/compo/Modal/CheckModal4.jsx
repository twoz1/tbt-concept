import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import '../../../../styles/payments/Compo/modal_4.css';
const CheckModal4 = () => {
    return (
        <div className="modal_1">
            <div class="modal_cover">
                <div class="modal">
                    <table>
                        <tr>
                            <th colspan="4">
                                <a href="../checkout.html">
                                <FontAwesomeIcon icon={faX} />
                                </a>
                                <h3>쿠폰 선택하기</h3>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <a href="./modal_3.html">
                                    <span>쿠폰 선택&#40;2&#41;</span>
                                </a>
                                <a href="#">
                                    <span>보유 쿠폰&#40;2&#41;</span>
                                </a>
                            </th>
                        </tr>

                        <tr>
                            <td>
                                <span class="cou_1">종류</span>
                                <span class="cou_2_1">쿠폰명</span>
                                <span class="cou_3_1">혜택</span>
                                <span class="cou_4_1">최대할인금액</span>
                                <span class="cou_5_1">사용기간</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <span class="cou_1">일반</span>
                                <span class="cou_2">회원가입 감사 10&#37; 할인쿠폰</span>
                                <span class="cou_3">10&#37; 할인</span>
                                <span class="cou_4">10&#46;000원</span>
                                <span class="cou_5">2023&#46;05&#46;22 &sim; 06&#46;28</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <span class="cou_1">일반</span>
                                <span class="cou_2_2">s&#47;s기념 10&#37; 할인 쿠폰</span>
                                <span class="cou_3_2">10&#37; 할인</span>
                                <span class="cou_4_2">10&#46;000원</span>
                                <span class="cou_5_2">2023&#46;05&#46;22 &sim; 06&#46;28</span>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <button>
                                    <a href="../checkout.html">취소</a>
                                </button>{' '}
                                <button>
                                    <a href="../checkout.html">적용</a>
                                </button>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default CheckModal4;
