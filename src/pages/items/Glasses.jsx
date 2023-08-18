
import '../../styles/items/Glasses.css'
import Category from './components/Category';
import Product from './components/Product';
import PageNation from './components/PageNation';
import { useState } from 'react';

import g_andyBrownCrystal_01 from '../../images/g_andyBrownCrystal_01.jpg'
import g_andyBrownCrystal_02 from '../../images/g_andyBrownCrystal_02.jpg'

import g_antonCrystal_01 from '../../images/g_antonCrystal_01.jpg'
import g_antonCrystal_02 from '../../images/g_antonCrystal_02.jpg'

import g_boatPeach_01 from '../../images/g_boatPeach_01.jpg'
import g_boatPeach_02 from '../../images/g_boatPeach_02.jpg'

import g_landCrystal_01 from '../../images/g_landCrystal_01.jpg'
import g_landCrystal_02 from '../../images/g_landCrystal_02.jpg'

import g_quinbyBlack_01 from '../../images/g_quinbyBlack_01.jpg'
import g_quinbyBlack_02 from '../../images/g_quinbyBlack_02.jpg'

import g_quinbyGreyCrystal_01 from '../../images/g_quinbyGreyCrystal_01.jpg'
import g_quinbyGreyCrystal_02 from '../../images/g_quinbyGreyCrystal_02.jpg'

import g_sharonGoldCrystal_01 from '../../images/g_sharonGoldCrystal_01.jpg'
import g_sharonGoldCrystal_02 from '../../images/g_sharonGoldCrystal_02.jpg'

import g_tenaBlack_01 from '../../images/g_tenaBlack_01.jpg'
import g_tenaBlack_02 from '../../images/g_tenaBlack_02.jpg'

const Glasses = () => {


    const products = [{

        name: 'Andy Brown Crystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_andyBrownCrystal_01,
        imageSide: g_andyBrownCrystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        name: 'Anton Crystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_antonCrystal_01,
        imageSide: g_antonCrystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Boat Peach',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_boatPeach_01,
        imageSide: g_boatPeach_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Land Crystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_landCrystal_01,
        imageSide: g_landCrystal_02,
        shopThis: 'SHOP THIS',

    },
    {

        name: 'Quin by Black',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_quinbyBlack_01,
        imageSide: g_quinbyBlack_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Quin by GreyCrystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_quinbyGreyCrystal_01,
        imageSide: g_quinbyGreyCrystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'sharon Gold Crystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_sharonGoldCrystal_01,
        imageSide: g_sharonGoldCrystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'tena Black',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_tenaBlack_01,
        imageSide: g_tenaBlack_02,
        shopThis: 'SHOP THIS',

    },
    {

        name: 'Quin by Black',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_quinbyBlack_01,
        imageSide: g_quinbyBlack_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Quin by GreyCrystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_quinbyGreyCrystal_01,
        imageSide: g_quinbyGreyCrystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'sharon Gold Crystal_01',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_sharonGoldCrystal_01,
        imageSide: g_sharonGoldCrystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'tena Black',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_tenaBlack_01,
        imageSide: g_tenaBlack_02,
        shopThis: 'SHOP THIS',

    }, {

        name: 'Andy Brown Crystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_andyBrownCrystal_01,
        imageSide: g_andyBrownCrystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        name: 'Anton Crystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_antonCrystal_01,
        imageSide: g_antonCrystal_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Boat Peach',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_boatPeach_01,
        imageSide: g_boatPeach_02,
        shopThis: 'SHOP THIS',

    },
    {
        name: 'Land Crystal',
        price: '81,000원',
        link: './items/DetailedPage',
        imageFront: g_landCrystal_01,
        imageSide: g_landCrystal_02,
        shopThis: 'SHOP THIS',

    },

    ]

  

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo = products.slice(startIndex, startIndex + itemsPerPage);
  
    return (
        <div className='Glasses'>
            <div className="center m_c">

                <div id="banner">
                    <img src={require("../../images/glassesBanner.jpg")} alt="glasses_banner_img" />
                </div>

                <div className="title_route">
                    <h2><strong>GLASSES</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>GLASSES</li>
                    </ul>
                </div>

                <div id="category">
                    <ul>
                        <li>category
                            <ul>
                                <li>sunglasses</li>
                                <li>glasses</li>
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

                <Product displayedItemInfo={displayedItemInfo} />
                <PageNation setPage={setPage}/>

            </div>
        </div>
    );
}

export default Glasses;