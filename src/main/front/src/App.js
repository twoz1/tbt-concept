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
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import mockItemsContext from './pages/items/MockItems';
import axios from 'axios';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { addressReducer } from './pages/config/Configstore';
import CheckOut_Modal from './pages/payments/components/Checkout/CheckOut_Modal';
import Information from './pages/payments/components/Checkout/Information';
import Update from './pages/members/Update';
import SearchBItems from './pages/items/SearchBItems';
import Password from './pages/members/Password';
import FindPW from './pages/members/FindPW';


const configstore = configureStore({
    reducer: {
        address: addressReducer,

    },

});

function App() {

    const { sArr, gArr } = useContext(mockItemsContext);
    const mockItemsData = [...sArr, ...gArr];
    const [data, setData] = useState('');

    // => 실행과 동시에 처음 한번 서버요청
    useEffect(() => {
        axios
            .get('/test')
            .then((response) => {
                setData(response.data);

                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });
    }, []);


    return (

        <div className="App">
            <Provider store={configstore}>
                <Routes>
                    <Route path='/addressOpen' element={<CheckOut_Modal />}></Route>
                </Routes>
                <Header />
                <Routes>
                    {/* ----------------고정 헤더의 링크-------- */}
                    <Route path='/' element={<Main />}></Route >
                    <Route path='/sunglasses' element={<Sunglasses />}></Route >
                    <Route path='/glasses' element={<Glasses />}></Route >
                    <Route path='/searchBItems' element={<SearchBItems />}></Route >
                    <Route path='/collection' element={<Collection />}></Route >
                    <Route path='/new' element={<New_goods />}></Route >
                    <Route path='/store' element={<Store />}></Route >

                    <Route path='/cart' element={<Basket mockItemsData={mockItemsData} />}></Route>
                    <Route path='/my' element={<Mypage />}></Route >
                    <Route path='/login' element={<Login />}></Route >
                    <Route path='/join' element={<Join />}></Route >
                    <Route path='/findPW' element={<FindPW />}></Route >

                    {/* ----------------고정 헤더의 링크-------- */}
                    {/* ----------------고정 풋터의 링크-------- */}

                    <Route path='/cs' element={<CS_total />}></Route >

                    {/* ----------------고정 풋터의 링크-------- */}
                    {/* ----------------이지 링크투-------- */}

                    <Route exact path="/addressOpen" render={() => (
                        <CheckOut_Modal />
                    )} />
                    <Route path='/my/update' element={<Update />}></Route >
                    <Route path='/my/update/password' element={<Password />}></Route >

                    <Route path='/detail/:product_id' element={<DetailedPage />}></Route>

                    {/* ----------------이지 링크투-------- */}
                    {/* ----------------진휘 링크투-------- */}

                    <Route path='/checkout/' element={<Checkout mockItemsData={mockItemsData} />}></Route>
                    {/* <Route path='/addressOpen/:user_id'  element={<checkout/>}></Route> */}


                    {/* ----------------진휘 링크투-------- */}
                    {/* ----------------현주 링크투-------- */}


                    <Route path='/resultframe' element={<ResultFrame />}></Route>
                    <Route path='/orderlist' element={<Orderlist />}></Route>


                    {/* ----------------현주 링크투-------- */}
                    {/* ----------------찬미 링크투-------- */}



                    {/* ----------------찬미 링크투-------- */}



                </Routes>

                <Footer />

            </Provider>


        </div>
    );
}

export default App;