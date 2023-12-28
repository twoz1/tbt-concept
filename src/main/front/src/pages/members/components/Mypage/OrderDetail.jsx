import React from 'react';
import '../../../../styles/members/OrderModal.css';
import useModal from '../../../customHooks/useModal';
import { Link } from 'react-router-dom';
import { ReviewModal } from './ReviewModal';

const OrderDetail = ({ user_id, product_id, product_name, order_quan, order_price, review_state ,order_detail_id ,order_del_state}) => {

    const { openModal, closeModal, isModal } = useModal();
   
    const showReviewButton = order_del_state === "배송완료" && review_state ==="작성하기" ;
    console.log("배송완료",order_del_state);

    return (
        <tr>
            <td>{product_name}</td>
            <td>{order_quan}</td>
            <td>{order_price.toLocaleString()}원</td>
             <td>
                {showReviewButton ? (
                    <button className="review" onClick={() => openModal('review')}>작성하기</button>
                ) : (
                     review_state === "작성완료" ? 
                     <Link to={`/detail/${product_id}`} key={product_id} >
                      <span>리뷰보기</span>
                    </Link>
                     : null
                )}
                {isModal('review') && (
                    <ReviewModal
                        user_id={user_id}
                        product_id={product_id}
                        order_detail_id={order_detail_id}
                        closeModal={closeModal}
                    />
                )}
            </td>
        </tr >

    )
}

export default OrderDetail;