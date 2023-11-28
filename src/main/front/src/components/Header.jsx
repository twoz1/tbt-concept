import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBagShopping, faRightToBracket, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false); // 로그인 상태를 저장하는 변수

    // 로그인 혹은 로그아웃 버튼 클릭 시 상태 변환 함수
    const handleLoginToggle = () => {
        setLoggedIn(prevState => !prevState);
    };
    return (
        <div className="header">
            <div className="center h_c">
                <h1 className="logo">
                    <Link to="/">TBTconcept</Link>
                </h1>
                <form className="head_search" action="#" method="get">
                    <input name="query" type="text" value="" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <ul className="h_icon">
                    <li>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faBagShopping} className="fa-solid" />
                            {/* <i class="fa-solid fa-bag-shopping"></i> */}
                            <span>CART</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my">
                            <FontAwesomeIcon icon={faUser} className="fa-solid" />
                            {/* <i class="fa-solid fa-user"></i> */}
                            <span>MY</span>
                        </Link>
                    </li>
                     {/* 아래의 조건부 렌더링으로 로그인/로그아웃 버튼을 변경합니다 */}
                    {loggedIn ? (
                        <li>
                            <button onClick={handleLoginToggle}>
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