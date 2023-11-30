import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useReducer, useRef } from 'react';
import { useContext } from 'react';
import mockItemsContext from '../../MockItems';

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

const Best = ({displayedItemInfo}) => {

    const itemsPerRow = 8;
    const rows = Math.ceil(displayedItemInfo.length / itemsPerRow);

    for (let d of displayedItemInfo) {
        console.log("Best list" + d.product_id);
      }
      console.log("Best list" + displayedItemInfo);

    // const { sArr } = useContext(mockItemsContext);
    // const bestList = [...sArr];
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
                    {/* {bestList.slice(0, 9).map((item) => (
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
                    ))} */}

                        {[...Array(rows)].map((_, rowIndex) => (
                            <div className="photo_layout cf" key={rowIndex}>
                            <ul>
                                {displayedItemInfo
                                .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                                .map(item => renderItem({ item }))}
                            </ul>
                            </div>
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
