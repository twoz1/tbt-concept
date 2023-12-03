import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/items/NgoodsGlass.css';

const NgoodsSunGlass = ({ pNewSList }) => {

    return (
        <ul className='new_glass_img'>
            {pNewSList.slice(0, 4).map((item) => (
                <li key={item.product_id}>
                    <Link to={`/detail/${item.product_id}`}>
                        <img src={require(`../../../../images/${item.product_img1}`)} alt="상품 사진" />
                        <img src={require(`../../../../images/${item.product_img2}`)} alt="상품 사진" />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NgoodsSunGlass;