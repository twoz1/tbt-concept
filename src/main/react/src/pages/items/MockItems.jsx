import { createContext } from "react";

import s_bibiBlack_01 from '../../images/s_bibiBlack_01.jpeg';
import s_bibiBlack_02 from '../../images/s_bibiBlack_02.jpeg';
import s_bibiBlack_03 from '../../images/s_bibiBlack_03.jpeg';
import s_bibiBlack_04 from '../../images/s_bibiBlack_04.jpeg';

import s_evaCrystalVioletTint_01 from '../../images/s_evaCrystalVioletTint_01.jpg';
import s_evaCrystalVioletTint_02 from '../../images/s_evaCrystalVioletTint_02.jpg';
import s_evaCrystalVioletTint_03 from '../../images/s_evaCrystalVioletTint_03.jpg';
import s_evaCrystalVioletTint_04 from '../../images/s_evaCrystalVioletTint_04.jpg';

import s_hangangBlack_01 from '../../images/s_hangangBlack_01.jpeg';
import s_hangangBlack_02 from '../../images/s_hangangBlack_02.jpeg';
import s_hangangBlack_03 from '../../images/s_hangangBlack_03.jpeg';
import s_hangangBlack_04 from '../../images/s_hangangBlack_04.jpeg';

import s_orrBlack_01 from '../../images/s_orrBlack_01.jpeg';
import s_orrBlack_02 from '../../images/s_orrBlack_02.jpeg';
import s_orrBlack_03 from '../../images/s_orrBlack_03.jpeg';
import s_orrBlack_04 from '../../images/s_orrBlack_04.jpeg';

import s_roanGrayCystal_01 from '../../images/s_roanGrayCystal_01.jpg';
import s_roanGrayCystal_02 from '../../images/s_roanGrayCystal_02.jpg';
import s_roanGrayCystal_03 from '../../images/s_roanGrayCystal_03.jpg';
import s_roanGrayCystal_04 from '../../images/s_roanGrayCystal_04.jpg';

import s_scottCystalOrangeTint_01 from '../../images/s_scottCystalOrangeTint_01.jpg';
import s_scottCystalOrangeTint_02 from '../../images/s_scottCystalOrangeTint_02.jpg';
import s_scottCystalOrangeTint_03 from '../../images/s_scottCystalOrangeTint_03.jpg';
import s_scottCystalOrangeTint_04 from '../../images/s_scottCystalOrangeTint_04.jpg';

import s_tamdaBeige_01 from '../../images/s_tamdaBeige_01.jpg';
import s_tamdaBeige_02 from '../../images/s_tamdaBeige_02.jpg';
import s_tamdaBeige_03 from '../../images/s_tamdaBeige_03.jpg';
import s_tamdaBeige_04 from '../../images/s_tamdaBeige_04.jpg';

import s_depsBlack_01 from '../../images/s_depsBlack_01.jpeg';
import s_depsBlack_02 from '../../images/s_depsBlack_02.jpeg';
import s_depsBlack_03 from '../../images/s_depsBlack_03.jpeg';
import s_depsBlack_04 from '../../images/s_depsBlack_04.jpeg';

import g_andyBrownCrystal_01 from '../../images/g_andyBrownCrystal_01.jpg';
import g_andyBrownCrystal_02 from '../../images/g_andyBrownCrystal_02.jpg';
import g_andyBrownCrystal_03 from '../../images/g_andyBrownCrystal_03.jpg';
import g_andyBrownCrystal_04 from '../../images/g_andyBrownCrystal_04.jpg';


import g_antonCrystal_01 from '../../images/g_antonCrystal_01.jpg';
import g_antonCrystal_02 from '../../images/g_antonCrystal_02.jpg';
import g_antonCrystal_03 from '../../images/g_antonCrystal_03.jpg';
import g_antonCrystal_04 from '../../images/g_antonCrystal_04.jpg';

import g_boatPeach_01 from '../../images/g_boatPeach_01.jpg';
import g_boatPeach_02 from '../../images/g_boatPeach_02.jpg';
import g_boatPeach_03 from '../../images/g_boatPeach_03.jpg';
import g_boatPeach_04 from '../../images/g_boatPeach_04.jpg';

import g_landCrystal_01 from '../../images/g_landCrystal_01.jpg';
import g_landCrystal_02 from '../../images/g_landCrystal_02.jpg';
import g_landCrystal_03 from '../../images/g_landCrystal_03.jpg';
import g_landCrystal_04 from '../../images/g_landCrystal_04.jpg';

import g_quinbyBlack_01 from '../../images/g_quinbyBlack_01.jpg';
import g_quinbyBlack_02 from '../../images/g_quinbyBlack_02.jpg';
import g_quinbyBlack_03 from '../../images/g_quinbyBlack_03.jpg';
import g_quinbyBlack_04 from '../../images/g_quinbyBlack_04.jpg';

