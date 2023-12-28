

import React, { useState } from 'react';

const DpTopSection = ({  product_img1, product_img2, product_img3, product_img4  }) => {

  const [mainImage, setMainImage] = useState(product_img1);

  const handleSubImageClick = (image) => {
    setMainImage(image);

    
  };

  return (
    <div className="main_photo">
       <img src={require( `../../../../images/${mainImage}`)} alt="product_img1" />


      <div className="sub_photo">
        <ul>
          <li onClick={() => handleSubImageClick(product_img1)}>
            <img src={require( `../../../../images/${product_img1}`)} alt="product_img1" />
          </li>
          <li onClick={() => handleSubImageClick(product_img2)}>
          <img src={require( `../../../../images/${product_img2}`)} alt="product_img2" />
          </li>
          <li onClick={() => handleSubImageClick(product_img3)}>
          <img src={require( `../../../../images/${product_img3}`)} alt="product_img3" />
          </li>
          <li onClick={() => handleSubImageClick(product_img4)}>
          <img src={require( `../../../../images/${product_img4}`)} alt="product_img4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DpTopSection;