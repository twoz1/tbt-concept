import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
            </button>
        </div>
    );
};

export default New;
