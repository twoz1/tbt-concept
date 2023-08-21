import '../../styles/payments/Basket.css';
import BasketGoods from './components/Basket/BasketGoods';
import BasketPriceBox from './components/Basket/BasketPriceBox';
import { useContext, useState } from 'react';
import mockItemsContext from '../items/MockItems';

const Basket = () => {

    //useContext로 mock 데이터 받아오기
    const { sArr, gArr } = useContext(mockItemsContext);
    const mockItemsData = [...sArr, ...gArr];

    const cartList = mockItemsData.slice(0, 4);
    const [checkItems, setCheckItems] = useState([]);
    const [cartItems, setCartItems] = useState(cartList);

    const handleAllCheck = (checked) => {
        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            cartItems.map((el) => idArray.push(el.name));
            setCheckItems(idArray);
            // console.log(checkItems);
        } else {
            setCheckItems([])
        }
    }

    const handleSingleCheck = (checked, name) => {
        if (checked) {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열(필터)
            setCheckItems([...checkItems, name])
        } else {
            setCheckItems(checkItems.filter((el) => el !== name))
        }
    }

    return (
        <div>
            <div className="center m_c">
                <div className="basket_total">
                    <div className="title_route">
                        <h2><strong>SHOPPING BAG</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>SHOPPING BAG</li>
                        </ul>
                    </div>

                    <div className="basket_box">
                        <form action="#">
                            <div className="d_flex">
                                <figure className="basket_table">
                                    <h3>쇼핑백 상품</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox"
                                                        checked={checkItems.length === cartItems.length}
                                                        onChange={() => handleAllCheck(checkItems.length !== cartItems.length)}
                                                    />
                                                </th>
                                                <th>상품 정보</th>
                                                <th>수량</th>
                                                <th>상품 가격</th>
                                            </tr>
                                        </thead>

                                        {cartItems.map((item) => <BasketGoods key={item.name} {...item}
                                            handleAllCheck={handleAllCheck}
                                            handleSingleCheck={handleSingleCheck}
                                            checkItems={checkItems}
                                        />)}
                                    </table>

                                    <div className="btn_bottom">
                                        <button type="button">선택상품삭제</button>
                                        <button type="button">쇼핑계속하기</button>
                                    </div>
                                </figure>

                                <BasketPriceBox />
                            </div>


                        </form>
                    </div>
                </div>
            </div >
        </div >//최종div
    );
};

export default Basket;