// import React from 'react';

// const Product = ({ products, secondLineProducts }) => {
//   return (
//     <div className="photo_line">
//       <div className="photo_layout cf">
//         <ul>
//           {products.map((product) => (
//             <li className="photo_2" key={product.name}>
//               <a href={product.link} className="product_photo">
//                 <img src={product.imageFront} alt="Front View" />
//                 <img src={product.imageSide} alt="Side View" />
//               </a>
//               <div className="item_name"><span>{product.name}</span></div>
//               <div className="item_price"><span>{product.price}</span></div>
//               <div className="shop_this"><a href={product.link}>{product.shopThis} &#62;</a></div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="photo_layout cf">
//         <ul>
//           {products.map((product) => (
//             <li className="photo_2" key={product.name}>
//               <a href={product.link} className="product_photo">
//                 <img src={product.imageFront} alt="Front View" />
//                 <img src={product.imageSide} alt="Side View" />
//               </a>
//               <div className="item_name"><span>{product.name}</span></div>
//               <div className="item_price"><span>{product.price}</span></div>
//               <div className="shop_this"><a href={product.link}>{product.shopThis} &#62;</a></div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from 'react';

const Product1 = ({ displayedItemInfo1}) => {
  const itemsPerRow = 4;
  const rows = Math.ceil(displayedItemInfo1.length / itemsPerRow);

  return (
    <div className="photo_line">
      {[...Array(rows)].map((_, rowIndex) => (
        <div className="photo_layout cf" key={rowIndex}>
          <ul>
          {displayedItemInfo1
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map((item) => (
                <li className="photo_2" key={item.name}>
                  <a href={item.link} className="product_photo">
                    <img src={item.imageFront} alt="Front View" />
                    <img src={item.imageSide} alt="Side View" />
                  </a>
                  <div className="item_name"><span>{item.name}</span></div>
                  <div className="item_price"><span>{item.price}</span></div>
                  <div className="shop_this"><a href={item.link}>{item.shopThis} &#62;</a></div>
                </li>
              ))}
          </ul>
        </div>
      ))} 
    </div>
  );
};

export default Product1;