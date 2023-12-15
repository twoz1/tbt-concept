import React from 'react';
import { Link } from 'react-router-dom';

const renderItem = ({ item }) => (
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
      {item.product_stock == 0 ? <span className='soldOut'>품절</span> : <span className='soldOut'></span> }
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