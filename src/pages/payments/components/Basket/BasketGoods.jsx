import React, { useState, useEffect } from 'react'
import '../../../../styles/payments/BasketGoods.css';
import { Link } from 'react-router-dom';

const BasketGoods = ({ id, name, price, link, imageFront, handleSingleCheck, checkItems, changeQuantity, totalPricing, quantityGoods }) => {

    console.log("price:", price);
    console.log("quantity:", quantityGoods);

    return (
        <tbody>
            <tr key={name}>
                <th>
                    <input type="checkbox"
                        name="goods"
                        checked={checkItems.includes(name)}
                        onChange={() => handleSingleCheck(!checkItems.includes(name), name)}
                        value={quantityGoods}
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
                        value={quantityGoods}
                        onChange={(e) => changeQuantity(e, name)}
                    />
                </td>

                <td className="goods_price" >
                    {totalPricing(price, quantityGoods)}
                </td>
            </tr>
        </tbody>
    );
}

export default BasketGoods;