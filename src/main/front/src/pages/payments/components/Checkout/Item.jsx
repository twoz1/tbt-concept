import React, { useEffect, useState } from 'react';
import ItemInfo from './ItemInfo';
import axios from 'axios';


const Item = ({ checkoutList}) => {

    const [orderNumber, setOrderNumber] = useState('');
    function padZero(number) {
        return number < 10 ? "0" + number : number;
    }
    const generateOrderNumber = () => {
        let now = new Date();
        let timestamp =
            now.getFullYear().toString() +
            padZero(now.getMonth() + 1) +
            padZero(now.getDate()) +
            padZero(now.getHours()) +
            padZero(now.getMinutes()) +
            padZero(now.getSeconds());

        let randomValue = padZero(Math.floor(Math.random() * 1000));
        timestamp += randomValue;

        setOrderNumber(timestamp); // 상태를 설정

        let order_id_input = document.getElementById("order_id");
        let order_date_input = document.getElementById("order_date");

        if (order_id_input && order_date_input) {
            order_id_input.value = timestamp;
            order_date_input.value = timestamp.substring(0, 8);
            console.log("***" + timestamp.length);
        } else {
            console.error("Element with id 'order_id' or 'order_date' not found.");
        }
    };

    useEffect(() => {
        generateOrderNumber();
    }, []);

    function insertOrderList() {
        let url = "/order/oDetailListInsert";
        let formData = new FormData(document.getElementById('oListInsert'));

            axios.post(url, formData)
            .then(response => {
                alert("주문완료" + response.data);
                console.log("주문 완료 ");
                navigateTo("/resultframe");
            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[입력 오류] 다시 시도하세요.");
                } else {
                    alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });
    
    }
    function navigateTo(url) {
        console.log("이동하고자 하는 URL:", url); 
        window.location.href = url; // 또는 history.pushState({}, null, url); 사용
    }

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
	               		<th>주문번호</th>
	               		<td>
	               			<input type="text" name="order_id" id="order_id" value={orderNumber} required  />
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
                    <tr>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>

                    {checkoutList.map((item) => <ItemInfo key={item.name}{...item} />)}

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