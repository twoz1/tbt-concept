import '../styles/components/Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className="center h_c">
                <h1 className="logo">
                    <a href="./index.html">TBTconcept</a>
                </h1>
                <form className="head_search" action="#" method="get">
                    <input name="query" type="text" value="" />
                    <button type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <ul className="h_icon">
                    <li>
                        <a href="./basket/basket.html">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span>CART</span>
                        </a>
                    </li>
                    <li>
                        <a href="./mypage/mypage.html">
                            <i class="fa-solid fa-user"></i>
                            <span>MY</span>
                        </a>
                    </li>
                    <li>
                        <a href="./login/log_in.html">
                            <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            <span>LOGIN</span>
                        </a>
                    </li>
                    <li>
                        <a href="./join/join.html">
                            <i class="fa-solid fa-user-plus"></i>
                            <span>JOIN</span>
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="gnb">
                <li>
                    <a href="./new_goods/new_goods.html">NEW</a>
                </li>
                <li>
                    <a href="./collection/collection.html">COLLECTION</a>
                </li>
                <li>
                    <a href="./glasses/glasses.html">GLASSES</a>
                </li>
                <li>
                    <a href="./sunglass/sunglasses.html">SUNGLASSES</a>
                </li>
                <li>
                    <a href="./store/store.html">STORE</a>
                </li>
            </ul>
        </div>
    );
};
export default Header;
