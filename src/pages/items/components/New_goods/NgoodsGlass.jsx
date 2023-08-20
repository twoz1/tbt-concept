import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/items/NgoodsGlass.css';
import { useContext } from 'react';
import mockItemsContext from '../../MockItems';

const NgoodsGlass = () => {

    let newGoodsGlassList = useContext(mockItemsContext);

    return (
        <ul className='new_glass_img'>
            {newGoodsGlassList.slice(0, 4).map((item) => (
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

export default NgoodsGlass;