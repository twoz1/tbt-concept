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
import Mypage from './pages/members/Mypage';
import Store from './pages/customerService/Store';
import ResultFrame from './pages/customerService/ResultFrame';
import Orderlist from './pages/members/Orderlist';
import New_goods from './pages/items/New_goods';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import mockItemsContext from './pages/items/MockItems';



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
        orderState: "배송완료",
        review: "작성완료"
    }
]



function App() {

    const [order, setOrder] = useState(orderList);

    const { sArr, gArr } = useContext(mockItemsContext);
    const mockItemsData = [...sArr, ...gArr];

    return (
        <div className="App">
            <Header />

            <Routes>
                {/* ----------------고정 헤더의 링크-------- */}
                <Route path='/' element={<Main />}></Route >
                <Route path='/sunglasses' element={<Sunglasses />}></Route >
                <Route path='/glasses' element={<Glasses />}></Route >
                <Route path='/collection' element={<Collection />}></Route >
                <Route path='/new' element={<New_goods />}></Route >
                <Route path='/store' element={<Store />}></Route >

                <Route path='/cart' element={<Basket mockItemsData={mockItemsData} />}></Route>
                <Route path='/my' element={<Mypage order={order} />}></Route >
                <Route path='/login' element={<Login />}></Route >
                <Route path='/join' element={<Join />}></Route >

                {/* ----------------고정 헤더의 링크-------- */}
                {/* ----------------고정 풋터의 링크-------- */}

                <Route path='/cs' element={<CS_total />}></Route >

                {/* ----------------고정 풋터의 링크-------- */}
                {/* ----------------이지 링크투-------- */}

                <Route path='/detail/:name' element={<DetailedPage />}></Route>

                {/* ----------------이지 링크투-------- */}
                {/* ----------------진휘 링크투-------- */}

                <Route path='/checkout' element={<Checkout mockItemsData={mockItemsData} />}></Route>


                {/* ----------------진휘 링크투-------- */}
                {/* ----------------현주 링크투-------- */}


                <Route path='/resultframe' element={<ResultFrame />}></Route>
                <Route path='/orderlist' element={<Orderlist order={order} />}></Route>


                {/* ----------------현주 링크투-------- */}
                {/* ----------------찬미 링크투-------- */}




                {/* ----------------찬미 링크투-------- */}



            </Routes>

            <Footer />
        </div>
    );
}

export default App;
