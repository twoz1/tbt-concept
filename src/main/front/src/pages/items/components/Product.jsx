import React from 'react';
import { Link } from 'react-router-dom';
// import useScrollToTop from '../../customHooks/useScrollToTop';

const renderItem = (item) => (
  <li className="photo_2" key={item.product_id}>
    <Link to={`/detail/${item.product_name}`} key={item.product_name} className="product_photo">
      <img src={item.product_img1} alt="Front View" />
      <img src={item.product_img2} alt="Side View" />
    </Link>
    <div className="item_name"><span>{item.product_name}</span></div>
    <div className="item_price"><span>{item.product_price ? item.product_price.toLocaleString() : '가격 정보 없음'}</span></div>
    <div className="shop_this">
      <Link to={`/detail/${item.product_name}`} key={item.product_name} >
        {/* <a>{item.shopThis} &#62;</a> */}
      </Link>
    </div>
  </li>
);


// ================================================================================

const Product = ({ displayedItemInfo }) => {
  // useScrollToTop();
  const itemsPerRow = 4;
  const rows = Math.ceil(displayedItemInfo.length / itemsPerRow);

  return (
    <div className="photo_line">
      {[...Array(rows)].map((_, rowIndex) => (
        <div className="photo_layout cf" key={rowIndex}>
          <ul>
            {displayedItemInfo
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map(item => renderItem({ item }))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Product;