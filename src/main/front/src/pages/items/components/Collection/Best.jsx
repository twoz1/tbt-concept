import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useReducer, useRef } from 'react';

const Best = ({ data }) => {

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
                <div className="title_route">
                    <h2>
                        <strong>best</strong>
                    </h2>
                </div>
            </div>
            <div className="best_item">
                <ul className="best_list" ref={best_list}>
                    {data.slice(10, 18).map((item) => (
                        <li>
                            <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                                <img src={require(`../../../../images/${item.product_img1}`)} alt="상품" />
                                <img src={require(`../../../../images/${item.product_img2}`)} alt="상품" />
                            </Link>
                            <div className="item_name">
                                <span>{item.product_name}</span>
                            </div>
                            <div className="item_price">
                                <span>{item.product_price ? item.product_price.toLocaleString() : '가격 정보 없음'}원</span>
                            </div>
                            <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                                <div className="shop_this">
                                    <a>SHOP THIS &#62;</a>
                                </div>
                            </Link>
                        </li>
                    ))}
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
