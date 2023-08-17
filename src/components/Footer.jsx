import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="center f_c">
                <div className="foot_left">
                    <p> 상호명 &#58; TbT concept ㅣ 주소 &#58; 경기도 성남시 분당구 돌마로 46 &#40;광천빌딩 5층&#41;</p>
                    <p> &#40;주&#41;티비티컨셉코리아 &nbsp;&copy;ALL&nbsp;RIGHT&nbsp;RESERVED ㅣ 사업자등록번호 &#58;221&#45;90&#45;2000</p>
                    <p> 개인정보보호책임자 &#58; 최고조 ㅣ 호스팅서비스 &#58; &#40;TBT concept&#41;</p>
                </div>

                <div className="foot_right">
                    <div>
                        <em className="fc_tit">고객센터</em>
                        <p className="fc_number">
                            031&#45;1234&#45;5678
                            <br />
                        </p>
                        <p>운영시간 &#58; 09&#58;00 &sim; 18&#58;00</p>
                        <p>cs&#95;help&#64;tbtconcept&#46;co&#46;kr</p>
                    </div>
                    <div className="f_c_right">
                        <a href="./cs_total/cs_total.html">바로가기</a>
                    </div>
                </div>
            </div>

            <div className="quick_menu">
                <div className="side_bar">
                    <div className="direct">
                        <span className="to_top">
                            <span>
                                <a href="#">
                                    <FontAwesomeIcon icon={faChevronUp} class='fa-solid'/>
                                    {/* <i class="fa-solid fa-chevron-up"></i> */}
                                </a>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
