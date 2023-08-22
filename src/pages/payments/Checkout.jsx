import '../../styles/payments/Checkout.css';
import Title from './components/Checkout/Title';
import Information from './components/Checkout/Information';
import Item from './components/Checkout/Item';
import Discount from './components/Checkout/Discount';
import Pay from './components/Checkout/Pay';
import SidePay2 from './components/Checkout/SidePay2';
import { useLocation } from 'react-router-dom';
import useScrollToTop from '../customHooks/useScrollToTop';

// --------------------------------------------------------------

// --------------------------------------------------------------
const Checkout = () => {
    const location = useLocation();
    const quantityGoods = location.state.quantityGoods;
    const name = location.state.name;
    const price = location.state.price;
    const imageFront = location.state.imageFront;
    console.log(price);
    useScrollToTop();
    return (
        <div>
            <div className="center m_c">
                <div className="check_box">
                    <section className="check_left">
                        <Title></Title>
                        <form action="#">
                            <div className="information">
                                <Information></Information>
                            </div>
                            <Item quantityGoods={quantityGoods} name={name} price={price} imageFront={imageFront} />
                            <Discount price={price} quantityGoods={quantityGoods} />
                            <Pay></Pay>
                            <SidePay2></SidePay2>
                        </form>
                    </section>
                    <section className="check_right">
                        {/* <SidePay1></SidePay1> */}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
