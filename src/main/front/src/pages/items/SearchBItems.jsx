
import '../../styles/items/Glasses.css'
import { useState, useReducer ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../customHooks/useScrollToTop';
import axios from 'axios';
import Pagination from '../customHooks/Pagination';
import SearchBItemsList from './components/SearchBItemsList';

const SearchBItems = () => {
    useScrollToTop();

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
    

    const [data, setData] = useState([]);
    const [array, dispatch] = useReducer(arrayReducer, []);



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
    const displayedItemInfo = array.slice(startIndex, endIndex);

    const handleSort = (type) => {
        dispatch({ type });
    };
    
    return (
        <div className='Glasses'>
            <div className="center m_c">
                <div className="title_route">
                    <h2><strong>Search</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>검색결과</li>
                    </ul>
                </div>

                <SearchBItemsList displayedItemInfo={displayedItemInfo} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} data={data} />

            </div>
        </div>
    );
}

export default SearchBItems;



