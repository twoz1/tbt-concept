import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CS_total from './pages/customerService/CS_total'
import Basket from './pages/payments/Basket';
import Glasses from './pages/items/Glasses';
import Join from './pages/members/Join';
import DetailedPage from './pages/items/DetailedPage';
import Sunglasses from './pages/items/Sunglasses';
import Main from './components/Main';
import Checkout from './pages/payments/Checkout';
import Collection from './pages/items/Collection';
import Login from './pages/members/Login';
import { useState } from 'react';
import Mypage from './pages/members/Mypage';
import Store from './pages/customerService/Store';
import ResultFrame from './pages/customerService/ResultFrame';
import Orderlist from './pages/members/Orderlist';

const orderList = [
    {
        id: 0,
        date: new Date("2023-03-03"),
        orderNumber: "20230101S210",
        itemName: "antonCrystal",
        itemTitle: "[찐추천템] 선글라스 g_antonCrystal",
        itemColor: "Black",
        itemQuantity: 1,
        itemPrice: 100000,
        orderState: "배송중",
        review: "작성하기"
    },
    {
        id: 0,
        date: new Date("2023-08-03"),
        orderNumber: "20230101S210",
        itemName: "antonCrystal",
        itemTitle: "[찐추천템] 선글라스 g_antonCrystal",
        itemColor: "Black",
        itemQuantity: 1,
        itemPrice: 100000,
        orderState: "배송중",
        review: "작성하기"
    }
]
function App() {

    const [order, setOrder] = useState(orderList);

    return (
        <div className="App">
            <Header />
            {/* 이지공간 */}
            {/* <Sunglasses /> */}
            <Join/>
            {/* <Glasses/> */}
            {/* <DetailedPage/> */}
            {/* 이지공간 */}
            {/* 진휘공간 */}
            {/* <Header /> */}
            {/* <Main /> */}
            {/* <Login /> */}
            {/* <Collection /> */}
            {/* <Checkout /> */}
            {/* <Footer /> */}
            {/* 진휘공간 */}
            {/* 현주공간 */}
            {/* <Mypage order={order}/> */}
            {/* <Store /> */}
            {/* <ResultFrame/> */}
            {/* <Orderlist order={order} /> */}
            {/* 현주공간 */}
            {/* 찬미공간 */}
            {/* <Basket /> */}
            {/* <CS_total /> */}
            {/* 찬미공간 */}

            <Footer />
        </div>
    );
}

export default App;
