import React, { useState, useEffect } from 'react'
import '../../../../styles/payments/BasketGoods.css';
import usePricing from "../../../customHooks/usePricing";

// todoList
// 1. 체크박스 자식 요소도 선택될 수 있도록 구현
// 2. 체크된 리스트 삭제 버튼 구현

const BasketGoods = ({ mockItemsData, selectAll }) => {

    // mockItemsData 객체 분해
    const { id, name, price, link, imageFront, imageSide } = mockItemsData[0];

    // usePricing 사용
    const { quantityGoods, changeQuantity, totalPricing, finalPricing } = usePricing(1, price);

    const [childCheckboxes, setChildCheckboxes] = useState(mockItemsData.map(() => false));

    // 부모 컴포넌트에서 체크박스 상태가 변경되면 자식 컴포넌트의 체크박스 상태도 변경
    useEffect(() => {
        setChildCheckboxes(mockItemsData.map(() => selectAll));
    }, [selectAll]);

    // 자식 체크박스가 클릭되었을 때의 처리 함수
    const handleChildCheckboxChange = (index) => {
        const updatedCheckboxes = [...childCheckboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setChildCheckboxes(updatedCheckboxes);
    };


    return (
        <tbody>
            {/* <tr>
                <th>
                    <input type="checkbox"
                        name="goods"
                        checked={childCheckboxes[index]} // 자식 체크박스 상태 반영
                        onChange={() => handleChildCheckboxChange(index)} // 클릭 시 처리 함수 호출
                    />
                </th>

                <td className="goods_name">
                    <div><a href="../detailed_page/detaied_page.html"><img src="../basket/img/sunglass2.jpg" alt="상품사진" /></a></div>
                    <a href="../detailed_page/detaied_page.html">{name}</a>
                </td> */}

            {/* css 수정해야 함 */}
            {/* <td className="goods_quantity">
                <input type="number" min={1} max={10} Value={quantityGoods} onChange={changeQuantity} />
            </td>
            <td className="goods_price" >{totalPricing()}</td>
        </tr> */}

            {
                mockItemsData.map((item, index) => ( // 각 자식 아이템에 대해 반복
                    <tr key={item.id}>
                        <th>
                            <input
                                type="checkbox"
                                name="goods"
                                checked={childCheckboxes[index]} // 자식 체크박스 상태 반영
                                onChange={() => handleChildCheckboxChange(index)} // 클릭 시 처리 함수 호출
                            />
                        </th>
                        <td className="goods_name">
                            <div>
                                <a href="../detailed_page/detaied_page.html">
                                    <img src="../basket/img/sunglass2.jpg" alt="상품사진" />
                                </a>
                            </div>
                            <a href="../detailed_page/detaied_page.html">{item.name}</a>
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
            }


            {/* test용 ======================*/}
            {/*             <tr>
                <th>
                    <input type="checkbox"
                        name="goods"
                        checked={selectAll}
                        onChange={() => { }}
                    />
                </th>

                <td className="goods_name">
                    <div><a href="../detailed_page/detaied_page.html"><img src="../basket/img/sunglass2.jpg" alt="상품사진" /></a></div>
                    <a href="../detailed_page/detaied_page.html">{name}</a>
                </td> */}

            {/* css 수정해야 함 */}
            {/*                 <td className="goods_quantity">
                    <input type="number" min={1} max={10} Value={quantityGoods} onClick={changeQuantity} />
                </td>
                <td className="goods_price">{totalPricing()}</td>
            </tr> */}
            {/* test용 ======================*/}

        </tbody >
    );
}

export default BasketGoods;