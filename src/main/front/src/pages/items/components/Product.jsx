import React from 'react';
import { Link } from 'react-router-dom';
// import useScrollToTop from '../../customHooks/useScrollToTop';

const renderItem = (item) => (
  <li className="photo_2" key={item.name}>
    <Link to={`/detail/${item.name}`} key={item.name} className="product_photo">
      <img src={item.imageFront} alt="Front View" />
      <img src={item.imageSide} alt="Side View" />
    </Link>
    <div className="item_name"><span>{item.name}</span></div>
    <div className="item_price"><span>{item.price.toLocaleString()}원</span></div>
    <div className="shop_this">
    <Link to={`/detail/${item.name}`} key={item.name} >
      <a>{item.shopThis} &#62;</a>
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
              .map(renderItem)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Product;