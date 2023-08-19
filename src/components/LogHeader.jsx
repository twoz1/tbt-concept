import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBagShopping, faRightToBracket, faUserPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
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
                <span className='userName'>최고조님 안녕하세요</span>
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
                    <li>
                        <Link to="">
                            <FontAwesomeIcon icon={faRightFromBracket} className="fa-solid" />
                            {/* <i class="fa-solid fa-arrow-right-to-bracket"></i> */}
                            <span>LOGOUT</span>
                        </Link>
                    </li>
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
