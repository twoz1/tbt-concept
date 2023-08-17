import '../../styles/items/New_goods.css';

const New_goods = () => {
    return (
        <div>
            <div className="center m_c">
                <div className="newThings">
                    <div className="title_route">
                        <h2><strong>NEW</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>NEW</li>
                        </ul>

                        <div className="new_rec">
                            <h3><strong>NEW ITEM FOR YOU</strong></h3>
                            <p>
                                좋아하실 만한 신상품을 추천해 드려요.
                            </p>
                        </div>
                    </div>


                    {/* ======================main - glass====================== */}
                    <div className="new_glass">
                        <h3 className="new_glass_title"><strong>GLASS</strong></h3>
                        <div className="btn_plus">
                            <a href="../glasses/glasses.html"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>

                        <div className="new_glass_img">
                            <ul>
                                <li>
                                    <a href="../detailed_page/detailed_page_glass.html"><img src="../new_goods/img/sg_andy_crystal_dt_01.jpg" alt="상품사진"/></a>
                                    <a href="../detailed_page/detailed_page_glass.html"><img src="../new_goods/img/sg_andy_crystal_dt_02.jpg" alt="상품사진"/></a>
                                </li>

                                <li>
                                    <a href="#"><img src="../new_goods/img/sg_andy_black_dt_01.jpg" alt="상품사진"/></a>
                                    <a href="#"><img src="../new_goods/img/sg_andy_black_dt_02.jpg" alt="상품사진"/></a>
                                </li>

                                <li>
                                    <a href="#"><img src="../new_goods/img/sg_andy_black_crystal_dt_01.jpg" alt="상품사진"/></a>
                                    <a href="#"><img src="../new_goods/img/sg_andy_black_crystal_dt_02.jpg" alt="상품사진"/></a>
                                </li>

                                <li>
                                    <a href="#"><img src="../new_goods/img/sg_andy_flesh_dt_01.jpg" alt="상품사진"/></a>
                                    <a href="#"><img src="../new_goods/img/sg_andy_flesh_dt_02.jpg" alt="상품사진"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ======================main - sunglass====================== */}

                    <div className="new_glass">
                        <h3 className="new_glass_title"><strong>SUNGLASS</strong></h3>
                        <div className="btn_plus">
                            <a href="../sunglass/sunglasses.html"><i className="fa-sharp fa-light fa-plus"></i></a>
                        </div>

                        <div className="new_glass_img">
                            <ul>
                                <li>
                                    <a href="../detailed_page/detaied_page.html"><img src="../new_goods/img/pink_sunglass2.jpg" alt="상품사진"/></a>
                                    <a href="../detailed_page/detaied_page.html"><img src="../new_goods/img/pink_sunglass22.jpg" alt="상품사진"/></a>
                                </li>

                                <li>
                                    <a href="#"><img src="../new_goods/img/beth_cinnamon_browntint_dt_01.jpg" alt="상품사진"/></a>
                                    <a href="#"><img src="../new_goods/img/beth_cinnamon_browntint_dt_02.jpg" alt="상품사진"/></a>
                                </li>

                                <li>
                                    <a href="#"><img src="../new_goods/img/sunglass_2.jpeg" alt="상품사진"/></a>
                                    <a href="#"><img src="../new_goods/img/sunglass_2_side.jpeg" alt="상품사진"/></a>
                                </li>

                                <li>
                                    <a href="#"><img src="../new_goods/img/sunglass_4.jpeg" alt="상품사진"/></a>
                                    <a href="#"><img src="../new_goods/img/sunglass_4_side.jpeg" alt="상품사진"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ======================main - new_slide_poster====================== */}

                    <div className="new_slide_poster">
                        <p>사진을 누르시면 해당 상품으로 이동됩니다.</p>

                        <div className="new_slide_title">
                            <div className="new_slide_img">
                                <a href=""><img src="../new_goods/img/pos_andy_black_crystal_lb_02.jpg" alt="상품사진"/></a>
                                <a href="../detailed_page/detailed_page_glass.html"><img src="../new_goods/img/pos_andy_flesh_lb_02.jpg" alt="상품사진"/></a>
                                <a href=""><img src="../new_goods/img/pos_etty_black_lb_06.jpg" alt="상품사진"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>//최종div
    );
};

export default New_goods;
