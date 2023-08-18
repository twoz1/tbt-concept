import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBagShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Header.css';
import {Link} from 'react-router-dom';
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
                <ul className="h_icon">
                    <li>
                        <Link to="/cart">
                        <FontAwesomeIcon icon={faBagShopping} className='fa-solid'/>
                            {/* <i class="fa-solid fa-bag-shopping"></i> */}
                            <span>CART</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my">
                            <FontAwesomeIcon icon={faUser} className='fa-solid'/>
                            {/* <i class="fa-solid fa-user"></i> */}
                            <span>MY</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                        <FontAwesomeIcon icon={faRightToBracket} className='fa-solid'/>
                            {/* <i class="fa-solid fa-arrow-right-to-bracket"></i> */}
                            <span>LOGIN</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/join">
                        <FontAwesomeIcon icon={faUserPlus} className='fa-solid'/>
                            {/* <i class="fa-solid fa-user-plus"></i> */}
                            <span>JOIN</span>
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
                    <Link to ="/sunglasses">SUNGLASSES</Link>
                </li>
                <li>
                    <Link to="/store">STORE</Link>
                </li>
            </ul>
        </div>
    );
};
export default Header;
