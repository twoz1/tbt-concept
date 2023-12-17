
import '../../styles/items/Glasses.css'
import Product from './components/Product';
import { useState, useReducer ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../customHooks/useScrollToTop';
import axios from 'axios';
import Pagination from '../customHooks/Pagination';



const Glasses = () => {
    useScrollToTop();

    const arrayReducer = (state, action) => {
        switch (action.type) {
            // case "popular" :
            //     return state ? [...state].sort((a , b) => a.product_stock - b.product_stock) :[];
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
                const response = await axios.get('/product/pGListDesc');
                setData(response.data);
                
            } catch (err) {
                alert(`** product db 연결 실패 => ${err.message}`);
            }
        };

        fetchData();
    }, []);

    const [pgdata, setPSData] = useState([]);

    useEffect(() => {
        let url = "/product/pGSales/";

        axios.get(url).then(response => {
            setPSData(response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("productSales 오류 다시 시도하세요.");
            } else {
                alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);
    
    
    const handleSort = (type) => {
        dispatch({ type });
    };
    
    useEffect(() => {
        dispatch({ type: 'set', payload: data });
    }, [data]);
    

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(data.length / itemsPerPage); 

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItemInfo = array.slice(startIndex, endIndex);


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
                                    {/* <li onClick={() => handleSort( "popular")}><a>상품판매순</a></li> */}
                                    <li onClick={() => handleSort("low")}><a>낮은가격순</a></li>
                                    <li onClick={() => handleSort("high")}><a>높은가격순</a></li>
                                    {/* <li onClick={() => dispatch({ type: "new" })}>신상품순</li> */}
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>

                <Product displayedItemInfo={displayedItemInfo} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} data={data} />

            </div>
        </div>
    );
}

export default Glasses;



