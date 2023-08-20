

import '../../styles/items/Glasses.css'
import Category from './components/Category';
import Product from './components/Product';
import PageNation from './components/PageNation';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import mockItemsContext from './MockItems';
import { Link } from 'react-router-dom';



const Glasses = () => {
    const { id } = useParams();
    const eachProductList = useContext(mockItemsContext);
    console.log(eachProductList);

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo = eachProductList.slice(startIndex, startIndex + itemsPerPage);
  
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
                                <li><Link to = '/sunglasses'>sunglasses</Link></li>
                                <li><Link to = '/'>glasses</Link></li>
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




