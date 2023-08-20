import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const Best = () => {
    const best_list = useRef(),
        btn_pre = useRef(),
        btn_next = useRef(),
        best_idx = useRef(0);

    function clickBackBtn(e) {
        best_idx.current--;
        best_list.current.style.left = `${-best_idx.current * 25}%`;

        btn_next.current.classList.remove('nonVisible');
        if (best_idx.current <= 0) {
            btn_pre.current.classList.add('nonVisible');
        }
    }

    function clickNext(e) {
        best_idx.current++;
        best_list.current.style.left = `${-best_idx.current * 25}%`;

        btn_pre.current.classList.remove('nonVisible');
        if (best_idx.current >= 4) {
            btn_next.current.classList.add('nonVisible');
        }
    }
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
                <ul className="best_list" ref={best_list}>
                    <li className="sunglass_3">
                        <Link to="/checkout">
                            <img src={require('../../images/s_evaCrystalVioletTint_01.jpg')} />
                            <img src={require('../../images/s_evaCrystalVioletTint_02.jpg')} />
                        </Link>
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
                            <img src={require('../../images/s_hangangBlack_01.jpeg')} />
                            <img src={require('../../images/s_hangangBlack_02.jpeg')} />
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
                            <img src={require('../../images/g_boatPeach_01.jpg')} />
                            <img src={require('../../images/g_boatPeach_02.jpg')} />
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
                            <img src={require('../../images/g_landCrystal_01.jpg')} />
                            <img src={require('../../images/g_landCrystal_02.jpg')} />
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
                    <li className="glass_4">
                        <a href="glass_4">
                            <img src={require('../../images/g_quinbyBlack_01.jpg')} />
                            <img src={require('../../images/g_quinbyBlack_02.jpg')} />
                        </a>
                        <div className="item_name">
                            <span>quinbyBlack</span>
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
                            <img src={require('../../images/s_orrBlack_01.jpeg')} />
                            <img src={require('../../images/s_orrBlack_02.jpeg')} />
                        </a>
                        <div className="item_name">
                            <span>orrBlack</span>
                        </div>
                        <div className="item_price">
                            <span>129,000원</span>
                        </div>
                        <div className="shop_this">
                            <a href="#">SHOT THIS &#62;</a>
                        </div>
                    </li>
                    <li className="glass_4">
                        <a href="glass_4">
                            <img src={require('../../images/g_tenaBlack_01.jpg')} />
                            <img src={require('../../images/g_tenaBlack_02.jpg')} />
                        </a>
                        <div className="item_name">
                            <span>tenaBlack</span>
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
                            <img src={require('../../images/s_roanGrayCystal_01.jpg')} />
                            <img src={require('../../images/s_roanGrayCystal_02.jpg')} />
                        </a>
                        <div className="item_name">
                            <span>roanGrayCystal</span>
                        </div>
                        <div className="item_price">
                            <span>129,000원</span>
                        </div>
                        <div className="shop_this">
                            <a href="#">SHOT THIS &#62;</a>
                        </div>
                    </li>
                </ul>
            </div>
            <button className="btn_pre nonVisible" ref={btn_pre} onClick={clickBackBtn}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="btn_next" ref={btn_next} onClick={clickNext}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};
export default Best;
