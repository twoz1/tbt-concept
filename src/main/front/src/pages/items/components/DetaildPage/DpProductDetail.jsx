import React from 'react'

const DpProductDetail = ({ product_img1,product_img2,product_img3,product_img4 }) => {
 // const {product_img1,product_img2,product_img3,product_img4,summary}=ProductListSelected;
  return (
    <div>
    <div className="product_detail">
    {/* {summary} */}
</div>
<div className="detail" id="detail">
    <img src={product_img1} alt="Eva crystal violet tint 정면" />
    <img src={product_img2} alt="Eva crystal violet tint 앞 대각선" />
    <img src={product_img3} alt="Eva crystal violet tint 측면" />
    <img src={product_img4} alt="Eva crystal violet tint 뒷 대각선" />
</div>
    </div>

  )
}

export default DpProductDetail;