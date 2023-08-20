import React, { useState, useEffect } from 'react'
import '../../../../styles/payments/BasketGoods.css';
import usePricing from "../../../customHooks/usePricing";
import { Link } from 'react-router-dom';

// todoList
// 1. 체크박스 자식 요소도 선택될 수 있도록 구현
// 2. 체크된 리스트 삭제 버튼 구현

const BasketGoods = ({ id, name, price, link, imageFront, checked, onChange }) => {

    // usePricing 사용
    const { quantityGoods, changeQuantity, totalPricing, finalPricing } = usePricing(1, price);

    return (
        <tbody>
            <tr>
                <th>
                    <input type="checkbox"
                        name="goods"
                    // checked={childCheckboxes[index]} // 자식 체크박스 상태 반영
                    // onChange={() => handleChildCheckboxChange(index)} // 클릭 시 처리 함수 호출
                    />
                </th>

                <td className="goods_name">
                    <div>
                        <Link to={`/detail/`} >
                            <img src={imageFront} alt="상품사진" />
                        </Link>
                    </div>
                    <Link to={`/detail`}>
                        {name}
                    </Link>
                </td>

                {/* css 수정해야 함 */}
                <td className="goods_quantity">
                    <input type="number"
                        min={1} max={10}
                        Value={quantityGoods}
                        onChange={changeQuantity}
                    />
                </td>

                <td className="goods_price" >
                    {totalPricing()}
                </td>
            </tr>

            {/*             {
                mockItemsData.map((item, index) => ( // 각 자식 아이템에 대해 반복
                    <tr key={item.id}>
                        <th>
                            <input
                                type="checkbox"
                                name="goods"
                            />
                        </th>
                        <td className="goods_name">
                            <div>
                                <Link to={`/detail/${item.id}`} key={item.id}>
                                    <img src="{item.imageFront}" alt="상품사진" />
                                </Link>
                            </div>
                            <Link to={`/detail/${item.id}`} key={item.id}>
                                {item.name}
                            </Link>
                        </td>
                        <td className="goods_quantity">
                            <input
                                type="number"
                                min={1}
                                max={10}
                                value={quantityGoods}
                                onChange={changeQuantity}
                            />
                        </td>
                        <td className="goods_price">{totalPricing()}</td>
                    </tr>
                ))
            } */}
        </tbody >
    );
}

export default BasketGoods;