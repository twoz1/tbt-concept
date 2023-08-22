import React, { useState } from 'react';
import { useContext } from 'react';
import mockItemsContext from '../../../items/MockItems';
import ItemInfo from './ItemInfo';

const Item = ({ checkoutList, totalPrice }) => {

    return (
        <div className="item">
            <h3>주문상품</h3>

            <table className="item_table">
                <tbody>
                    <tr>
                        <th colSpan={2}>상품정보</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                        {checkoutList.map((item) => <ItemInfo key={item.name}{...item}/>)}


                        {/* <td>
                            <input type="checkbox" checked={individualSelect} onChange={handleIndividualSelect} />
                        </td>
                        {itemList.slice(0, 1).map((item) => (
                            <td className='item_img'>
                                <img src={item.imageFront} alt="상품이미지" />
                            </td>
                        ))}
                        <td>1</td>
                        {itemList.slice(0, 1).map((item) => (
                            <td>
                                <span>{item.price.toLocaleString()}원</span>
                            </td>
                        ))}
                        {itemList.slice(0, 1).map((item) => (
                            <td>
                                <span>{item.price.toLocaleString()}원</span>
                            </td>
                        ))}
                        <td>무료</td> */}

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