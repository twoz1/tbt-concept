import { createContext } from "react";

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
import { useContext } from 'react'

const MockItemsArr = [
    {
        id: 0,
        name: 'Andy Brown Crystal',
        price: 81000,
        link: './items/DetailedPage',
        imageFront: g_andyBrownCrystal_01,
        imageSide: g_andyBrownCrystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 1,
        name: 'Anton Crystal',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: g_antonCrystal_01,
        imageSide: g_antonCrystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 2,
        name: 'Boat Peach',
        price: 81000,
        link: './items/DetailedPage',
        imageFront: g_boatPeach_01,
        imageSide: g_boatPeach_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 3,
        name: 'Land Crystal',
        price: 81000,
        link: './items/DetailedPage',
        imageFront: g_landCrystal_01,
        imageSide: g_landCrystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 4,
        name: 'Quin by Black',
        price: 81000,
        link: './items/DetailedPage',
        imageFront: g_quinbyBlack_01,
        imageSide: g_quinbyBlack_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 5,
        name: 'Quin by GreyCrystal',
        price: 81000,
        link: './items/DetailedPage',
        imageFront: g_quinbyGreyCrystal_01,
        imageSide: g_quinbyGreyCrystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 6,
        name: 'sharon Gold Crystal',
        price: 81000,
        link: './items/DetailedPage',
        imageFront: g_sharonGoldCrystal_01,
        imageSide: g_sharonGoldCrystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 7,
        name: 'tena Black',
        price: 81000,
        link: './items/DetailedPage',
        imageFront: g_tenaBlack_01,
        imageSide: g_tenaBlack_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 8,
        name: 'Bibi Black',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: s_bibiBlack_01,
        imageSide: s_bibiBlack_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 9,
        name: 'Eva Crystal Violet Tint',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: s_evaCrystalVioletTint_01,
        imageSide: s_evaCrystalVioletTint_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 10,
        name: 'Hangang Black',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: s_hangangBlack_01,
        imageSide: s_hangangBlack_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 11,
        name: 'Orr Black',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: s_orrBlack_01,
        imageSide: s_orrBlack_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 12,
        name: 'Roan Gray Cystal',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: s_roanGrayCystal_01,
        imageSide: s_roanGrayCystal_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 13,
        name: 'Scott Cystal Orange Tint',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: s_scottCystalOrangeTint_01,
        imageSide: s_scottCystalOrangeTint_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 14,
        name: 'Tamda Beige',
        price: 169000,
        link: './items/DetailedPage',
        imageFront: s_tamdaBeige_01,
        imageSide: s_tamdaBeige_02,
        shopThis: 'SHOP THIS',
    },
    {
        id: 15,
        name: 'Deps Black',
        price: '169.000원',
        link: './items/DetailedPage',
        imageFront: s_depsBlack_01,
        imageSide: s_depsBlack_02,
        shopThis: 'SHOP THIS',
    }
]

const mockItemsContext = createContext(MockItemsArr);

export default mockItemsContext;
