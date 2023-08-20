import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../../styles/items/NgoodsGlass.css';
import { useContext } from 'react';
import mockItemsContext from './MockItems';
=======
import '../../../../styles/items/NgoodsGlass.css';
import { useContext } from 'react';
import mockItemsContext from '../../MockItems';
>>>>>>> main

const NgoodsSunGlass = () => {

    let newGoodsSunglassList = useContext(mockItemsContext);

    return (
        <ul className='new_glass_img'>
            {newGoodsSunglassList.slice(16, 20).map((item) => (
                <Link to={`/detail/${item.id}`} key={item.id} className='newGoodsIMG'>
                    <li>
                        <img src={item.imageFront} alt="상품 사진" />
                        <img src={item.imageSide} alt="상품 사진" />
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default NgoodsSunGlass;