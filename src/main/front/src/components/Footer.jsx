import '../styles/components/Footer.css';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);

    }
    const [isScrollLocked, setIsScrollLocked] = useState(false);

    const handleScroll = () => {
        const ScrollFromBottom =
            document.documentElement.scrollHeight -
            window.innerHeight -
            window.scrollY;
        setIsScrollLocked(ScrollFromBottom <= 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

    return (
        <div className="footer">
            <div className="center f_c">
                <div className="foot_left">
                    <p> 상호명 &#58; TbT concept ㅣ 주소 &#58; 경기도 성남시 분당구 돌마로 46 &#40;광천빌딩 5층&#41;</p>
                    <p> &#40;주&#41;티비티컨셉코리아 &nbsp;&copy;ALL&nbsp;RIGHT&nbsp;RESERVED ㅣ 사업자등록번호 &#58;221&#45;90&#45;2000</p>
                    <p> 개인정보보호책임자 &#58; 최고조 ㅣ 호스팅서비스 &#58; &#40;TBT concept&#41;</p>
                    {loginUser != null && loginUser.user_id == "admin" ? <a href="http://localhost:8080/">❤️</a> : ""}
                </div>

                <div className="foot_right">
                    <div>
                        <em className="fc_tit">고객센터</em>
                        <p className="fc_number">
                            1566&#45;1234
                            <br />
                        </p>
                        <p>운영시간 &#58; 09&#58;00 &sim; 18&#58;00</p>
                        <p>cs&#95;help&#64;tbtconcept&#46;co&#46;kr</p>
                    </div>
                    <div className="f_c_right">
                        <Link to="/cs">바로가기</Link>
                    </div>
                </div>
            </div>

            <div className="quick_menu">
                <div className="side_bar">
                </div>
            </div>
            <div className={`to_top ${isScrollLocked ? 'lock' : ''}`} onClick={scrollTop}>
                <i class="fa-solid fa-chevron-up"></i>
            </div>
        </div>
    );
};
export default Footer;
