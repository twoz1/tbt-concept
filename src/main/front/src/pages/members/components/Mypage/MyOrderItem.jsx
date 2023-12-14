import '../../../../styles/members/MyOrderItem.css';
import OrderModal from './OrderModal';
import useModal from '../../../customHooks/useModal';


const MyOrderItem = ({ user_id, coupon_id, order_date, address_name, address_avc, address_city, address_detail, order_id,
    address_phone_num, order_del_state, order_message, order_pay, order_total_each_quan, order_total_price, order_state, order_del_num }) => {

    const { openModal, closeModal, isModal } = useModal();

    return (
        <tbody className="MyOrderItem">
            <tr>
                <td>{order_date}</td>
                <td>{order_id}</td>
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
                    <p>{order_del_state}</p>
                    {order_del_state === "배송중" && <p className="delivery"><button onClick={() => openModal('delivery')}>배송조회</button></p>}
                    {isModal('delivery') && <OrderModal closeModal={closeModal} user_id={user_id} order_id={order_id} order_date={order_date}
                        address_name={address_name} address_avc={address_avc} address_city={address_city} address_detail={address_detail} address_phone_num={address_phone_num}
                        order_total_price={order_total_price} order_state={order_state} order_del_num={order_del_num} order_del_state={order_del_state} />}

                </td>
                <td><button onClick={() => openModal('delivery')}>더보기&gt;</button></td>
            </tr>
        </tbody>
    )


}

export default MyOrderItem;