import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
const New = () => {
=======
import { useRef } from 'react';
import { useContext } from 'react';
import mockItemsContext from '../../MockItems';

const New = () => {
    const newItemList = useContext(mockItemsContext);

    const what_new_list = useRef(),
        btn_pre = useRef(),
        btn_next = useRef(),
        what_new_idx = useRef(0);

    function clickBackBtn(e) {
        what_new_idx.current--;
        what_new_list.current.style.left = `${-what_new_idx.current * 25}%`;

        btn_next.current.classList.remove('nonVisible');
        if (what_new_idx.current <= 0) {
            btn_pre.current.classList.add('nonVisible');
        }
    }

    function clickNext(e) {
        what_new_idx.current++;
        what_new_list.current.style.left = `${-what_new_idx.current * 25}%`;

        btn_pre.current.classList.remove('nonVisible');
        if (what_new_idx.current >= 4) {
            btn_next.current.classList.add('nonVisible');
        }
    }
>>>>>>> main
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
<<<<<<< HEAD
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
=======
            <button className="btn_pre nonVisible" ref={btn_pre} onClick={clickBackBtn}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="what_new_item">
                <ul className="what_new_list" ref={what_new_list}>
                    {newItemList.slice(0, 9).map((item) => (
                        <Link to={`/detail/${item.id}`} key={item.id}>
                            <li>
                                <img src={item.imageFront} alt="상품" />
                                <img src={item.imageSide} alt="상품" />
                                <div className="item_name">
                                    <span>{item.name}</span>
                                </div>
                                <div className="item_price">
                                    <span>{item.price}</span>
                                </div>
                                <div className="shop_this">
                                    <a>{item.shopThis} &#62;</a>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <button className="btn_next" ref={btn_next} onClick={clickNext}>
                <FontAwesomeIcon icon={faChevronRight} />
>>>>>>> main
            </button>
        </div>
    );
};

export default New;
