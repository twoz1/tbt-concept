
import '../../styles/items/Glasses.css'
// import Category from './components/Category';
import Product from './components/Product';
import PageNation from './components/PageNation';
import { useState, useReducer ,useEffect} from 'react';
// import { useParams } from "react-router-dom";
import { useContext } from 'react';
import mockItemsContext from './MockItems';
import { Link } from 'react-router-dom';
import useScrollToTop from '../customHooks/useScrollToTop';
import axios from 'axios';



const Glasses = () => {
    useScrollToTop();
    // ======== 상품 정렬을 위한 reducer 함수 시작 ========
    const arrayReducer = (state, action) => {
        switch (action.type) {
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
    
    // const { id } = useParams();
    //const {gArr} = useContext(mockItemsContext);
    //const [array, dispatch] = useReducer(arrayReducer, gArr);
    // console.log(eachProductList);

    const [data, setData] = useState([]);
    const [array, dispatch] = useReducer(arrayReducer, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/product/pGListDesc');
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



    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (page - 1) * itemsPerPage;
    const displayedItemInfo = array.slice(startIndex, startIndex + itemsPerPage);

    const handleSort = (type) => {
        dispatch({ type });
    };

    console.log("->", array);
    
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
                        <li>Glasses</li>
                    </ul>

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
                <PageNation setPage={setPage}  />

            </div>
        </div>
    );
}

export default Glasses;



