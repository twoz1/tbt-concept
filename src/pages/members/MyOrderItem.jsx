import '../../styles/members/MyOrderItem.css';
import ReviewModal from './ReviewModal';
import useModal from '../useModal';

const MyOrderItem = ({date,orderNumber,itemName,itemTitle,itemColor,itemQuantity,itemPrice,orderState,review}) => {

    const {openModal, closeModal, isModal} = useModal();

    return (
        <tbody className="MyOrderItem">
            <tr>
                <td>{date}</td>
                <td>{orderNumber}</td>
                <td>
                    <a href="#" className="product">
                        <strong>{itemName}</strong>
                        <p>{itemTitle}</p>
                    </a>
                </td>
                <td>{itemColor}</td>
                <td>{itemQuantity}</td>
                <td>{itemPrice.toLocaleString()}원</td>
                <td>
                    <p>{orderState}</p>
                    {orderState === "배송중" && <p className="delivery"><button onClick={()=> openModal('delivery')}>배송조회</button></p>}
                </td>
                <td>
                    {review === "작성하기" ? <button className="review" onClick={()=> openModal('review')}>작성하기</button> : "작성완료" }
                    {isModal('review') && <ReviewModal openModal={openModal} isModal={isModal} closeModal={closeModal}/>}
                </td>
                <td><a href="#">더보기&gt;</a></td>
            </tr>
        </tbody>
    )


}

export default MyOrderItem;