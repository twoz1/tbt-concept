import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBagShopping, faRightToBracket, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import navigateTo from '../pages/config/navigateTo';
import axios from 'axios';

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false); // 로그인 상태를 저장하는 변수

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    useEffect(() => {
        if (loginUser == null) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    }, [loginUser]);


    const logout = () => {

        setLoggedIn(false);
        sessionStorage.setItem("loginUser", null);
        navigateTo("/");

    }

    const handleRestrictedAccess = (e, path) => {
        if (!loggedIn) {
            e.preventDefault();
            alert("로그인이 필요한 페이지입니다.");
            navigateTo("/login");
        }
    }

    // 검색창 구현
    const searchProdsBar = (e) => {
        e.preventDefault();

        const mSearBarKeyword = document.getElementById('mSearBarKeyword').value;
        let url = "/product/searchProds/" + encodeURIComponent(mSearBarKeyword);
        console.log(mSearBarKeyword);
        axios.get(url
        ).then((response) => {
            localStorage.setItem('searchProdsList', JSON.stringify(response.data));
            console.log(response.data);
            navigateTo("/searchBItems");
        }).catch((err) => {
            if (err.response.status == '502') {
                alert("검색 결과 없음");
            } else {
                alert(`searchProdsBar 서버연결 실패 => ${err.message}`);
            }
            localStorage.setItem('searchProdsList', JSON.stringify([]));
            alert("*****" + JSON.parse(localStorage.getItem('searchProdsList')).length);
            navigateTo("/searchBItems");
        })
    }

    return (
        <div className="header">
            <div className="center h_c">
                <h1 className="logo">
                    <Link to="/">TBTconcept</Link>
                </h1>

                {/* 검색창 구현 */}
                <form className="head_search" action="/product/searchProds" method="post" onSubmit={e => { searchProdsBar(e) }}>
                    <input
                        type="text"
                        name="mSearBarKeyword"
                        id="mSearBarKeyword"
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>

                <ul className="h_icon">
                    <li>
                        <Link to="/cart" onClick={(e) => handleRestrictedAccess(e, "/cart")}>
                            <FontAwesomeIcon icon={faBagShopping} className="fa-solid" />
                            {/* <i class="fa-solid fa-bag-shopping"></i> */}
                            <span>CART</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my" onClick={(e) => handleRestrictedAccess(e, "/my")}>
                            <FontAwesomeIcon icon={faUser} className="fa-solid" />
                            {/* <i class="fa-solid fa-user"></i> */}
                            <span>MY</span>
                        </Link>
                    </li>
                    {/* 아래의 조건부 렌더링으로 로그인/로그아웃 버튼을 변경합니다 */}
                    {loggedIn ? (
                        <li>
                            <button onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="fa-solid" />
                                <span>LOGOUT</span>
                            </button>
                        </li>
                    ) : (
                        <li>
                            <Link to="/login">
                                <FontAwesomeIcon icon={faRightToBracket} className="fa-solid" />
                                {/* <i class="fa-solid fa-arrow-right-to-bracket"></i> */}
                                <span>LOGIN</span>
                            </Link>
                        </li>
                    )}
                    {!loggedIn && (
                        <li>
                            <Link to="/join">
                                <FontAwesomeIcon icon={faUserPlus} className="fa-solid" />
                                {/* <i class="fa-solid fa-user-plus"></i> */}
                                <span>JOIN</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <ul className="gnb">
                <li>
                    <Link to="/new">NEW</Link>
                </li>
                <li>
                    <Link to="/collection">COLLECTION</Link>
                </li>
                <li>
                    <Link to="/glasses">GLASSES</Link>
                </li>
                <li>
                    <Link to="/sunglasses">SUNGLASSES</Link>
                </li>
                <li>
                    <Link to="/store">STORE</Link>
                </li>
            </ul>
        </div>
    );
};
export default Header;
