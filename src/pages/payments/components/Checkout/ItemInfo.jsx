import usePricing from '../../../customHooks/usePricing';
import React from 'react';
const ItemInfo = ({  individualSelect, handleIndividualSelect, }) => {

  
    return (
        <>
            <td>
                <input type="checkbox" checked={individualSelect} onChange={handleIndividualSelect} />
            </td>
            <td className="item_img">
                <img src="" alt="상품이미지" />
            </td>
            <td>수량</td>
            <td>
                <span>원</span>
            </td>
            <td>
                <span>원</span>
            </td>
            <td>무료</td>
        </>
    );
};

export default ItemInfo;
