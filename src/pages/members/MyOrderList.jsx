import MyOrderItem from './MyOrderItem';

const MyOrderList = ({order}) => {

    return (
        <div className="MyOrderList">
            <div className="orderlist cover">
                <div className="order_title">
                    <h3>최근 주문 내역</h3>
                    <span><a href="../orderlist/orderlist.html">MORE<i className="fa-sharp fa-small fa-plus"></i></a></span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">주문일</th>
                            <th scope="col">주문번호</th>
                            <th scope="col">상품정보</th>
                            <th scope="col">옵션</th>
                            <th scope="col">수량</th>
                            <th scope="col">상품금액</th>
                            <th scope="col">주문상황</th>
                            <th scope="col">리뷰</th>
                            <th></th>
                        </tr>
                    </thead>
                    {order.slice(0, 3).map((order) => { return (<MyOrderItem key={order.id}{...order} />) })}
                </table>
            </div>
        </div>
    );
}

export default MyOrderList;