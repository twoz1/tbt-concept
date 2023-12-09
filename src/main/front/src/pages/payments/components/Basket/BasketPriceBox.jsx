import React, { useState,useEffect } from 'react';
import '../../../../styles/payments/BasketPriceBox.css';
import { Link } from 'react-router-dom';
import navigateTo from '../../../config/navigateTo';
import axios from 'axios';
import Checkout from './../../Checkout';

const BasketPriceBox = ( { checkItems, cartUserList, calculateSelectedTotal } ) => {

    const { selectedTotal, fee } = calculateSelectedTotal(); // selectedTotal와 fee를 함께 가져옴

    // checkItems(체크된 product_id만 들어있음)에 포함된 product_id의 정보 가져오기
    const checkItemsInfo = cartUserList.filter(item => checkItems.includes(item.product_id));

    function prevCheckout() {
        alert("주문하실 상품을 선택해주세요.");
    }

    return (
        <div className= "basket_payment" >
            <h3>주문 금액</h3>
            <hr />

            <ul>
                <li>
                    <strong>총 상품 금액</strong>
                    <p>
                        {selectedTotal.toLocaleString()} 원
                    </p>
                </li>

                <li>
                    <strong>배송비</strong>
                    <p>
                        {fee.toLocaleString()} 원
                    </p>
                </li>
            </ul>

            {checkItemsInfo.length > 0 ?
                <Link className='orderCheckItems' to={`/checkout`}
                    state={{ checkItemsInfo: checkItemsInfo, selectedTotal: selectedTotal, fee: fee }} >선택상품 주문하기</Link>
                : <div className='orderCheckItems' onClick={() => prevCheckout()}>선택상품 주문하기</div>
            }
        </div>
    )
}

export default BasketPriceBox;