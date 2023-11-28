import React, { useState } from 'react';
import { useContext } from 'react';
import mockItemsContext from '../../../items/MockItems';
import ItemInfo from './ItemInfo';

const Item = ({ checkoutList, totalPrice }) => {

    return (
        <div className="item">
            <h3>주문상품</h3>

            <table className="item_table checkout_table">
                <tbody>
                    <tr>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                    {checkoutList.map((item) => <ItemInfo key={item.name}{...item} />)}

                    <tr>
                        <td colSpan="6">
                            <span>&#42;</span> 제주&#47;도서산간 지역의 경우 추가 배송비가 발생할 수 있습니다.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="6">
                             <input type="text" name="order_total_each_quan" id="order_total_each_quan" value="5" required/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Item;