import React from 'react';
import { Link } from 'react-router-dom';

const renderItem = ({ item }) => (
  <li className="photo_2" key={item.product_id}>
    <Link to={`/detail/${item.product_name}`} key={item.product_name} className="product_photo">
      <img src={item.product_img1} alt="Front View" />
      <img src={item.product_img2} alt="Side View" />
    </Link>
    <div className="item_name"><span>{item.product_name}</span></div>
    <div className="item_price"><span>{item.product_price.toLocaleString()}원</span></div>
    <div className="shop_this">
      <Link to={`/detail/${item.product_name}`} key={item.product_name} >
        {/* <a>{item.shopThis} &#62;</a> */}
      </Link>
    </div>
  </li>
);

const Product1 = ({ displayedItemInfo1 }) => {


  const itemsPerRow = 4;
  const rows = Math.ceil(displayedItemInfo1.length / itemsPerRow);

  for (let d of displayedItemInfo1) {
    console.log("선글라스 list" + d.product_id);
  }
  console.log("선글라스 list" + displayedItemInfo1);

  return (
    <div className="photo_line">
      {[...Array(rows)].map((_, rowIndex) => (
        <div className="photo_layout cf" key={rowIndex}>
          <ul>
            {displayedItemInfo1
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map(item => renderItem({ item }))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Product1;