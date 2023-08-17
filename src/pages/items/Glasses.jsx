
import '../../styles/items/Glasses.css'
import Category from './components/Category';
import NextPage from './components/NextPage';
import Product from './components/Product';

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



// import glassesBanner from '../../images/glassesBanner.jpg'


const products=[{

    name : 'Andy Brown Crystal',
    price : '81,000원',
    link : './items/DetailedPage',
    imageFront : g_andyBrownCrystal_01 ,
    imageSide : g_andyBrownCrystal_02 ,
    shopThis : 'SHOP THIS',
},
{
    name : 'Anton Crystal',
    price : '81,000원',
    link : './items/DetailedPage',
    imageFront : g_antonCrystal_01 ,
    imageSide : g_antonCrystal_02 ,
    shopThis : 'SHOP THIS',

},
{
    name : 'Boat Peach',
    price : '81,000원',
    link : './items/DetailedPage',
    imageFront : g_boatPeach_01 ,
    imageSide : g_boatPeach_02 ,
    shopThis : 'SHOP THIS',

},
{
    name : 'Land Crystal',
    price : '81,000원',
    link : './items/DetailedPage',
    imageFront : g_landCrystal_01 ,
    imageSide : g_landCrystal_02 ,
    shopThis : 'SHOP THIS',

},

]

const secondLineProducts=[{

name : 'Quin by Black',
price : '81,000원',
link : './items/DetailedPage',
imageFront : g_quinbyBlack_01 ,
imageSide : g_quinbyBlack_02 ,
shopThis : 'SHOP THIS',

},
{
name : 'Quin by GreyCrystal',
price : '81,000원',
link : './items/DetailedPage',
imageFront : g_quinbyGreyCrystal_01 ,
imageSide : g_quinbyGreyCrystal_02 ,
shopThis : 'SHOP THIS',

},
{
name : 'sharon Gold Crystal_01',
price : '81,000원',
link : './items/DetailedPage',
imageFront : g_sharonGoldCrystal_01 ,
imageSide : g_sharonGoldCrystal_02 ,
shopThis : 'SHOP THIS',

},
{
name : 'tena Black',
price : '81,000원',
link : './items/DetailedPage',
imageFront : g_tenaBlack_01 ,
imageSide : g_tenaBlack_02 ,
shopThis : 'SHOP THIS',

},
]



const Glasses = () => {
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

                <Category></Category>
                <Product products={products} secondLineProducts={secondLineProducts}/>
                <div className="next_page">
                    <span>1</span>
                    <span>2 </span>
                </div>
            </div>
        </div>
    );
}

export default Glasses;