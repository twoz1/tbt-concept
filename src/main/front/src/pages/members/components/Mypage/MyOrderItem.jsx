import '../../../../styles/members/MyOrderItem.css';
import { ReviewModal } from './ReviewModal';
import OrderModal from './OrderModal';
import useModal from '../../../customHooks/useModal';
import axios from 'axios';

const MyOrderItem = ({ orderId, coupon_list_id, order_date, address_name, address_avc, address_detail, address_phone_num,
    order_message, order_pay, order_total_each_quan, order_total_price, order_state, order_del_num }) => {

    const { openModal, closeModal, isModal } = useModal();


    return (
        <tbody className="MyOrderItem">
            <tr>
                <td>{order_date}</td>
                <td>{orderId}</td>
                {/* <td>
                    <a href="#" className="product">
                        <strong>{itemName}</strong>
                        <p>{itemTitle}</p>
                    </a>
                </td> */}
                <td>{order_total_each_quan}</td>
                <td>{order_total_price.toLocaleString()}원</td>
                <td>{order_pay}</td>
                <td>
                    <p>{order_state}</p>
                    {order_state === "배송중" && <p className="delivery"><button onClick={() => openModal('delivery')}>배송조회</button></p>}
                    {isModal('delivery') && <OrderModal closeModal={closeModal} />}

                </td>
                <td>
                    {order_state === "작성하기" ? <button className="review" onClick={() => openModal('review')}>작성하기</button> : "작성완료"}
                    {isModal('review') && <ReviewModal closeModal={closeModal} />}
                </td>
                <td><button onClick={() => openModal('delivery')}>더보기&gt;</button></td>
            </tr>
        </tbody>
    )


}

export default MyOrderItem;