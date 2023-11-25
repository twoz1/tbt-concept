import '../../styles/payments/Basket.css';
import BasketGoods from './components/Basket/BasketGoods';
import BasketPriceBox from './components/Basket/BasketPriceBox';
import { useState, useMemo, useEffect } from 'react';
import mockItemsContext from '../items/MockItems';
// import usePricing from "../customHooks/usePricing";

const Basket = ({ mockItemsData }) => {

    const cartList = mockItemsData.slice(0, 4);
    const [checkItems, setCheckItems] = useState([]);
    const [cartItems, setCartItems] = useState(cartList);

    //체크박스 구현============================
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

    // 상품 금액 계산============================
    const [quantityGoods, setQuantityGoods] = useState(1);

    //상품 개수 선택
    const changeQuantity = (e, itemName) => {
        const newQuantity = parseInt(e.target.value);
        setQuantityGoods(newQuantity);
        const newCart = cartItems.map((item) => {
            if (item.name === itemName) {
                return { ...item, quantity: newQuantity };
            } else {
                return { ...item };
            }
        });

        setCartItems(newCart);
    };

    const totalPricing = (price, quantityGoods) => {
        const newTotalPricing = (quantityGoods * price);
        return newTotalPricing;
    };

    // 선택 상품 삭제============================
    const handleDeleteSelected = () => {
        const updatedCartItems = cartItems.filter(item => !checkItems.includes(item.name));
        setCartItems(updatedCartItems);
        setCheckItems([]); // 체크된 아이템 초기화
    };

    // 총 결제 금액 ==============================
    const [fee, setFee] = useState(0);


    //선택 상품 총합 계산 (개수 반영)
    const calculateSelectedTotal = () => {
        let selectedTotal = 0;
    
        for (const item of cartItems) {
            if (checkItems.includes(item.name)) {
                selectedTotal += totalPricing(item.price, item.quantity);
            }
        }

        //배달비 계산
        if (selectedTotal >= 200000 || selectedTotal < 1) {
            setFee(0);
        } else {
            setFee(3000);
        }

        return { selectedTotal, fee };
    };

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
                                            changeQuantity={(e) => changeQuantity(e, item.name)}
                                            totalPricing={totalPricing}
                                            quantityGoods={item.quantity}
                                            price={item.price}
                                        />)}

                                    </table>

                                    <div className="btn_bottom">
                                        <button type="button" onClick={handleDeleteSelected}>선택상품삭제</button>
                                        <button onClick={() => { window.location.href = "/"; }} type="button">쇼핑계속하기</button>
                                    </div>
                                </figure>

                                <BasketPriceBox calculateSelectedTotal={calculateSelectedTotal} fee={fee} />
                            </div>


                        </form>
                    </div>
                </div>
            </div >
        </div >//최종div
    );
};

export default Basket;