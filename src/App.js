import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Checkout from './pages/payments/Checkout';
import Collection from './pages/items/Collection';
import Footer from './components/Footer';
import Login from './pages/members/Login';
function App() {
    return (
        <div className="App">
            <Header />
            {/* <Main /> */}
            {/* <Login /> */}
            {/* <Collection /> */}
            <Checkout />
            <Footer />
        </div>
    );
}

export default App;
