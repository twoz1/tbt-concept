import React from 'react'

const DpProductDetail = ({ product_img1,product_img2,product_img3,product_img4 }) => {
  
  return (
    <div>
    <div className="product_detail">
    {/* {summary} */}
</div>
<div className="detail" id="detail">
<img src={require( `../../../../images/${product_img1}`)} alt="product_img1" />
<img src={require( `../../../../images/${product_img2}`)} alt="product_img1" />
<img src={require( `../../../../images/${product_img3}`)} alt="product_img1" />
<img src={require( `../../../../images/${product_img4}`)} alt="product_img1" />
</div>
    </div>

  )
}

export default DpProductDetail;
