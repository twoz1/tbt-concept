import React, { useState, useEffect } from 'react'
import '../../../../styles/payments/BasketGoods.css';
import { Link } from 'react-router-dom';

const BasketGoods = ({ cart_quan, product_id, product_name, product_price,  product_stock, user_id, product_img1, changeQuantity, totalPricing, quantityGoods, checkItems, handleSingleCheck }) => {

    return (
        <tbody>
            <tr key={product_id}>
                <th>
                    <input type="checkbox"
                        name="goods"
                        checked={checkItems.includes(product_id)}
                        onChange={() => handleSingleCheck(!checkItems.includes(product_id), product_id)}
                        value={cart_quan}
                    />
                </th>

                <td className="goods_name">
                    <div>
                        <Link to={`/detail/${product_id}`} >
                            <img src={require(`../../../../images/${product_img1}`)} alt="상품사진" />
                        </Link>
                    </div>
                    <Link to={`/detail/${product_id}`}>
                        {product_name}
                    </Link>
                </td>

                {/* css 수정해야 함 */}
                <td className="goods_quantity">
                    <input type="number"
                        min={1} max={10}
                        value={cart_quan}
                        onChange={(e) => changeQuantity(e, product_id)}
                    />
                </td>

                <td className="goods_price" >
                    {(totalPricing(product_price, quantityGoods)).toLocaleString()}원
                </td>
            </tr>
        </tbody>
    );
}

export default BasketGoods;