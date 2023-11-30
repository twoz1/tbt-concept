import { useState, useEffect  } from "react";
import useModal from './../../../customHooks/useModal';
import Join_Modal02 from "../../../members/components/Join/Join_Modal02";
import Join_Modal03 from "../../../members/components/Join/Join_Modal03";
import axios from 'axios';




const SidePay = ({ totalPrice, selectedCoupon }) => {

    const { openModal, closeModal, isModal } = useModal();
    

    const [selectAll, setSelectAll] = useState(false);
    const [individualSelect1, setIndividualSelect1] = useState(false);
    const [individualSelect2, setIndividualSelect2] = useState(false);
    const [individualSelect3, setIndividualSelect3] = useState(false);

    useEffect(() => {
        // 각 체크박스 상태를 확인하고 모두 선택되었을 때만 selectAll 상태를 true로 설정
        if (individualSelect1 && individualSelect2 && individualSelect3) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    }, [individualSelect1, individualSelect2, individualSelect3]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setIndividualSelect1(!selectAll);
        setIndividualSelect2(!selectAll);
        setIndividualSelect3(!selectAll);
    };

    const handleIndividualSelect1 = () => {
        setIndividualSelect1(!individualSelect1);
    };

    const handleIndividualSelect2 = () => {
        setIndividualSelect2(!individualSelect2);
    };

    const handleIndividualSelect3 = () => {
        setIndividualSelect3(!individualSelect3);
    };

    //할인율
    // console.log(handleCouponChange());

    //할인 적용 금액
    const calcPricing = () => {
        if (selectedCoupon) {
            const discountPrice = (totalPrice * selectedCoupon.discount) / 100;
            return totalPrice - discountPrice;
        } else {
            return totalPrice;
        }
    };

    //할인 금액
    const discountPricing = () => {
        if (selectedCoupon) {
            const discountPrice = totalPrice - calcPricing();
            return discountPrice;
        } else {
            return 0;
        }
    };

    // const discountPrice = (totalPrice * selectedCoupon.discount) / 100;


    // scroll 구현

    const [sidePayScoll, setSidePayScoll] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setSidePayScoll(scrollPosition >= 191);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   

    function insertOrderList() {
        let url = "/order/oListInsert";
        let formData = new FormData(document.getElementById('oListInsert'));

            axios.post(url, formData)
            .then(response => {
                alert("주문완료" + response.data);
                console.log("주문 ");
                navigateTo("/resultframe");
            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[입력 오류] 다시 시도하세요.");
                } else {
                    alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });
    
    }
    function navigateTo(url) {
        console.log("이동하고자 하는 URL:", url); 
        window.location.href = url; // 또는 history.pushState({}, null, url); 사용
    }

    return (
        <div className={`side_pay ${sidePayScoll ? 'lock' : ''}`}>
            <div className="side_pay1">
                <h3>최종결제금액</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>총 상품금액</th>
                            <td>
                                <input type="text" name="order_total_price" id="order_total_price" required 
                                value="305000"//{totalPrice.toLocaleString()}
                                />
                                {/* {totalPrice.toLocaleString()} 원 */}
                            </td>
                        </tr>
                        <tr>
                            <th>배송비</th>
                            <td>0 원</td>
                        </tr>
                        <tr>
                            <th>할인금액</th>
                            <td>{discountPricing().toLocaleString()} 원</td>
                        </tr>

                        <tr>
                            <th>총 결제금액</th>
                            <td>
                                <input type="text" name="order_total_price" id="order_total_price" required 
                                value="305000"//{totalPrice.toLocaleString()}
                                />
                                {/* {totalPrice.toLocaleString()} 원 */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="side_pay2">
                {/* <form action="#"> */}
                <table className="side_pay_table">
                    <tbody>
                        <tr>
                            <th colspan="1">
                                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                <span>주문 정보를 확인하였으며&#184;약관 전체에 동의합니다&#46;</span>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1">
                                <input type="checkbox" checked={individualSelect1} onChange={handleIndividualSelect1} />
                                <span>
                                    주문 상품정보에 동의&#40;필수&#41;
                                    <button
                                        type="button"
                                        className="sidepay1_button"
                                        onClick={() => {
                                            openModal('joinModal_2');
                                        }}
                                    >
                                        내용보기
                                    </button>
                                    {isModal('joinModal_2') && <Join_Modal02 closeModal={closeModal} />}
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1">
                                <input type="checkbox" checked={individualSelect2} onChange={handleIndividualSelect2} />
                                <span>
                                    결제대행서비스 이용을 위한 개인정보 <br />제3자 제공 및 위탁 동의&#40;필수&#41;
                                    <button
                                        type="button"
                                        className="sidepay1_button"
                                        onClick={() => {
                                            openModal('joinModal_3');
                                        }}
                                    >
                                        내용보기
                                    </button>
                                    {isModal('joinModal_3') && <Join_Modal03 closeModal={closeModal} />}
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1">
                                <input type="checkbox" checked={individualSelect3} onChange={handleIndividualSelect3} />
                                <span>개인정보 제3자 제공에 대한 동의&#40;필수&#41;</span>
                            </th>
                        </tr>
                    </tbody>
                </table>
                {/* </form> */}
            </div>
            <button type="submit" className="total_button" disabled={!selectAll} onClick={()=>insertOrderList()}  >
                결제하기
            </button>
        </div>//최종 div
    );
};

export default SidePay;