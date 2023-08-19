import '../../styles/payments/Checkout.css';
import Title from './compo/Title';
import Information from './compo/Information';
import Item from './compo/Item';
import Discount from './compo/Discount';
import Pay from './compo/Pay';
import SidePay1 from './compo/SidePay1';
import SidePay2 from './compo/SidePay2';
import Join_Modal02 from '../members/Join_Modal02';
import Join_Modal03 from '../members/Join_Modal03';
const Checkout = () => {
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
                            <Item></Item>
                            <Discount></Discount>
                            <Pay></Pay>
                        </form>
                    </section>
                    <section className="check_right">
                        <SidePay1></SidePay1>
                        <SidePay2></SidePay2>
                        {/* <Join_Modal02></Join_Modal02> */}
                        {/* <Join_Modal03></Join_Modal03> */}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
