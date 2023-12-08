import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../customHooks/useScrollToTop';
import { useState } from 'react';
import Pagination from '../../customHooks/Pagination';

const renderItem = (item) => (
  <li className="photo_2" key={item.product_id}>
    <Link to={`/detail/${item.product_id}`} key={item.product_id} className="product_photo">
      <img src={require(`../../../images/${item.product_img1}`)} alt="Front View" />
      <img src={require(`../../../images/${item.product_img2}`)} alt="Side View" />
    </Link>
    <div className="item_name"><span>{item.product_name}</span></div>
    <div className="item_price"><span>{item.product_price ? item.product_price.toLocaleString() : '가격 정보 없음'}원</span></div>
    <div className="shop_this">
      <Link to={`/detail/${item.product_id}`} key={item.product_id} >
        <span>SHOP THIS &#62;</span>
      </Link>
    </div>
  </li>
);


// ================================================================================

const SearchBItemsList = () => {

  useScrollToTop();

  // 검색창 결과 출력을 위한 localStorage
  const [resultSearchP, setResultSearchP] = useState(JSON.parse(localStorage.getItem('searchProdsList')));
  console.log(resultSearchP);


  const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
  const itemsPerPage = 8;  // 페이지 당 게시글 개수
  const totalPages = Math.ceil(resultSearchP.length / itemsPerPage); // 전체 페이지 번호

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const searchProdsLists = resultSearchP.slice(startIndex, endIndex);

  const itemsPerRow = 4;
  const rows = Math.ceil(searchProdsLists.length / itemsPerRow);

  return (
    <React.Fragment>
      {!searchProdsLists || searchProdsLists.length === 0 ? (
        <div class="searchNull">
          검색 결과가 없습니다.
        </div>
      ) : (
        <div className="photo_line">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="photo_layout cf" key={rowIndex}>
              <ul>
                {searchProdsLists
                  .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                  .map(item => renderItem(item))}
              </ul>
            </div>
          ))}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} data={resultSearchP} />
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchBItemsList;