import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../../../../styles/payments/Compo/modal_3.css';
const CheckModal3 = () => {
    return (
        <div className="modal_1">
            <div class="modal_cover">
                <div class="modal">
                    <table>
                        <tr>
                            <th colspan="4">
                                <a href="../checkout.html">
                                    <i class="fa-regular fa-x"></i>
                                </a>
                                <h3>쿠폰 선택하기</h3>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <a href="#">
                                    <span>쿠폰 선택&#40;2&#41;</span>
                                </a>
                                <a href="./modal_4.html">
                                    <span>보유 쿠폰&#40;2&#41;</span>
                                </a>
                            </th>
                        </tr>

                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faCheck} />
                                최대 8&#46;900원 할인 적용이 가능합니다&#46;
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <span>상품 정보</span>
                                <span>상품 금액</span>
                                <span>상품 쿠폰</span>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <img src="../../../images/s_bibiBlack_01.jpeg" alt="bibiBlack_01" />
                                bibiBlack<span>89&#46;000</span>
                                <select name="coupon" id="coupon">
                                    <optgroup>
                                        <option value="difault">회원가입 감사 10&#37; 할인 쿠폰</option>
                                        <option value="difault">s&#47;s기념 10&#37; 할인 쿠폰</option>
                                    </optgroup>
                                </select>
                            </th>
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
export default CheckModal3;
