import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../customHooks/useScrollToTop';

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

const Product = ({ displayedItemInfo }) => {

  useScrollToTop();
  
  const itemsPerRow = 4;
  const rows = Math.ceil(displayedItemInfo.length / itemsPerRow);

  for (let d of displayedItemInfo) {
    console.log("안경 list -> " + d.product_id);
  }
  console.log("안경 list" + displayedItemInfo);

  return (
    <div className="photo_line">
      {[...Array(rows)].map((_, rowIndex) => (
        <div className="photo_layout cf" key={rowIndex}>
          <ul>
            {displayedItemInfo
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map(item => renderItem(item))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Product;