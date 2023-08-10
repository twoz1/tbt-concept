
import '../../styles/items/Glasses.css'
const Glasses = () => {
    return (
        <div className='Glasses'>
            <div className="center m_c">

                <div id="banner">
                    <img src={require("../../images/banner.jpg")} alt="glasses_banner_img" />
                </div>

                <div className="title_route">
                    <h2><strong>GLASSES</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>GLASSES</li>
                    </ul>
                </div>

                <div id="category">
                    <ul>
                        <li>category
                            <ul>
                                <li><a href="../sunglass/sunglasses.html">sunglass</a></li>
                                <li><a href="#"> glass</a></li>
                            </ul>
                        </li>

                        <li>sort by &#58;
                            <ul>
                                <li><a href="#">낮은 가격</a></li>
                                <li><a href="#">높은 가격</a></li>
                                <li><a href="#">인기순</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="photo_line">
                    <div className="photo_layout cf">
                        <ul>
                            <li className="photo_2">
                                <a href="../detailed_page/detailed_page_glass.html" className="product_photo"><img src="./img/glass_1.jpeg" alt="EVA Crystal 정면" />
                                    <img src="./img/glass_1_side.jpeg" alt="EVA Crystal 측면" /></a>
                                <div className="item_name"><span>EVA Crystal</span></div>
                                <div className="item_price"><span>89,000원</span></div>
                                <div className="shop_this"><a href="../detailed_page/detailed_page_glass.html">SHOT THIS &#62;</a></div>
                            </li>
                            <li >
                                <a href="#" className="product_photo"><img src="./img/glass_2.jpeg" alt="ANDY Flesh 정면" />
                                    <img src="./img/glass_2_side.jpeg" alt="EVA Crystal 측면" /></a>
                                <div className="item_name"><span>ANDY Flesh</span></div>
                                <div className="item_price"><span>89,000원</span></div>
                                <div className="shop_this"><a href="#">SHOT THIS &#62;</a></div>
                            </li>
                            <li className="photo_2">
                                <a href="#" className="product_photo"><img src="./img/glass_3.jpeg" alt="ANDY Black 정면" />
                                    <img src="./img/glass_3_side.jpeg" alt="ANDY Black 측면" /></a>
                                <div className="item_name"><span>ANDY Black</span></div>
                                <div className="item_price"><span>89,000원</span></div>
                                <div className="shop_this"><a href="#">SHOT THIS &#62;</a></div>
                            </li>
                            <li>
                                <a href="#" className="product_photo"><img src="./img/glass_4.jpeg" alt="ANDY Black Crystal 정면" />
                                    <img src="./img/glass_4_side.jpeg" alt="ANDY Black Crystal 측면" /></a>
                                <div className="item_name"><span>ANDY Black Crystal</span></div>
                                <div className="item_price"><span>89,000원</span></div>
                                <div className="shop_this"><a href="#">SHOT THIS &#62;</a></div>
                            </li>
                        </ul>
                    </div>

                    <div className="photo_layout cf">
                        <ul>
                            <li className="photo_2">
                                <a href="#" className="product_photo"><img src="./img/glass_5.jpeg" alt="CALLA Black" />
                                    <img src="./img/glass55.jpg" alt="CALLA Black 측면" /></a>
                                <div className="item_name"><span>CALLA Black</span></div>
                                <div className="item_price"><span>129,000원</span></div>
                                <div className="shop_this"><a href="#">SHOT THIS &#62;</a></div>
                            </li>
                            <li>
                                <a href="#" className="product_photo"><img src="./img/glass6.jpg" alt="CALLA Khaki Cystal" />
                                    <img src="./img/glass66.jpg" alt="CALLA Khaki Cystal 측면" /></a>
                                <div className="item_name"><span>CALLA Khaki Cystal</span></div>
                                <div className="item_price"><span>129,000원</span></div>
                                <div className="shop_this"><a href="#">SHOT THIS &#62;</a></div>
                            </li>
                            <li className="photo_2">
                                <a href="#" className="product_photo"><img src="./img/glass7.jpg" alt="CALLA Crystal 정면" />
                                    <img src="./img/sunglass77.jpg" alt="CALLA Crystal 측면" /></a>
                                <div className="item_name"><span>CALLA Crystal</span></div>
                                <div className="item_price"><span>129,000원</span></div>
                                <div className="shop_this"><a href="#">SHOT THIS &#62;</a></div>
                            </li>
                            <li>
                                <a href="#" className="product_photo"><img src="./img/glass8.jpg" alt="CALLA Grey Crystal" />
                                    <img src="./img/glass88.jpg" alt="CALLA Grey Crystal 측면" /></a>
                                <div className="item_name"><span>CALLA Grey Crystal</span></div>
                                <div className="item_price"><span>129,000원</span></div>
                                <div className="shop_this"><a href="#">SHOT THIS &#62;</a></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="next_page">
                    <a href="#">1 </a>
                    <a href="./glasses2.html">2 </a>
                </div>

            </div>
        </div>
    );
}

export default Glasses;