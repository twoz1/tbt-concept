import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useReducer, useRef, useState } from 'react';

const renderItem = ({ item }) => (
    <li className="photo_2" key={item.product_id}>
      <Link to={`/detail/${item.product_id}`} key={item.product_id} className="product_photo">
      <img src={require(`../../../../images/${item.product_img1}`)} alt="Front View" />
      <img src={require(`../../../../images/${item.product_img2}`)} alt="Side View" />
      </Link>
      <div className="item_name"><span>{item.product_name}</span></div>
      <div className="item_price"><span>{item.product_price ? item.product_price.toLocaleString() : '가격 정보 없음'}원</span></div>
      <div className="shop_this">
        <Link to={`/detail/${item.product_id}`} key={item.product_id} >
           <span>SHOP THIS &#62;</span> 
        </Link>
      </div>
    </li>
  );

const New = ({sdata}) => {

    const itemsPerRow = 8;
    const rows = Math.ceil(sdata.length / itemsPerRow);

    for (let d of sdata) {
        console.log("New list" + d.product_id);
      }
      console.log("New list" + sdata);

    
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
                    {[...Array(rows)].map((_, rowIndex) => (
                            <div className="photo_layout cf" key={rowIndex}>
                            <ul>
                                {sdata
                                .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                                .map(item => renderItem({ item }))}
                            </ul>
                            </div>
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