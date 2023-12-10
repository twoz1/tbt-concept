import '../../styles/payments/Basket.css';
import BasketGoods from './components/Basket/BasketGoods';
import BasketPriceBox from './components/Basket/BasketPriceBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

const Basket = () => {

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));



    // 장바구니에 담긴 DB 요청 (cart, product Join)
    const [cartUserList, setCartUserList] = useState([]);

    useEffect(() => {
        let url = "/rCart/cpJList/" + loginUser.user_id;

        axios.get(url).then(response => {
            setCartUserList(response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[Cart 입력 오류] 다시 시도하세요.");
            } else {
                alert("[Cart 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);

    const [checkItems, setCheckItems] = useState([]);

    //체크박스 구현============================
    const handleAllCheck = (checked) => {
        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            cartUserList.map((el) => idArray.push(el.product_id));
            setCheckItems(idArray);
        } else {
            setCheckItems([])
        }
    }

    const handleSingleCheck = (checked, product_id) => {
        if (checked) {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열(필터)
            setCheckItems([...checkItems, product_id])
        } else {
            setCheckItems(checkItems.filter((el) => el !== product_id))
        }
    }

    // 상품 금액 계산============================
    const [quantityGoods, setQuantityGoods] = useState(1);

    //상품 개수 선택
    const changeQuantity = (e, product_id) => {
        const newQuantity = parseInt(e.target.value);
        setQuantityGoods(newQuantity);
        const newCart = cartUserList.map((item) => {
            if (item.product_id === product_id) {
                return { ...item, cart_quan: newQuantity };
            } else {
                return { ...item };
            }
        });

        setCartUserList(newCart);
    };

    const totalPricing = (product_price, quantityGoods) => {
        const newTotalPricing = (quantityGoods * product_price);
        return newTotalPricing;
    };

    // 선택 상품 삭제============================
    const handleDeleteSelected = () => {
        const checkItemsQS = qs.stringify({ product_id: checkItems }, { arrayFormat: 'repeat' });
        console.log(checkItemsQS);

        // 장바구니 삭제 DB 요청
        if (checkItems !== null) {
            axios.delete("/rCart/cDelete?user_id=" + loginUser.user_id + "&" + checkItemsQS
            ).then(response => {
                const updatedCartItems = cartUserList.filter(item => !checkItems.includes(item.product_id));
                setCartUserList(updatedCartItems);
                setCheckItems([]); // 체크된 아이템 초기화
                alert("상품이 삭제되었습니다.");
                window.location.reload();
            }).catch(err => {
                alert("[상품삭제 실패] 다시 시도해주세요.");
            });
        }
    };

    // 총 결제 금액 ==============================
    const [fee, setFee] = useState(0);


    //선택 상품 총합 계산 (개수 반영)
    const calculateSelectedTotal = () => {
        let selectedTotal = 0;

        for (const item of cartUserList) {
            if (checkItems.includes(item.product_id)) {
                selectedTotal += totalPricing(item.product_price, item.cart_quan);
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
                                                        checked={checkItems.length === cartUserList.length}
                                                        onChange={() => handleAllCheck(checkItems.length !== cartUserList.length)}
                                                    />
                                                </th>
                                                <th>상품 정보</th>
                                                <th>수량</th>
                                                <th>상품 가격</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {cartUserList.map((item) => <BasketGoods key={item.product_id} {...item}
                                                handleAllCheck={handleAllCheck}
                                                handleSingleCheck={handleSingleCheck}
                                                checkItems={checkItems}
                                                changeQuantity={(e) => changeQuantity(e, item.product_id)}
                                                totalPricing={totalPricing}
                                                cart_quan={item.cart_quan}
                                                price={item.product_price}
                                            />)}
                                        </tbody>

                                    </table>

                                    <div className="btn_bottom">
                                        <button type="button" onClick={handleDeleteSelected}>선택상품삭제</button>
                                        <button onClick={() => { window.location.href = "/"; }} type="button">쇼핑계속하기</button>
                                    </div>
                                </figure>

                                <BasketPriceBox checkItems={checkItems} cartUserList={cartUserList} calculateSelectedTotal={calculateSelectedTotal} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >//최종div
    );
};

export default Basket;