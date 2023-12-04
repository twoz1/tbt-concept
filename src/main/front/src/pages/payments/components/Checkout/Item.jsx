import React, { useEffect, useState } from 'react';
import ItemInfo from './ItemInfo';
import s_bibiBeige_01 from '../../../../images/s_bibiBeige_01.jpg';
import { Link, } from 'react-router-dom';




const Item = ({ updatedCheckoutList,}) => {

    updatedCheckoutList.forEach((item) => {
        console.log("^^^^^^^^^^^",item.product_img1);
    });
    return (
        <div className="item">
            <h3>주문상품</h3>

            <table className="item_table checkout_table">
                <tbody>
                    <tr>
                        <td colSpan="6">
                             <input type="text" name="order_total_each_quan" id="order_total_each_quan" value="2" required/>
                        </td>
                    </tr>
                
                    <tr className='orderinput_hidden'>
	               		<th>디테일아이디</th>
	               		<td>
	               			<input type="text" name="order_detail_id" id="order_detail_id" required  />
						</td>
	               	</tr>
                    <tr className='orderinput_hidden'>
	               		<th>리뷰상태</th>
	               		<td>
	               			<input type="text"  name="review_state" id="review_state" value="작성하기" required  />
					    </td>
	               	</tr>
                    <tr>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>

                    <tr class="itemComp">
                    {/* const { quantityGoods, changeQuantity, totalPricing } = usePricing(1, product_price); */}
                    {updatedCheckoutList.map((item) => (
                        <React.Fragment >
                            <td className="item_img" key={item.product_id}>
                            <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                                <img src={require(`../../../../images/${item.product_img1}`)} alt="product_img1" />
                            {console.log("객체",updatedCheckoutList)}
                            {console.log("상품아이디",item.product_id)}
                            {console.log("상품 이미지",item.product_img1)}
                            {console.log("상품이름",item.product_name)}
                            {console.log("상품 수량",item.quantityGoods)}
                            {console.log("상품 가격",item.product_price)}
                            </Link>
                            <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                                <span>{item.product_name}</span>
                            </Link>
                            </td>
                            <td>
                                {item.quantityGoods}
                            </td>
                            <td>
                                {/* <span>{item.product_price ? item.product_price.toLocaleString() : '가격 정보 없음'}원</span> */}
                                <span>{item.product_price * item.quantityGoods}원</span>
                            </td>
                            <td>
                                <input type="text"  name="product_id" id="product_id" value={item.product_id} required  />
                                <input type="text" name="order_quan" id="order_quan" value={item.quantityGoods} required/>
                                <input type="text" name="order_quan" id="order_quan" value={item.quantityGoods} required/>
                                <input type="text"  name="order_price" id="order_price" value={item.product_price * item.quantityGoods} required  />
                            </td>
                        </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <span>&#42;</span> 제주&#47;도서산간 지역의 경우 추가 배송비가 발생할 수 있습니다.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Item;