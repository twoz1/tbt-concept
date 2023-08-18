




const DpTopSection = () => {

    return (

        <div className="main_photo">
                        <img src={require("../../../images/g_andyBrownCrystal_01.jpg")} alt="Eva crystal violet tint 정면" />


                        <div className="sub_photo">
                            <a href="#"><img src={require("../../../images/g_andyBrownCrystal_01.jpg")} alt="Eva crystal violet tint 정면" /></a>
                            <a href="./detailed_page2.html"><img src={require("../../../images/g_andyBrownCrystal_02.jpg")}
                                alt="Eva crystal violet tint 앞 대각선" /></a>
                            <a href="./datiled_page3.html"><img src={require("../../../images/g_andyBrownCrystal_03.jpg")}
                                alt="Eva crystal violet tint 측면" /></a>
                            <a href="./detailed_page4.html"><img src={require("../../../images/g_andyBrownCrystal_04.jpg")}
                                alt="Eva crystal violet tint 뒷 대각선" /></a>
                        </div>
                    </div>
    );

}
export default DpTopSection;