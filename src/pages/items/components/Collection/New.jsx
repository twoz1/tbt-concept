import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import mockItemsContext from '../../MockItems';

const New = () => {
    const { gArr } = useContext(mockItemsContext);
    const newList = [...gArr];
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
        toggleItemWidth();
    }

    function clickNext(e) {
        what_new_idx.current++;
        what_new_list.current.style.left = `${-what_new_idx.current * 26}%`;

        btn_pre.current.classList.remove('nonVisible');
        if (what_new_idx.current >= 4) {
            btn_next.current.classList.add('nonVisible');
        }
        toggleItemWidth();
    }
    function toggleItemWidth() {
        const evenItems = what_new_list.current.querySelectorAll('.what_new_list li:nth-child(even) img');
        const oddItems = what_new_list.current.querySelectorAll('.what_new_list li:nth-child(odd) img');

        evenItems.forEach((item) => {
            item.style.width = '273px'; // odd 아이템의 width로 설정
        });

        oddItems.forEach((item) => {
            item.style.width = '230px'; // even 아이템의 width로 설정
        });
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
                    {newList.slice(0, 8).map((item) => (
                        <li>
                            <Link to={`/detail/${item.name}`} key={item.name}>
                                <img src={item.imageFront} alt="상품" />
                                <img src={item.imageSide} alt="상품" />
                                <div className="item_name">
                                    <span>{item.name}</span>
                                </div>
                                <div className="item_price">
                                    <span>{item.price.toLocaleString()}원</span>
                                </div>
                                <div className="shop_this">
                                    <a>{item.shopThis} &#62;</a>
                                </div>
                            </Link>
                        </li>
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
