import React, { useState } from 'react'
import '../../../styles/payments/BasketGoods.css';
import usePricing from "../../usePricing";


const BasketGoods = ({ mockItemsData }) => {


    // mockItemsData 객체 분해
    const { id, name, price, link, imageFront, imageSide } = mockItemsData[0];
    const { quantityGoods, changeQuantity, totalPricing, finalPricing } = usePricing(1, price);

    return (
        <tbody>
            <tr>
                <th><input type="checkbox" name="goods" /></th>

                <td className="goods_name">
                    <div><a href="../detailed_page/detaied_page.html"><img src="../basket/img/sunglass2.jpg" alt="상품사진" /></a></div>
                    <a href="../detailed_page/detaied_page.html">{name}</a>
                </td>

                {/* css 수정해야 함 */}
                <td className="goods_quantity">
                    <input type="number" min={1} max={10} Value={quantityGoods} onChange={changeQuantity} />
                </td>
                <td className="goods_price" >{totalPricing()}</td>
                {/* <td className="goods_price" >{finalPricing()}</td> */}
            </tr>


            {/* test용 ======================*/}
            <tr>
                <th><input type="checkbox" name="goods" /></th>

                <td className="goods_name">
                    <div><a href="../detailed_page/detaied_page.html"><img src="../basket/img/sunglass2.jpg" alt="상품사진" /></a></div>
                    <a href="../detailed_page/detaied_page.html">{name}</a>
                </td>

                {/* css 수정해야 함 */}
                <td className="goods_quantity">
                    <input type="number" min={1} max={10} Value={quantityGoods} onClick={changeQuantity} />
                </td>
                <td className="goods_price">{totalPricing()}</td>
            </tr>
            {/* test용 ======================*/}

        </tbody>
    );
}

export default BasketGoods;