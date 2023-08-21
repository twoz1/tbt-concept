import React, { useState, useEffect } from 'react'
import '../../../../styles/payments/BasketGoods.css';
import usePricing from "../../../customHooks/usePricing";
import { Link } from 'react-router-dom';

// todoList
// 1. 체크박스 자식 요소도 선택될 수 있도록 구현
// 2. 체크된 리스트 삭제 버튼 구현

const BasketGoods = ({ id, name, price, link, imageFront, isChecked, onChange }) => {

    // usePricing 사용
    const { quantityGoods, changeQuantity, totalPricing, finalPricing } = usePricing(1, price);

    // 체크박스 구현
    const handleChildCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        onChange(isChecked);
    };

    return (
        <tbody>
            <tr key={name}>
                <th>
                    <input type="checkbox"
                        name="goods"
                        checked={isChecked}
                        onChange={(e) => handleChildCheckboxChange(e, name)}
                    />
                </th>

                <td className="goods_name">
                    <div>
                        <Link to={`/detail/${name}`} >
                            <img src={imageFront} alt="상품사진" />
                        </Link>
                    </div>
                    <Link to={`/detail/${name}`}>
                        {name}
                    </Link>
                </td>

                {/* css 수정해야 함 */}
                <td className="goods_quantity">
                    <input type="number"
                        min={1} max={10}
                        Value={quantityGoods}
                        onChange={changeQuantity}
                    />
                </td>

                <td className="goods_price" >
                    {totalPricing().toLocaleString()}
                </td>

            </tr>
        </tbody>
    );
}

export default BasketGoods;