import '../../../../styles/items/Modal_gotobasket.css';
import { Link } from 'react-router-dom';

const Modal_gotobasket = ({ closeModal }) => {
    return (
        <div className='Modal_gotobasket_cover'>
            <div>
                <div className="Modal_gotobasket">
                    <button className="btn_closeBasket" onClick={() => closeModal('gotoCartModal')}>
                        <i className="fa-regular fa-x"></i>
                    </button>
                    <p>
                        선택하신 상품이
                        <br />
                        쇼핑백에 추가되었습니다.
                    </p>

                    {/* ==========쇼핑 계속하기/쇼핑백 확인========== */}
                    <div className="btn_wrap">
                        <button onClick={() => closeModal('gotoCartModal')} className="btn_white_small">쇼핑 계속하기</button>
                        <Link to='/cart' className="btn_black_small">쇼핑백 확인</Link>
                    </div>


                </div>
            </div>
        </div>//최종div
    );
};

export default Modal_gotobasket;
