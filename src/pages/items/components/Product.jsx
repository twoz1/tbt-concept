import React from 'react';

const Product = ({ products, secondLineProducts }) => {
  return (
    <div className="photo_line">
      <div className="photo_layout cf">
        <ul>
          {products.map((product) => (
            <li className="photo_2" key={product.name}>
              <a href={product.link} className="product_photo">
                <img src={product.imageFront} alt="Front View" />
                <img src={product.imageSide} alt="Side View" />
              </a>
              <div className="item_name"><span>{product.name}</span></div>
              <div className="item_price"><span>{product.price}</span></div>
              <div className="shop_this"><a href={product.link}>{product.shopThis} &#62;</a></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="photo_layout cf">
        <ul>
          {secondLineProducts.map((product) => (
            <li className="photo_2" key={product.name}>
              <a href={product.link} className="product_photo">
                <img src={product.imageFront} alt="Front View" />
                <img src={product.imageSide} alt="Side View" />
              </a>
              <div className="item_name"><span>{product.name}</span></div>
              <div className="item_price"><span>{product.price}</span></div>
              <div className="shop_this"><a href={product.link}>{product.shopThis} &#62;</a></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;