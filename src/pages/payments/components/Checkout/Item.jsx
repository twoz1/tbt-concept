import React, { useState } from 'react';
import { useContext } from 'react';
import mockItemsContext from '../../../items/MockItems';
import ItemInfo from './ItemInfo';

const Item = ({ quantityGoods, price, imageFront }) => {
    console.log(price);
    const { gArr } = useContext(mockItemsContext);
    const itemList = [...gArr];
    const [selectAll, setSelectAll] = useState(false);
    const [individualSelect, setIndividualSelect] = useState(false); // 상품 개별 선택 상태 추가

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setIndividualSelect(!selectAll); // 전체 선택 상태 변경 시 개별 선택 상태도 변경
    };

    const handleIndividualSelect = () => {
        setIndividualSelect(!individualSelect);
    };

    return (
        <div className="item">
            <h3>주문상품</h3>

            <table className="item_table">
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        </td>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>총 상품 금액</th>
                        <th>배송비</th>
                    </tr>
                    <tr>
                        <ItemInfo quantityGoods={quantityGoods} price={price} imageFront={imageFront} individualSelect={individualSelect} handleIndividualSelect={handleIndividualSelect} />
                        {/* <td>
                            <input type="checkbox" checked={individualSelect} onChange={handleIndividualSelect} />
                        </td>
                        {itemList.slice(0, 1).map((item) => (
                            <td className='item_img'>
                                <img src={item.imageFront} alt="상품이미지" />
                            </td>
                        ))}
                        <td>1</td>
                        {itemList.slice(0, 1).map((item) => (
                            <td>
                                <span>{item.price.toLocaleString()}원</span>
                            </td>
                        ))}
                        {itemList.slice(0, 1).map((item) => (
                            <td>
                                <span>{item.price.toLocaleString()}원</span>
                            </td>
                        ))}
                        <td>무료</td> */}
                    </tr>

                    <tr>
                        <td colSpan="6">
                            <span>&#42;</span>제주&#47;도서산간 지역의 경우 추가 배송비가 발생할 수 있습니다.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Item;
