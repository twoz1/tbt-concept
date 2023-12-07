
import '../../styles/items/Glasses.css'
import { useState, useEffect} from 'react';
import useScrollToTop from '../customHooks/useScrollToTop';
import Pagination from '../customHooks/Pagination';
import SearchBItemsList from './components/SearchBItemsList';

const SearchBItems = () => {
    useScrollToTop();

    // 검색창 결과 출력을 위한 localStorage
    const searchProdsList = JSON.parse(localStorage.getItem('searchProdsList'));

    const [resultSearchP, setResultSearchP] = useState([]);

    useEffect(() => {
        setResultSearchP(searchProdsList);
    }, [resultSearchP]);

    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
    const itemsPerPage = 8;  // 페이지 당 게시글 개수
    const totalPages = Math.ceil(resultSearchP.length / itemsPerPage);    // 전체 페이지 번호

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const searchProdsLists = resultSearchP.slice(startIndex, endIndex);

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

                <SearchBItemsList searchProdsLists={searchProdsLists} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} data={resultSearchP} />

            </div>
        </div>
    );
}

export default SearchBItems;



