import React from 'react'

<<<<<<< HEAD
const DpProductDetail = () => {
  return (
    <div>


    <div className="product_detail">
    <p>
        <strong> 클리어런스 상품으로 케이스 없이 안경파우치와 클리너만 발송 되며 교환 환불 불가합니다.</strong> <br /><br />
        프레임 정면 139mm, 렌즈 가로 55mm, 렌즈 높이 25mm, 렌즈 사이 17mm, 프레임 옆면 145mm 무게 20g
    </p>
</div>
<div className="detail" id="detail">
    <img src={require("../../../images/g_andyBrownCrystal_01.jpg")} alt="Eva crystal violet tint 정면" />
    <img src={require("../../../images/g_andyBrownCrystal_02.jpg")} alt="Eva crystal violet tint 앞 대각선" />
    <img src={require("../../../images/g_andyBrownCrystal_03.jpg")} alt="Eva crystal violet tint 측면" />
    <img src={require("../../../images/g_andyBrownCrystal_04.jpg")} alt="Eva crystal violet tint 뒷 대각선" />
=======
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
>>>>>>> main
</div>
    </div>

  )
}

export default DpProductDetail;