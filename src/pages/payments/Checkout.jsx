import '../../styles/payments/Checkout.css';
import Title from './components/Checkout/Title';
import Information from './components/Checkout/Information';
import Item from './components/Checkout/Item';
import Discount from './components/Checkout/Discount';
import Pay from './components/Checkout/Pay';
import SidePay1 from './components/Checkout//SidePay1';
import SidePay2 from './components/Checkout/SidePay2';
import Join_Modal02 from '../members/components/Join/Join_Modal02';
import Join_Modal03 from '../members/components/Join/Join_Modal03';
const Checkout = () => {
    const [totalCount, setTotalCount] = useState(89000);
    const [selectedCoupon, setSelectedCoupon] = useState("default");
    
    const couponOptions = [
        { value: "default", label: "쿠폰선택", discount: 0 },
        { value: "welcome", label: "회원가입 감사 10% 할인 쿠폰", discount: 0.1 },
        { value: "summer", label: "s/s기념 10% 할인 쿠폰", discount: 0.1 },
    ];
    
    const handleCouponChange = (event) => {
        const selectedValue = event.target.value;
        const selectedCouponInfo = couponOptions.find(coupon => coupon.value === selectedValue);
        setSelectedCoupon(selectedValue);
        
        if (selectedCouponInfo) {
            const discountedTotal = totalCount - (totalCount * selectedCouponInfo.discount);
            setTotalCount(discountedTotal);
        } else {
            setTotalCount(89000); // Default total count if no coupon is selected
        }
    };
    
    useEffect(() => {
        if (selectedCoupon === "default") {
            setTotalCount(89000);
        }
    }, [selectedCoupon]);
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
