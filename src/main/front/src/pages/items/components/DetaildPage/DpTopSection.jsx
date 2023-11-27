

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

const DpTopSection = ({ ProductListSelected }) => {
  const { id, imageFront, imageSide, imageSide_03, imageSide_04 } = ProductListSelected;

  const [mainImage, setMainImage] = useState(imageFront);

  const handleSubImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="main_photo">
      <img src={mainImage} alt="Eva crystal violet tint 정면" />

      <div className="sub_photo">
        <ul>
          <li onClick={() => handleSubImageClick(imageFront)}>
            <img src={imageFront} alt="Eva crystal violet tint 정면" />
          </li>
          <li onClick={() => handleSubImageClick(imageSide)}>
            <img src={imageSide} alt="Eva crystal violet tint 앞 대각선" />
          </li>
          <li onClick={() => handleSubImageClick(imageSide_03)}>
            <img src={imageSide_03} alt="Eva crystal violet tint 측면" />
          </li>
          <li onClick={() => handleSubImageClick(imageSide_04)}>
            <img src={imageSide_04} alt="Eva crystal violet tint 뒷 대각선" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DpTopSection;