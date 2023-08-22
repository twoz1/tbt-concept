import useModal from '../../../customHooks/useModal';
import React, { useEffect, useState } from 'react';
import Join_Modal02 from '../../../members/components/Join/Join_Modal02';
import Join_Modal03 from '../../../members/components/Join/Join_Modal03';

const SidePay2 = () => {
    const { openModal, closeModal, isModal } = useModal();

    const [selectAll, setSelectAll] = useState(false);
    const [individualSelect1, setIndividualSelect1] = useState(false);
    const [individualSelect2, setIndividualSelect2] = useState(false);
    const [individualSelect3, setIndividualSelect3] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

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
    return (
        <div>
            <div class="side_pay side_pay2">
                <form action="#">
                    <table>
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
                    <button className="total_button" disabled={!selectAll} >
                        결제하기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SidePay2;
