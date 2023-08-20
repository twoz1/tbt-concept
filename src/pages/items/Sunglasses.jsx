
import '../../styles/items/Glasses.css'
// import Category from './components/Category';
import Product1 from './components/Product1';
import PageNation from './components/PageNation';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import mockItemsContext from './MockItems';


const Sunglasses = () => {

    const { id } = useParams();
    const eachProductList = useContext(mockItemsContext);
    // const eachProductListSelected = eachProductList.find(product => product.id === parseInt(id));
    console.log(eachProductList);

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = page + 15;
    const displayedItemInfo1 = eachProductList.slice(startIndex, startIndex + itemsPerPage);
  
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
                                <li><Link to ='/glasses'> glasses</Link></li>
                                <li><Link to ='/'>sunglasses</Link></li>
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