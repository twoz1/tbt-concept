
import '../../styles/items/Glasses.css'
// import Category from './components/Category';
import Product from './components/Product';
import PageNation from './components/PageNation';
import { useState, useReducer } from 'react';
// import { useParams } from "react-router-dom";
import { useContext } from 'react';
import mockItemsContext from './MockItems';
import { Link } from 'react-router-dom';



const Glasses = () => {

    // ======== 상품 정렬을 위한 reducer 함수 시작 ========
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


    // const { id } = useParams();
    const {gArr} = useContext(mockItemsContext);
    const [array, dispatch] = useReducer(arrayReducer, gArr);
    // console.log(eachProductList);

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo = array.slice(startIndex, startIndex + itemsPerPage);

    const handleSort = (type) => {
        dispatch({ type });
    };

    return (
        <div className='Glasses'>
            <div className="center m_c">

                <div id="banner">
                    <img src={require("../../images/glassesBanner.jpg")} alt="glasses_banner_img" />
                </div>

                <div className="title_route">
                    <h2><strong>GLASSES</strong></h2>

                </div>

                <div id="category">
                    <ul>
                        <li>category
                            <ul>
                                <li><Link to='/sunglasses'>sunglasses</Link></li>
                                <li><Link to='/glasses'>glasses</Link></li>
                            </ul>
                        </li>

                        <li>sort by &#58;
                            <ul>
                                <ul>
                                    {/* <li onClick={() => dispatch({ type: "popular" })}>인기순</li> */}
                                    <li onClick={() => handleSort("low")}><a>낮은가격순</a></li>
                                    <li onClick={() => handleSort("high")}><a>높은가격순</a></li>
                                    {/* <li onClick={() => dispatch({ type: "new" })}>신상품순</li> */}

                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>

                <Product displayedItemInfo={displayedItemInfo} />
                <PageNation setPage={setPage} />

            </div>
        </div>
    );
}

export default Glasses;



