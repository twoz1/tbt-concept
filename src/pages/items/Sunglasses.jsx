
import '../../styles/items/Glasses.css'
// import Category from './components/Category';
import Product1 from './components/Product1';
import PageNation from './components/PageNation';
import { useState, useReducer } from 'react';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import mockItemsContext from './MockItems';


const Sunglasses = () => {

    const arrayReducer = (state, action) => {
        switch (action.type) {
            //   case "popular":
            //     return [...state].sort((a, b) => b.clicked - a.clicked);
            case "low":
                return [...state].sort((a, b) => a.price - b.price);
            case "high":
                return [...state].sort((a, b) => b.price - a.price);
            //   case "new":
            //     return iteminfo;
        }
    };

    const { id } = useParams();
    const {sArr} = useContext(mockItemsContext);
    // const eachProductListSelected = eachProductList.find(product => product.id === parseInt(id));
    const [array, dispatch] = useReducer(arrayReducer, sArr);
    console.log(sArr);

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo1 = array.slice(startIndex, startIndex + itemsPerPage);

    const handleSort = (type) => {
        dispatch({ type });
    };

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
                                <li><Link to='/glasses'> glasses</Link></li>
                                <li><Link to='/'>sunglasses</Link></li>
                            </ul>
                        </li>

                        <li>sort by &#58;
                            <ul>
                                {/* <li onClick={() => dispatch({ type: "popular" })}>인기순</li> */}
                                <li onClick={() => handleSort("low")}><a>낮은가격순</a></li>
                                <li onClick={() => handleSort("high")}><a>높은가격순</a></li>
                                {/* <li onClick={() => dispatch({ type: "new" })}>신상품순</li> */}

                            </ul>
                        </li>
                    </ul>
                </div>

                <Product1 displayedItemInfo1={displayedItemInfo1} />
                <PageNation setPage={setPage} />

            </div>
        </div>
    );
}

export default Sunglasses;