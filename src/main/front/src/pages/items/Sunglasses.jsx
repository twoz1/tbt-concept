
import '../../styles/items/Glasses.css'
// import Category from './components/Category';
import Product1 from './components/Product1';
import PageNation from './components/PageNation';
import { useState, useReducer } from 'react';
// import { useParams } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import mockItemsContext from './MockItems';
import useScrollToTop from '../customHooks/useScrollToTop';
import axios from 'axios';


const Sunglasses = () => {

    useScrollToTop();
    const arrayReducer = (state, action) => {
        switch (action.type) {
            case "low":
                return state ? [...state].sort((a, b) => a.product_price - b.price) : [];
            case "high":
                return state ? [...state].sort((a, b) => b.price - a.price) : [];
            case "set":
                return action.payload;
            default:
                return state || [];
        }
    };

    // const { id } = useParams();
    //const { sArr } = useContext(mockItemsContext);
    // const eachProductListSelected = eachProductList.find(product => product.id === parseInt(id));
    
    //const [data, setData] = useState([]);
   

    const [data, setData] = useState([]);
    const [array, dispatch] = useReducer(arrayReducer, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/pSListDesc');
                setData(response.data);
                
            } catch (err) {
                alert(`** product db 연결 실패 => ${err.message}`);
            }
        };

        fetchData();
    }, []);
    
    console.log("-", data);
    useEffect(() => {
        // 데이터가 업데이트될 때마다 useReducer의 초기 상태를 설정
        dispatch({ type: 'set', payload: data });
    }, [data]);


    //const [array, dispatch] = useReducer(arrayReducer, data);
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo1 = array.slice(startIndex, startIndex + itemsPerPage);

    const handleSort = (type) => {
        dispatch({ type });
    };

    console.log("->", array);


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
                                <li><Link to='/sunglasses'>sunglasses</Link></li>
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
                <PageNation setPage={setPage} data={data}  />

            </div>
        </div>
    );
}

export default Sunglasses;