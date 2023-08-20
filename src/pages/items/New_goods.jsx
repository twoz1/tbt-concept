import '../../styles/items/New_goods.css';
import NgoodsGlass from './components/New_goods/NgoodsGlass';
import NgoodsSunGlass from './components/New_goods/NgoodsSunGlass';

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
                                <NgoodsGlass />
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
                                <NgoodsSunGlass />
                            </ul>
                        </div>
                    </div>

                    {/* ======================main - new_slide_poster====================== */}

                    <div className="new_slide_poster">
                        <p>사진을 누르시면 해당 상품으로 이동됩니다.</p>
                    </div>
                    
                </div>
            </div>
        </div>//최종div
    );
};

export default New_goods;
