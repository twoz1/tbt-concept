import '../../styles/items/New_goods.css';
import NgoodsGlass from './NgoodsGlass';
import NgoodsSlide from './NgoodsSlide';
import NgoodsSunGlass from './NgoodsSunGlass';
import { Link } from 'react-router-dom';

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
                            <Link to='/glasses'><i className="fa-sharp fa-light fa-plus"></i></Link>
                        </div>

                        <div className="new_glass_img">
                            <NgoodsGlass />
                        </div>
                    </div>

                    {/* ======================main - sunglass====================== */}

                    <div className="new_glass">
                        <h3 className="new_glass_title"><strong>SUNGLASS</strong></h3>
                        <div className="btn_plus">
                            <Link to='/sunglasses'><i className="fa-sharp fa-light fa-plus"></i></Link>
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
                        <NgoodsSlide />
                    </div>

                </div>
            </div>
        </div>//최종div
    );
};

export default New_goods;
