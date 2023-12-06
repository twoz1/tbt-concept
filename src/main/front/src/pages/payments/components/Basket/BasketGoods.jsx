import React, { useState, useEffect } from 'react'
import '../../../../styles/payments/BasketGoods.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BasketGoods = ({ cart_quan, product_id, product_name, product_price, product_img1, changeQuantity, totalPricing, checkItems, handleSingleCheck }) => {

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

    console.log("checkItems => " + checkItems);
    function updateCartquan() {
        let url = "/rCart/cUpdate";

        if (loginUser != null) {
            axios.put(url, {
                user_id: loginUser.user_id,
                product_id: product_id,
                cart_quan: cart_quan,
            }).then(response => {
                if (response.data == "성공") {
                    alert("수량이 수정되었습니다.");
                } else {
                    alert("[수량 변경 실패] 다시 시도하세요.");
                }
            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[입력 오류] 다시 시도하세요.");
                } else {
                    alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });
        } else {
            alert("로그인 후 이용하세요.");
        }

    }

    return (
        <tr key={product_id}>
            <th>
                <input type="checkbox"
                    name="goods"
                    checked={checkItems.includes(product_id)}
                    onChange={() => handleSingleCheck(!checkItems.includes(product_id), product_id)}
                    value={cart_quan}
                />
            </th>

            <td className="goods_name">
                <div>
                    <Link to={`/detail/${product_id}`} >
                        <img src={require(`../../../../images/${product_img1}`)} alt="상품사진" />
                    </Link>
                </div>
                <Link to={`/detail/${product_id}`}>
                    {product_name}
                </Link>
            </td>

            {/* css 수정해야 함 */}
            <td className="goods_quantity">
                <input type="number"
                    min={1} max={10}
                    value={cart_quan}
                    onChange={(e) => changeQuantity(e, product_id)}
                />
                <span className='changeCquan' onClick={() => (updateCartquan())}>수정</span>
            </td>

            <td className="goods_price" >
                {(totalPricing(product_price, cart_quan)).toLocaleString()}원
            </td>
        </tr>

    );
}

export default BasketGoods;