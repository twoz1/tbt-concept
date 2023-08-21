import usePricing from '../../../customHooks/usePricing';
import React from 'react';
const ItemInfo = ({ item, individualSelect, handleIndividualSelect, quantityGoods, price, imageFront }) => {
    const totalPrice = () => {
        const totalPrice = price * quantityGoods;
        return totalPrice
    }
    console.log(totalPrice);
  
    return (
        <>
            <td>
                <input type="checkbox" checked={individualSelect} onChange={handleIndividualSelect} />
            </td>
            <td className="item_img">
                <img src={imageFront} alt="상품이미지" />
            </td>
            <td>{quantityGoods}</td>
            <td>
                <span>{totalPrice()}원</span>
            </td>
            <td>
                <span>{totalPrice()}원</span>
            </td>
            <td>무료</td>
        </>
    );
};

export default ItemInfo;
