import React, { useEffect, useState } from 'react';
import ItemInfo from './ItemInfo';
import { Link } from 'react-router-dom';


const Item = ({ checkoutList, data, quantityGoods}) => {


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
                    <tr>
                        <td colSpan="6">
                             <input type="text" name="order_quan" id="order_quan" value="3" required/>
                        </td>
                    </tr>
                    <tr className='orderinput_hidden'>
	               		<th>디테일아이디</th>
	               		<td>
	               			<input type="text" name="order_detail_id" id="order_detail_id" required  />
						</td>
	               	</tr>
                  
                    <tr className='orderinput_hidden'>
	               		<th>상품 번호</th>
	               		<td>
	               			<input type="text"  name="product_id" id="product_id" required  />
					    </td>
	               	</tr>
                    <tr className='orderinput_hidden'>
	               		<th>상품 가격</th>
	               		<td>
	               			<input type="text"  name="order_price" id="order_price" required  />
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

                    {/* {checkoutList.map((item) => <ItemInfo key={item.name}{...item} />)} */}
                    {data && data.map((item) => (
                    <tr key={item.product_id} className="itemComp">
                            <td className="item_img">
                            <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                                <img src={require(`../../../../images/${item.product_img1}`)} alt="상품" />
                            </Link>
                                <Link to={`/detail/${item.product_name}`}>
                                    {item.product_name}
                                </Link>
                            </td>
                            <td>
                                {quantityGoods}
                            </td>
                            <td>
                            <span>{item.product_price ? item.product_price.toLocaleString() : '가격 정보 없음'}원</span>
                            </td>
                        </tr>))}

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