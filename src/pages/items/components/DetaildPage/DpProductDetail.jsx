import React from 'react'

const DpProductDetail = ({ProductListSelected}) => {
  const {id,imageFront,imageSide,imageSide_03,imageSide_04,summary}=ProductListSelected;
  return (
    <div>
    <div className="product_detail">
    {summary}
</div>
<div className="detail" id="detail">
    <img src={imageFront} alt="Eva crystal violet tint 정면" />
    <img src={imageSide} alt="Eva crystal violet tint 앞 대각선" />
    <img src={imageSide_03} alt="Eva crystal violet tint 측면" />
    <img src={imageSide_04} alt="Eva crystal violet tint 뒷 대각선" />
</div>
    </div>

  )
}

export default DpProductDetail;