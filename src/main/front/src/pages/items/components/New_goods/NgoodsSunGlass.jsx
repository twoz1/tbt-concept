import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/items/NgoodsGlass.css';
import { useContext } from 'react';
import mockItemsContext from '../../MockItems';

const NgoodsSunGlass = () => {

    const {sArr} = useContext(mockItemsContext);
    const newGoodsSunglassList = [...sArr];
    console.log (`글라스 : ${newGoodsSunglassList}`);

    return (
        <ul className='new_glass_img'>
            {newGoodsSunglassList.slice(0, 4).map((item) => (
                <li>
                    <Link to={`/detail/${item.name}`} key={item.name}>
                        <img src={item.imageFront} alt="상품 사진" />
                        <img src={item.imageSide} alt="상품 사진" />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NgoodsSunGlass;