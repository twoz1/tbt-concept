import React from 'react'
import '../../../../styles/payments/BasketPriceBox.css';

const BasketPriceBox = ({ calculateSelectedTotal }) => {

    const selectedTotal = calculateSelectedTotal();
    return (
        <div className="basket_payment">
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
                        0 원
                    </p>
                </li>
            </ul>

            <button type="button">선택상품 주문하기</button>
        </div>
    )
}

export default BasketPriceBox