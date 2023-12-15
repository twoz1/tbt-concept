
import '../../styles/items/Glasses.css'
// import Category from './components/Category';
import Product1 from './components/Product1';
import { useState, useReducer } from 'react';
// import { useParams } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import mockItemsContext from './MockItems';
import useScrollToTop from '../customHooks/useScrollToTop';
import axios from 'axios';
import Pagination from '../customHooks/Pagination';


const Sunglasses = () => {

    useScrollToTop();

    const arrayReducer = (state, action) => {
        switch (action.type) {
            case "popular" :
                return state ? [...state].sort((a , b) => a.product_stock - b.product_stock) :[];
            case "low":
                return state ? [...state].sort((a, b) => a.product_price - b.product_price) : [];
            case "high":
                return state ? [...state].sort((a, b) => b.product_price - a.product_price) : [];
            case "set":
                return action.payload;
            default:
                return state || [];
        }
    };

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




    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
    const itemsPerPage = 8;  // 페이지 당 게시글 개수
    const totalPages = Math.ceil(data.length / itemsPerPage);    // 전체 페이지 번호

    const handlePageChange = (page) => {
        
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItemInfo1 = array.slice(startIndex, endIndex);


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
                            {/* <li onClick={() => handleSort( "popular")}><a>상품판매순</a></li> */}
                                <li onClick={() => handleSort("low")}><a>낮은가격순</a></li>
                                <li onClick={() => handleSort("high")}><a>높은가격순</a></li>
                                {/* <li onClick={() => dispatch({ type: "new" })}>신상품순</li> */}

                            </ul>
                        </li>
                    </ul>
                </div>

                <Product1 displayedItemInfo1={displayedItemInfo1} />

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

            </div>
        </div>
    );
}

export default Sunglasses;