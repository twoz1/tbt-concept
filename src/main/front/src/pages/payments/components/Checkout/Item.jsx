import React, { useEffect, useState } from 'react';

import { Link, } from 'react-router-dom';

const Item = ({ updatedCheckoutList}) => {


    // updatedCheckoutList.forEach((item) => {
    //     console.log("^^^^^^^^^^^",item.product_img1.substring(0,1));
    //     console.log("^^^^^^^^^^^",item.fee);
    //     console.log("^^^^^^^^^^^",item.product_name.substring(0,1));
    // });
    // checkItemsInfo.forEach((item) => {
    //     console.log("^^^^^^^^^^^^^^^", item.product_name)
    // });


    return (
        <div className="item">
            <h3>주문상품</h3>

            <table className="item_table checkout_table">
                <tbody>
                    <tr>
                        <td colSpan="6">
                        </td>
                    </tr>
                
                
                    <tr className='orderinput_hidden'>
                        <th>리뷰상태</th>
                        <td>
                           <input type="text"  name="review_state" id="review_state" value="작성하기" required  />
                    <input type="text" name="order_total_each_quan" id="order_total_each_quan" value={updatedCheckoutList.length} required/>
                   </td>
                     </tr>
                    <tr>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                    {/* <tr class="itemComp"> */}
                    
                    {updatedCheckoutList.map((item) => (
                        <tr className="itemComp" key={item.product_id}>
                        <React.Fragment >
                            <td className="item_img" key={item.product_id}>
                            <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                                <img src={require(`../../../../images/${item.product_img1}`)} alt={item.product_name} />
                                {/* <img src={`../../../../images/${item.product_img1}`} alt="product_img1" /> */}
                                {console.log(item.product_id)}
                            </Link>
                            <Link to={`/detail/${item.product_id}`} key={item.product_id}>
                                <span>{item.product_name}</span>
                            </Link>
                            </td>
                            <td>
                                {item.cart_quan}
                            </td>
                            <td>
                                {/* <span>{item.product_price ? item.product_price.toLocaleString() : '가격 정보 없음'}원</span> */}
                                <span>{item.product_price * item.cart_quan}원</span>
                            </td>
                            <td>
                                <input type="text"  name="product_id" id="product_id" value={item.product_id} required  />
                                <input type="text" name="order_quan" id="order_quan" value={item.cart_quan} required/>
                                <input type="text"  name="order_price" id="order_price" value={item.product_price * item.cart_quan} required  />
                            </td>
                        </React.Fragment>
                        </tr>
                        ))}
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