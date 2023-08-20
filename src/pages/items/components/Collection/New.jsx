import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const New = () => {
    return (
        <div className="what_new">
            <div className="what_new_title cf">
                <Link to="/new">
                    <h2>
                        <strong>
                            WHAT&#39;S&nbsp;
                            <br />
                            NEW
                        </strong>
                    </h2>
                </Link>
            </div>
                <button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    {/* <i className="fa-solid fa-chevron-left"></i> */}
                </button>
            <div className="what_new_item">
                <ul>
                    <li className="sunglass_1">
                        <Link to="/detail">
                            <img src={require('../../images/s_bibiBlack_01.jpeg')} />
                            <img src={require('../../images/s_bibiBlack_02.jpeg')} />
                        </Link>
                        <div className="item_name">
                            <span>bibi black</span>
                        </div>
                        <div className="item_price">
                            <span>129,000원</span>
                        </div>
                        <div className="shop_this">
                            <a href="./sunglass/sunglasses.html">SHOP THIS &#62;</a>
                        </div>
                    </li>
                    <li className="sunglass_2">
                        <Link to="/detail/:id">
                            <img src={require('../../images/s_depsBlack_01.jpeg')} />
                            <img src={require('../../images/s_depsBlack_02.jpeg')} />
                        </Link>
                        <div className="item_name">
                            <span>depsBlack</span>
                        </div>
                        <div className="item_price">
                            <span>129,000원</span>
                        </div>
                        <div className="shop_this">
                            <a href="./sunglass/sunglasses.html">SHOP THIS &#62;</a>
                        </div>
                    </li>
                    <li className="glass_1">
                        <Link to="/detail">
                            <img src={require('../../images/g_andyBrownCrystal_01.jpg')} />
                            <img src={require('../../images/g_andyBrownCrystal_02.jpg')} />
                        </Link>
                        <div className="item_name">
                            <span>andyBrownCrystal</span>
                        </div>
                        <div className="item_price">
                            <span>89,000원</span>
                        </div>
                        <div className="shop_this">
                            <a href="./detailed_page/detailed_page_glass.html">SHOP THIS &#62;</a>
                        </div>
                    </li>
                    <li className="glass_2">
                        <Link to="/detail">
                            <img src={require('../../images/g_antonCrystal_01.jpg')} />
                            <img src={require('../../images/g_antonCrystal_02.jpg')} />
                        </Link>
                        <div className="item_name">
                            <span>antonCrystal</span>
                        </div>
                        <div className="item_price">
                            <span>89,000원</span>
                        </div>
                        <div className="shop_this">
                            <a href="#">SHOP THIS &#62;</a>
                        </div>
                    </li>
                </ul>
            </div>
            <button>
                <FontAwesomeIcon icon={faChevronRight} />
                {/* <i className="fa-solid fa-chevron-right"></i> */}
            </button>
        </div>
    );
};

export default New;
