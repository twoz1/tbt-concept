import React from 'react';
import { Link } from 'react-router-dom';

const renderItem = (item) => (
  <li className="photo_2" key={item.name}>
    <Link to={`/detail/${item.id}`} key={item.id} className="product_photo">
      <img src={item.imageFront} alt="Front View" />
      <img src={item.imageSide} alt="Side View" />
    </Link>
    <div className="item_name"><span>{item.name}</span></div>
    <div className="item_price"><span>{item.price}</span></div>
    <div className="shop_this"><a>{item.shopThis} &#62;</a></div>
  </li>
);

// =============================================================================

const Product1 = ({ displayedItemInfo1 }) => {
  const itemsPerRow = 4;
  const rows = Math.ceil(displayedItemInfo1.length / itemsPerRow);

  return (
    <div className="photo_line">
      {[...Array(rows)].map((_, rowIndex) => (
        <div className="photo_layout cf" key={rowIndex}>
          <ul>
            {displayedItemInfo1
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map(renderItem)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Product1;