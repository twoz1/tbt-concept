import usePricing from '../../../customHooks/usePricing';
import React from 'react';
import { Link } from 'react-router-dom';

const ItemInfo = ({ name, quantity, price, product_img1,}) => {
    return (
        <tr class="itemComp">
            <td className="item_img">
                <Link to={`/detail/${name}`}>
                    <img src={product_img1} alt={name} />
                </Link>
                <Link to={`/detail/${name}`}>
                    {name}
                </Link>
            </td>
            <td>
                {quantity}
            </td>
            <td>
                <span>{price.toLocaleString()}원</span>
            </td>
        </tr>
    );
};

export default ItemInfo;