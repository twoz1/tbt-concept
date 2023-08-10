import '../styles/components/Main.css';
const Main = () => {
    return (
        <div>
            {/* ---------------------------메인 시작--------------------------- */}

            <div className="image_slide">
                <ul>
                    <li className="image_slide_1">
                        {/* <img className="imgae_slide_1" src={require('../images/sfdlkajsfklasjfdksadf.jpeg')} /> */}
                    </li>
                </ul>
            </div>

            {/* ---------------------------메인 시작--------------------------- */}
            {/* -----------------------img slide-------------------------- */}

            <div className="center m_c">
                {/* <!-- <hr> --> */}
                <div className="what_new">
                    <div className="what_new_title cf">
                        <a href="./new_goods/new_goods.html">
                            <h2>
                                <strong>
                                    WHAT&#39;S&nbsp;
                                    <br />
                                    NEW
                                </strong>
                            </h2>
                        </a>
                    </div>

                    {/* <!--============== 메인 타이틀========== --> */}
                    {/* <!--============== whatnew=========== --> */}

                    <div className="what_new_item cf">
                        <button>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul>
                            <li className="sunglass_1">
                                <a href="./new_goods/new_goods.html">
                                    <img src="./image/sunglass_1.jpeg" alt="sunglass_1" />
                                    <img src="./image/sunglass_1_side.jpeg" alt="sunglass_1_side" />
                                </a>
                                <div className="item_name">
                                    <span>ETTY black</span>
                                </div>
                                <div className="item_price">
                                    <span>129,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="./sunglass/sunglasses.html">SHOT THIS &#62;</a>
                                </div>
                            </li>
                            <li className="sunglass_2">
                                <a href="./new_goods/new_goods.html">
                                    <img src="./image/sunglass_2.jpeg" alt="sunglass_2" />
                                    <img src="./image/sunglass_2_side.jpeg" alt="sunglass_2_side" />
                                </a>
                                <div className="item_name">
                                    <span>ETTY tawny&#45;olivegreen</span>
                                </div>
                                <div className="item_price">
                                    <span>129,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="./sunglass/sunglasses.html">SHOT THIS &#62;</a>
                                </div>
                            </li>
                            <li className="glass_1">
                                <a href="./detailed_page/detailed_page_glass.html">
                                    <img src="./image/glass_1.jpeg" alt="glass_1" />
                                    <img src="./image/glass11.jpg" alt="glass11" />
                                </a>
                                <div className="item_name">
                                    <span>EVA Crystal</span>
                                </div>
                                <div className="item_price">
                                    <span>89,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="./detailed_page/detailed_page_glass.html">SHOT THIS &#62;</a>
                                </div>
                            </li>
                            <li className="glass_2">
                                <a href="./new_goods/new_goods.html">
                                    <img src="./image/glass_2.jpeg" alt="glass_2" />
                                    <img src="./image/glass_2_side.jpeg" alt="glass_2_side" />
                                </a>
                                <div className="item_name">
                                    <span>ANDY Flesh</span>
                                </div>
                                <div className="item_price">
                                    <span>89,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="#">SHOT THIS &#62;</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                {/* <!-- =======================whatnew======================= --> */}
                {/* <!-- =======================collcetion======================= --> */}
                {/* <!-- <hr> --> */}
                <div className="collection">
                    <li>
                        {/* <img src={require("../images/flsjdfalskdfjkasljfdl.jpeg")} /> */}
                        <a href="./collection/collection.html">Collection</a>
                        <a href="./collection/collection.html">바로가기</a>
                    </li>
                </div>
                {/* <!-- ========================collcetion=================== --> */}
                {/* <!-- ========================best=================== --> */}
                {/* <!-- <hr> --> */}
                <div className="best">
                    <div className="best_title">
                        <a href="/new_goods/new_goods.html">
                            <div className="title_route">
                                <h2>
                                    <strong>best</strong>
                                </h2>
                            </div>
                        </a>
                    </div>
                    <div className="best_item">
                        <button>{/* <i className="fa-solid fa-chevron-left"></i> */}</button>
                        <ul>
                            <li className="sunglass_3">
                                <a href="./detailed_page/detaied_page.html">
                                    <img src="./image/sunglass2.jpg" alt="sunglass2" />
                                    <img src="./image/sunglass22.jpg" alt="sunglass22" />
                                </a>
                                <div className="item_name">
                                    <span>Eva crystal&#45;violet tint</span>
                                </div>
                                <div className="item_price">
                                    <span>165,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="./detailed_page/detaied_page.html">SHOT THIS &#62;</a>
                                </div>
                            </li>
                            <li className="sunglass_4">
                                <a href="sunglass_4">
                                    <img src="./image/sunglass_4.jpeg" alt="sunglass_4" />
                                    <img src="./image/sunglass_4_side.jpeg" alt="sunglass_4_side" />
                                </a>
                                <div className="item_name">
                                    <span>BETH amber&#45;ilivegreen</span>
                                </div>
                                <div className="item_price">
                                    <span>129,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="#">SHOT THIS &#62;</a>
                                </div>
                            </li>
                            <li className="glass_3">
                                <a href="./detailed_page/detailed_page_glass.html">
                                    <img src="./image/glass_3.jpeg" alt="glass_3" />
                                    <img src="./image/glass_3_side.jpeg" alt="glass_3_side" />
                                </a>
                                <div className="item_name">
                                    <span>ANDY Black</span>
                                </div>
                                <div className="item_price">
                                    <span>89,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="#">SHOT THIS &#62;</a>
                                </div>
                            </li>
                            <li className="glass_4">
                                <a href="glass_4">
                                    <img src="./image/glass_4.jpeg" alt="glass_4" />
                                    <img src="./image/glass_4_side.jpeg" alt="glass_4_side" />
                                </a>
                                <div className="item_name">
                                    <span>ANDY Black Crystal</span>
                                </div>
                                <div className="item_price">
                                    <span>89,000원</span>
                                </div>
                                <div className="shop_this">
                                    <a href="#">SHOT THIS &#62;</a>
                                </div>
                            </li>
                        </ul>
                        <button>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* ————————————————collection—————————————————— */}
            {/* ——————————————————
            video—————————————————— */}
            <div className="video">
                <div className="play">
                    <video autoPlay playsInline muted loop src="" type="video/mp4"></video>
                </div>
            </div>
        </div>
    );
};

export default Main;
