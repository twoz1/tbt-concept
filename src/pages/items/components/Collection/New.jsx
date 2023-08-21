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
        what_new_list.current.style.left = `${-what_new_idx.current * 265}px`;

        btn_next.current.classList.remove('nonVisible');
        if (what_new_idx.current <= 0) {
            btn_pre.current.classList.add('nonVisible');
        }
        toggleItemWidth();
    }

    function clickNext(e) {
        what_new_idx.current++;
        
        if (what_new_idx.current === 1) {
            what_new_list.current.style.left = `${-what_new_idx.current * 225}px`;
        } else {
            what_new_list.current.style.left = `${-what_new_idx.current * 245}px`;
        }

        btn_pre.current.classList.remove('nonVisible');
        if (what_new_idx.current >= 4) {
            btn_next.current.classList.add('nonVisible');
        }
        toggleItemWidth();
    }
    function toggleItemWidth() {
        const evenItems = what_new_list.current.querySelectorAll('.what_new_list li:nth-child(even)');
        const oddItems = what_new_list.current.querySelectorAll('.what_new_list li:nth-child(odd)');

        evenItems.forEach((item) => {
            item.style.width = '255px'; // odd 아이템의 width로 설정
        });

        oddItems.forEach((item) => {
            item.style.width = '215px'; // even 아이템의 width로 설정
        });
    }

    // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    const [newList2, setNewList2] = useState(newList.slice(0, 8));

    // const handlePrevClick = () => {
    //     setNewList2(prevList => prevList.slice(0, prevList.length - 1));
    // };

    // const handleNextClick = () => {
    //     setNewList2(prevList => prevList.slice(1)); // Remove the first item
    // };

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
                <ul className="what_new_list">
                    {newList2.map((item) => (
                        <li>
                            <Link to={`/detail/${item.name}`} key={item.name}>
                                <img src={item.imageFront} alt="상품" />
                                <img src={item.imageSide} alt="상품" />
                            </Link>
                                <div className="item_name">
                                    <span>{item.name}</span>
                                </div>
                                <div className="item_price">
                                    <span>{item.price.toLocaleString()}원</span>
                                </div>
                            <Link to={`/detail/${item.name}`} key={item.name}>
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
