import React from 'react';
import '../../../../styles/members/OrderModal.css';
import useModal from '../../../customHooks/useModal';
import { ReviewModal } from './ReviewModal';

const OrderDetail = ({ user_id, product_id, order_quan, order_price, review_state ,order_detail_id}) => {

    const { openModal, closeModal, isModal } = useModal();
      // 리뷰 완료 시 호출되는 콜백 함수

    return (
        <tr>
            <td>{product_id}</td>
            <td>{order_quan}</td>
            <td>{order_price.toLocaleString()}원</td>
            <td>
                {review_state === "작성하기" ? <button className="review" onClick={() => openModal('review')}>작성하기</button> : "작성완료"}
                {isModal('review') && <ReviewModal user_id={user_id} product_id={product_id} order_detail_id={order_detail_id} closeModal={closeModal} />}
            </td>
        </tr >

    )
}

export default OrderDetail;