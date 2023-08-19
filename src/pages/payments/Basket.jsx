import '../../styles/payments/Basket.css';
import BasketGoods from './components_Basket/BasketGoods';
import BasketPriceBox from './components_Basket/BasketPriceBox';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import mockItemsContext from './MockItems';

const Basket = () => {

    // const { id } = useParams();

    const mockItemsData = useContext(mockItemsContext);

    //useParams 구현 됐을 경우 코드
    // const selectedItem = mockItemsData.find(item => item.id === parseInt(id));

    return (
        <div>
            <div className="center m_c">
                <div className="basket_total">
                    <div className="title_route">
                        <h2><strong>SHOPPING BAG</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>SHOPPING BAG</li>
                        </ul>
                    </div>

                    <div className="basket_box">
                        <form action="#">
                            <div className="d_flex">
                                <figure className="basket_table">
                                    <h3>쇼핑백 상품</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
                                                <th>상품 정보</th>
                                                <th>수량</th>
                                                <th>상품 가격</th>
                                            </tr>
                                        </thead>

                                        <BasketGoods mockItemsData={mockItemsData} />
                                    </table>
                                    
                                    <div className="btn_bottom">
                                        <button type="button">선택상품삭제</button>
                                        <button type="button">쇼핑계속하기</button>
                                    </div>
                                </figure>

                                <BasketPriceBox />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>//최종div
    );
};

export default Basket;
