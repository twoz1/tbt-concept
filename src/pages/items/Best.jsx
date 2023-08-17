import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Best = () => {
    return (
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
                <button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    {/* <i className="fa-solid fa-chevron-left"></i> */}
                </button>
                <ul>
                    <li className="sunglass_3">
                        <a href="./detailed_page/detailed_page.html">
                            <img src="./images/s_evaCrystalVioletTint_01.jpg" alt="evaCrystalVioletTint" />
                            <img src="./images/s_evaCrystalVioletTint_02.jpg" alt="evaCrystalVioletTint_side" />
                        </a>
                        <div className="item_name">
                            <span>eva crystal&#45;violet tint</span>
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
                            <img src="./images/s_hangangBlack_01.jpeg" alt="hangangBlack" />
                            <img src="./images/s_hangangBlack_02.jpeg" alt="hangangBlack_side" />
                        </a>
                        <div className="item_name">
                            <span>hangangBlack</span>
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
                            <img src="./images/g_boatPeach_01.jpg" alt="boatPeach" />
                            <img src="./images/g_boatPeach_02.jpg" alt="boatPeach_side" />
                        </a>
                        <div className="item_name">
                            <span>boatPeach</span>
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
                            <img src="./images/g_landCrystal_01.jpg" alt="landCrystal" />
                            <img src="./images/g_landCrystal_02.jpg" alt="landCrystal_side" />
                        </a>
                        <div className="item_name">
                            <span>landCrystal</span>
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
                    <FontAwesomeIcon icon={faChevronRight} />
                    {/* <i className="fa-solid fa-chevron-right"></i> */}
                </button>
            </div>
        </div>
    );
};
export default Best;
