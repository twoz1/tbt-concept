import '../../styles/customerService/ResultFrame.css';
import useScrollToTop from '../customHooks/useScrollToTop';

const ResultFrame = () => {
    useScrollToTop();
    return (
        <div className="ResultFrame">
            <div className="center m_c">
                <div className="img_box">
                    <a href="#">
                        <img src={require("../../images/result_banner1.jpg")} alt="collection_img" />
                    </a>
                </div>
                <div className="result_cover">
                    <span>감사합니다 &#58; &#41;</span>
                    <p>결제가 정상적으로 완료됐습니다.</p>
                    <div className="button_cover">
                        <div className="button"><a href="/">메인페이지로 이동 &gt;</a></div>
                        <div className="button"><a href="#">마이페이지로 이동 &gt;</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultFrame;