
import '../../styles/items/Glasses.css'
// import Category from './components/Category';
import Product1 from './components/Product1';
import PageNation from './components/PageNation';
import { useState } from 'react';

import s_bibiBlack_01 from '../../images/s_bibiBlack_01.jpeg'
import s_bibiBlack_02 from '../../images/s_bibiBlack_02.jpeg'

import s_evaCrystalVioletTint_01 from '../../images/s_evaCrystalVioletTint_01.jpg'
import s_evaCrystalVioletTint_02 from '../../images/s_evaCrystalVioletTint_02.jpg'

import s_hangangBlack_01 from '../../images/s_hangangBlack_01.jpeg'
import s_hangangBlack_02 from '../../images/s_hangangBlack_02.jpeg'

import s_orrBlack_01 from '../../images/s_orrBlack_01.jpeg'
import s_orrBlack_02 from '../../images/s_orrBlack_02.jpeg'

import s_roanGrayCystal_01 from '../../images/s_roanGrayCystal_01.jpg'
import s_roanGrayCystal_02 from '../../images/s_roanGrayCystal_02.jpg'

import s_scottCystalOrangeTint_01 from '../../images/s_scottCystalOrangeTint_01.jpg'
import s_scottCystalOrangeTint_02 from '../../images/s_scottCystalOrangeTint_02.jpg'

import s_tamdaBeige_01 from '../../images/s_tamdaBeige_01.jpg'
import s_tamdaBeige_02 from '../../images/s_tamdaBeige_02.jpg'

import s_depsBlack_01 from '../../images/s_depsBlack_01.jpeg'
import s_depsBlack_02 from '../../images/s_depsBlack_02.jpeg'

const Sunglasses = () => {


    const products1 = [{

        name: 'Bibi Black',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_bibiBlack_01,
        imageSide: s_bibiBlack_02,
        shopThis: 'SHOP THIS',
    },
    {
        name: 'Eva Crystal Violet Tint',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_evaCrystalVioletTint_01,
        imageSide: s_evaCrystalVioletTint_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Hangang Black',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_hangangBlack_01,
        imageSide: s_hangangBlack_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Orr Black',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_orrBlack_01,
        imageSide: s_orrBlack_02,
        shopThis: 'SHOP THIS',

    },
    {

        name: 'Roan Gray Cystal',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_roanGrayCystal_01,
        imageSide: s_roanGrayCystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Scott Cystal Orange Tint',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_scottCystalOrangeTint_01,
        imageSide: s_scottCystalOrangeTint_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Tamda Beige',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_tamdaBeige_01,
        imageSide: s_tamdaBeige_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Deps Black',
        price: '169.000원',
        link: './items/DetailedPage',
        imageFront: s_depsBlack_01,
        imageSide: s_depsBlack_02,
        shopThis: 'SHOP THIS',

    },
    {

        name: 'Roan Gray Cystal',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_roanGrayCystal_01,
        imageSide: s_roanGrayCystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Scott Cystal Orange Tint',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_scottCystalOrangeTint_01,
        imageSide: s_scottCystalOrangeTint_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Tamda Beige',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_tamdaBeige_01,
        imageSide: s_tamdaBeige_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Deps Black',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_depsBlack_01,
        imageSide: s_depsBlack_02,
        shopThis: 'SHOP THIS',

    }, {

        name: 'Bibi Black',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_bibiBlack_01,
        imageSide: s_bibiBlack_02,
        shopThis: 'SHOP THIS',
    },
    {
        name: 'Eva Crystal Violet Tint',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_evaCrystalVioletTint_01,
        imageSide: s_evaCrystalVioletTint_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Hangang Black',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_hangangBlack_01,
        imageSide: s_hangangBlack_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Orr Black',
        price: '169,000원',
        link: './items/DetailedPage',
        imageFront: s_orrBlack_01,
        imageSide: s_orrBlack_02,
        shopThis: 'SHOP THIS',

    },
    ]


    const  [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo1 = products1.slice(startIndex, startIndex + itemsPerPage);
  
    return (
        <div className='Sunglasses'>
            <div className="center m_c">

                <div id="banner">
                    <img src={require("../../images/SunglassesBanner.jpg")} alt="Sunglasses_banner_img" />
                </div>

                <div className="title_route">
                    <h2><strong>Sunglasses</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>Sunglasses</li>
                    </ul>
                </div>

                <div id="category">
                    <ul>
                        <li>category
                            <ul>
                                <li><a href="../sunglass/sunglasses.html">sunglass</a></li>
                                <li><a href="#"> glass</a></li>
                            </ul>
                        </li>

                        <li>sort by &#58;
                            <ul>
                                <li><a href="#">낮은 가격</a></li>
                                <li><a href="#">높은 가격</a></li>
                                <li><a href="#">인기순</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <Product1 displayedItemInfo1={displayedItemInfo1} />
                <PageNation setPage={setPage}/>

            </div>
        </div>
    );
}

export default Sunglasses;