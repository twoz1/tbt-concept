

// import React from 'react'


// const DpTopSection = ({ProductListSelected}) => {

//     const {id,imageFront,imageSide,imageSide_03,imageSide_04}=ProductListSelected;


//     console.log(id);

//     return (

//         <div className="main_photo">
//                         <img src={imageFront} alt="Eva crystal violet tint 정면" />


//                         <div className="sub_photo">
//                             <a><img src={imageFront} alt="Eva crystal violet tint 정면" /></a>
//                             <a><img src={imageSide}
//                                 alt="Eva crystal violet tint 앞 대각선" /></a>
//                             <a><img src={imageSide_03}
//                                 alt="Eva crystal violet tint 측면" /></a>
//                             <a><img src={imageSide_04}
//                                 alt="Eva crystal violet tint 뒷 대각선" /></a>
//                         </div>

//                     </div>
//     );

// }
// export default DpTopSection;


import React, { useState } from 'react';

const DpTopSection = ({  product_img1, product_img2, product_img3, product_img4  }) => {
 // const { product_img1, product_img2, product_img3, product_img4 } = ProductListSelected;

  const [mainImage, setMainImage] = useState(product_img1);

  const handleSubImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="main_photo">
      <img src={mainImage} alt="product_img1" />


      <div className="sub_photo">
        <ul>
          <li onClick={() => handleSubImageClick(product_img1)}>
            <img src={ `../../../../images/${product_img1}`} alt="product_img1" />
          </li>
          <li onClick={() => handleSubImageClick(product_img2)}>
            <img src={`../../../../images/${product_img2}`} alt="product_img2" />
          </li>
          <li onClick={() => handleSubImageClick(product_img3)}>
            <img src={`../../../../images/${product_img3}`} alt="product_img3" />
          </li>
          <li onClick={() => handleSubImageClick(product_img4)}>
            <img src={`../../../../images/${product_img4}`} alt="product_img4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DpTopSection;