import g_quinbyGreyCrystal_01 from '../../images/g_quinbyGreyCrystal_01.jpg';
import g_quinbyGreyCrystal_02 from '../../images/g_quinbyGreyCrystal_02.jpg';
import g_quinbyGreyCrystal_03 from '../../images/g_quinbyGreyCrystal_03.jpg';
import g_quinbyGreyCrystal_04 from '../../images/g_quinbyGreyCrystal_04.jpg';

import g_sharonGoldCrystal_01 from '../../images/g_sharonGoldCrystal_01.jpg';
import g_sharonGoldCrystal_02 from '../../images/g_sharonGoldCrystal_02.jpg';
import g_sharonGoldCrystal_03 from '../../images/g_sharonGoldCrystal_03.jpg';
import g_sharonGoldCrystal_04 from '../../images/g_sharonGoldCrystal_04.jpg';

import g_tenaBlack_01 from '../../images/g_tenaBlack_01.jpg';
import g_tenaBlack_02 from '../../images/g_tenaBlack_02.jpg';
import g_tenaBlack_03 from '../../images/g_tenaBlack_03.jpg';
import g_tenaBlack_04 from '../../images/g_tenaBlack_04.jpg';
// import { useContext } from 'react'

const G_MockItemsArr = [
    {
        id: 0,
        name: 'Andy Brown Crystal',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_andyBrownCrystal_01,
        imageSide: g_andyBrownCrystal_02,
        imageSide_03: g_andyBrownCrystal_03,
        imageSide_04: g_andyBrownCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 1,
        name: 'Anton Crystal',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_antonCrystal_01,
        imageSide: g_antonCrystal_02,
        imageSide_03: g_antonCrystal_03,
        imageSide_04: g_antonCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,

    },
    {
        id: 2,
        name: 'Boat Peach',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_boatPeach_01,
        imageSide: g_boatPeach_02,
        imageSide_03: g_boatPeach_03,
        imageSide_04: g_boatPeach_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,

    },
    {
        id: 3,
        name: 'Land Crystal',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_landCrystal_01,
        imageSide: g_landCrystal_02,
        imageSide_03: g_landCrystal_03,
        imageSide_04: g_landCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC<br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 4,
        name: 'Quin by Black',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_quinbyBlack_01,
        imageSide: g_quinbyBlack_02,
        imageSide_03: g_quinbyBlack_03,
        imageSide_04: g_quinbyBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 5,
        name: 'Quin by GreyCrystal',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_quinbyGreyCrystal_01,
        imageSide: g_quinbyGreyCrystal_02,
        imageSide_03: g_quinbyGreyCrystal_03,
        imageSide_04: g_quinbyGreyCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 6,
        name: 'Sharon Gold Crystal',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_sharonGoldCrystal_01,
        imageSide: g_sharonGoldCrystal_02,
        imageSide_03: g_sharonGoldCrystal_03,
        imageSide_04: g_sharonGoldCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 7,
        name: 'Tena Black',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_tenaBlack_01,
        imageSide: g_tenaBlack_02,
        imageSide_03: g_tenaBlack_03,
        imageSide_04: g_tenaBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,

    },
    {
        id: 8,
        name: 'Quin by Black',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_quinbyBlack_01,
        imageSide: g_quinbyBlack_02,
        imageSide_03: g_quinbyBlack_03,
        imageSide_04: g_quinbyBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 9,
        name: 'Quin by GreyCrystal',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_quinbyGreyCrystal_01,
        imageSide: g_quinbyGreyCrystal_02,
        imageSide_03: g_quinbyGreyCrystal_03,
        imageSide_04: g_quinbyGreyCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 10,
        name: 'Sharon Gold Crystal',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_sharonGoldCrystal_01,
        imageSide: g_sharonGoldCrystal_02,
        imageSide_03: g_sharonGoldCrystal_03,
        imageSide_04: g_sharonGoldCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 11,
        name: 'Tena Black',
        price: 99000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_tenaBlack_01,
        imageSide: g_tenaBlack_02,
        imageSide_03: g_tenaBlack_03,
        imageSide_04: g_tenaBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,

    },
    {
        id: 12,
        name: 'Andy Brown Crystal',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_andyBrownCrystal_01,
        imageSide: g_andyBrownCrystal_02,
        imageSide_03: g_andyBrownCrystal_03,
        imageSide_04: g_andyBrownCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
    {
        id: 13,
        name: 'Anton Crystal',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_antonCrystal_01,
        imageSide: g_antonCrystal_02,
        imageSide_03: g_antonCrystal_03,
        imageSide_04: g_antonCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,

    },
    {
        id: 14,
        name: 'Boat Peach',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_boatPeach_01,
        imageSide: g_boatPeach_02,
        imageSide_03: g_boatPeach_03,
        imageSide_04: g_boatPeach_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC <br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,

    },
    {
        id: 15,
        name: 'Land Crystal',
        price: 81000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: g_landCrystal_01,
        imageSide: g_landCrystal_02,
        imageSide_03: g_landCrystal_03,
        imageSide_04: g_landCrystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        프레임 정면 147mm, 렌즈 가로 48mm, 렌즈 높이 42mm, 렌즈 사이 13mm, 프레임 옆면 150mm, 무게 24g 소재 metal, TR, PC<br /><br />
        코받침, 리벳, 경첩 부분 나사 컬러는 부자재 소모품으로 제작 시기마다 실버&골드 변경될 수 있습니다
        </p>,
    },
]


 const S_MockItemsArr = [
    {
        id: 0,
        name: 'Bibi Black',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_bibiBlack_01,
        imageSide: s_bibiBlack_02,
        imageSide_03: s_bibiBlack_03,
        imageSide_04: s_bibiBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 1,
        name: 'Eva Crystal Violet Tint',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_evaCrystalVioletTint_01,
        imageSide: s_evaCrystalVioletTint_02,
        imageSide_03: s_evaCrystalVioletTint_03,
        imageSide_04: s_evaCrystalVioletTint_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
    {
        id: 2,
        name: 'Hangang Black',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_hangangBlack_01,
        imageSide: s_hangangBlack_02,
        imageSide_03: s_hangangBlack_03,
        imageSide_04: s_hangangBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
    {
        id: 3,
        name: 'Orr Black',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_orrBlack_01,
        imageSide: s_orrBlack_02,
        imageSide_03: s_orrBlack_03,
        imageSide_04: s_orrBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
    {
        id: 4,
        name: 'Roan Gray Cystal',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_roanGrayCystal_01,
        imageSide: s_roanGrayCystal_02,
        imageSide_03: s_roanGrayCystal_03,
        imageSide_04: s_roanGrayCystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 5,
        name: 'Scott Cystal Orange Tint',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_scottCystalOrangeTint_01,
        imageSide: s_scottCystalOrangeTint_02,
        imageSide_03: s_scottCystalOrangeTint_03,
        imageSide_04: s_scottCystalOrangeTint_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 6,
        name: 'Tamda Beige',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_tamdaBeige_01,
        imageSide: s_tamdaBeige_02,
        imageSide_03: s_tamdaBeige_03,
        imageSide_04: s_tamdaBeige_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 7,
        name: 'Deps Black',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_depsBlack_01,
        imageSide: s_depsBlack_02,
        imageSide_03: s_depsBlack_03,
        imageSide_04: s_depsBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
    
    {
        id: 8,
        name: 'Roan Gray Cystal',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_roanGrayCystal_01,
        imageSide: s_roanGrayCystal_02,
        imageSide_03: s_roanGrayCystal_03,
        imageSide_04: s_roanGrayCystal_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 9,
        name: 'Scott Cystal Orange Tint',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_scottCystalOrangeTint_01,
        imageSide: s_scottCystalOrangeTint_02,
        imageSide_03: s_scottCystalOrangeTint_03,
        imageSide_04: s_scottCystalOrangeTint_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 10,
        name: 'Tamda Beige',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_tamdaBeige_01,
        imageSide: s_tamdaBeige_02,
        imageSide_03: s_tamdaBeige_03,
        imageSide_04: s_tamdaBeige_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 11,
        name: 'Deps Black',
        price: 249000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_depsBlack_01,
        imageSide: s_depsBlack_02,
        imageSide_03: s_depsBlack_03,
        imageSide_04: s_depsBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
    {
        id: 12,
        name: 'Bibi Black',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_bibiBlack_01,
        imageSide: s_bibiBlack_02,
        imageSide_03: s_bibiBlack_03,
        imageSide_04: s_bibiBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,

    },
    {
        id: 13,
        name: 'Eva Crystal Violet Tint',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_evaCrystalVioletTint_01,
        imageSide: s_evaCrystalVioletTint_02,
        imageSide_03: s_evaCrystalVioletTint_03,
        imageSide_04: s_evaCrystalVioletTint_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
    {
        id: 14,
        name: 'Hangang Black',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_hangangBlack_01,
        imageSide: s_hangangBlack_02,
        imageSide_03: s_hangangBlack_03,
        imageSide_04: s_hangangBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
    {
        id: 15,
        name: 'Orr Black',
        price: 169000,
        quantity: 1,
        isDone : false,
        link: './items/DetailedPage',
        imageFront: s_orrBlack_01,
        imageSide: s_orrBlack_02,
        imageSide_03: s_orrBlack_03,
        imageSide_04: s_orrBlack_04,
        shopThis: 'SHOP THIS',
        summary : 
        <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
        </p>,
    },
]

const mockItemsContext = createContext({ sArr: S_MockItemsArr, gArr: G_MockItemsArr });
export default mockItemsContext;