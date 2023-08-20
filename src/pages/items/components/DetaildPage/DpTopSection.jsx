

import React from 'react'


const DpTopSection = ({productList}) => {

    const {id,imageFront,imageSide,imageSide_03,imageSide_04}=productList;
    // if (!ProductListSelected) {
    //     // ProductListSelected가 없을 때의 처리
    //     return <div>Loading...</div>;
    // }

    // console.log(id);

    return (

        <div className="main_photo">
                        <img src={imageFront} alt="Eva crystal violet tint 정면" />


                        <div className="sub_photo">
                            <a><img src={imageFront} alt="Eva crystal violet tint 정면" /></a>
                            <a><img src={imageSide}
                                alt="Eva crystal violet tint 앞 대각선" /></a>
                            <a><img src={imageSide_03}
                                alt="Eva crystal violet tint 측면" /></a>
                            <a><img src={imageSide_04}
                                alt="Eva crystal violet tint 뒷 대각선" /></a>
                        </div>
                        
                    </div>
    );

}
export default DpTopSection;