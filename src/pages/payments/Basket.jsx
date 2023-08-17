import '../../styles/payments/Basket.css';
import BasketGoods from './components_Basket/BasketGoods';
import BasketPriceBox from './components_Basket/BasketPriceBox';


const mockBasket = [
    {
        id: 0,
        basketIMG: '../../../images/cstotalNewService_03.jpg',
        goodsName: "EVA crystal-violet tint",
        goodsQuantity: 5,
        goodsPrice: 165000
    }
];

const Basket = () => {





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
                                    <BasketGoods />
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
