import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


const New = ({ data }) => {
    
    const what_new_list = useRef(),
        btn_pre = useRef(),
        btn_next = useRef(),
        what_new_idx = useRef(0),
        liWidth = useRef({ even: 257.5, odd: 217.5 });
    const slideDistances = [227.5, 267.5];

    function handleClick(e, direction) {
        if (direction === 'next') {
            what_new_idx.current++;
        } else if (direction === 'back') {
            what_new_idx.current--;
        }

        const totalDistance = calculateTotalDistance(what_new_idx.current);
        what_new_list.current.style.left = `${-totalDistance}px`;

        btn_pre.current.classList.toggle('nonVisible', what_new_idx.current <= 0);
        btn_next.current.classList.toggle('nonVisible', what_new_idx.current >= 4);


        const tempWidth = liWidth.current.odd;
        liWidth.current.odd = liWidth.current.even;
        liWidth.current.even = tempWidth;
        updateLiWidth();
    }

    function calculateTotalDistance(index) {
        let totalDistance = 0;
        for (let i = 0; i < index; i++) {
            totalDistance += slideDistances[i % slideDistances.length];
        }
        return totalDistance;
    }

    function updateLiWidth() {
        const liElements = what_new_list.current.querySelectorAll('li');
        liElements.forEach((li, index) => {
            const width = index % 2 === 0 ? liWidth.current.even : liWidth.current.odd;
            li.style.width = `${width}px`;
        });
    }

    return (
        <div className="what_new">
            <div className="what_new_title cf">
                <h2>
                    <Link to="/new">
                        WHAT&#39;s
                        <br />
                        NEW
                    </Link>
                </h2>
            </div>
            <button className="btn_pre nonVisible" ref={btn_pre} onClick={(e) => handleClick(e, 'back')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="what_new_item">
                <ul className="what_new_list" ref={what_new_list} >
                    {data.slice(3, 11).map((item, i) => (
                        <li style={{ width: `${liWidth.current[i % 2 === 0 ? 'even' : 'odd']}px` }}>
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
            <button className="btn_next" ref={btn_next} onClick={(e) => handleClick(e, 'next')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default New;