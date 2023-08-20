import '../../../styles/payments/Modal_basket.css';

const Modal_basket = () => {
    return (
        <div>
            <div id="pop_basket">
                <div className="layer_cont">
                    <p>
                        선택하신 상품이
                        <br/>
                            쇼핑백에 추가되었습니다.
                    </p>

                    {/* ==========쇼핑 계속하기/쇼핑백 확인========== */}
                    <div className="btn_wrap">
                        <div className="btn_gray_small"><a href="#">쇼핑 계속하기</a></div>
                        <div className="btn_black_small"><a href="#">쇼핑백 확인</a></div>
                    </div>

                    {/* ==========(X)버튼========== */}
                    <button className="btn_close" onclick="location.href='#'">
                        <i className="fa-regular fa-x"></i>
                    </button>
                </div>
            </div>
        </div>//최종div
    );
};

export default Modal_basket;
