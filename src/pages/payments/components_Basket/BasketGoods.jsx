import React, { useReducer, useState } from 'react'
import '../../../styles/payments/BasketGoods.css';


const BasketGoods = ({ mockItemsData }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>상품 정보</th>
                        <th>수량</th>
                        <th>상품 가격</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th><input type="checkbox" name="goods" /></th>

                        <td className="goods_name">
                            <div><a href="../detailed_page/detaied_page.html"><img src="../basket/img/sunglass2.jpg" alt="상품사진" /></a></div>
                            <a href="../detailed_page/detaied_page.html">EVA crystal&#45;violet tint</a>
                        </td>

                        <td className="goods_quantity">
                            {/*                             <select name="quantity">
                                <option value="수량" selected>수량</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select> */}
                            <input type="number" min={1} max={10} defaultValue={1} />
                        </td>
                        <td className="goods_price">165,000원</td>
                    </tr>
                </tbody>
            </table>
        </div >//최종div
    );
}

export default BasketGoods;