import '../../styles/payments/Checkout.css';
import Title from './compo/Title';
import Information from './compo/Information';
import Item from './compo/Item';
import Discount from './compo/Discount';
import Pay from './compo/Pay';
import SidePay1 from './compo/SidePay1';
import SidePay2 from './compo/SidePay2';
import CheckModal1 from './compo/Modal/CheckModal1';
import CheckModal2 from './compo/Modal/CheckModal2';
import CheckModal3 from './compo/Modal/CheckModal3';
import CheckModal4 from './compo/Modal/CheckModal4';
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
                            {/* <CheckModal1></CheckModal1> */}
                            {/* <CheckModal2></CheckModal2> */}
                            <CheckModal3></CheckModal3>
                            {/* <CheckModal4></CheckModal4> */}
                        </form>
                    </section>
                    <section className="check_right">
                        <SidePay1></SidePay1>
                        <SidePay2></SidePay2>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
