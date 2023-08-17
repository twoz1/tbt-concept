import React, { useState } from 'react';

const Item = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [individualSelect, setIndividualSelect] = useState(false); // 상품 개별 선택 상태 추가

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setIndividualSelect(!selectAll); // 전체 선택 상태 변경 시 개별 선택 상태도 변경
    };

    const handleIndividualSelect = () => {
        setIndividualSelect(!individualSelect);
    };

    return (
        <div class="item">
            <h3>주문상품</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        </td>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>총 상품 금액</th>
                        <th>배송비</th>
                    </tr>

                    <tr>
                        <td>
                            <input type="checkbox" checked={individualSelect} onChange={handleIndividualSelect} />
                        </td>
                        <td className="item_img">
                            <img src="../../images/s_bibiBlack_01.jpeg" alt="bibiBlack_01" />
                        </td>
                        <td>1</td>
                        <td>89,000</td>
                        <td>89,000</td>
                        <td>무료</td>
                    </tr>

                    <tr>
                        <td colSpan="6">
                            <span>&#42;</span>제주&#47;도서산간 지역의 경우 추가 배송비가 발생할 수 있습니다.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Item;
