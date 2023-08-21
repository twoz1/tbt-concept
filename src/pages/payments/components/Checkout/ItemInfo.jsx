import React from 'react';

const ItemInfo = ({ item, individualSelect, handleIndividualSelect, count }) => {
    return (
        <>
            <td>
                <input type="checkbox" checked={individualSelect} onChange={handleIndividualSelect} />
            </td>
            <td className="item_img">
                <img src={item.imageFront} alt="상품이미지" />
            </td>
            <td>{count}</td>
            <td>
                <span>{item.price.toLocaleString()}원</span>
            </td>
            <td>
                <span>{item.price.toLocaleString()}원</span>
            </td>
            <td>무료</td>
        </>
    );
};

export default ItemInfo;
