import '../../styles/customerService/CS_total.css';
import FAQsearch from './components/CS_total/FAQsearch';
import InquiryProduct from './components/CS_total/InquiryProduct';
import QuickMenu from './components/CS_total/QuickMenu';
import NewmembersService from './components/CS_total/NewmembersService';
import FreqQuestion from './components/CS_total/FreqQuestion';
import NewsCS from './components/CS_total/NewsCS';
import useScrollToTop from '../customHooks/useScrollToTop';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CS_total = () => {
    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

    const [loginState, setLoginState] = useState(false);

    useEffect(() => {
        if (loginUser != null) {
            setLoginState(true);
        } else {
            setLoginState(false);
        }
    }, [loginState])

    useScrollToTop();


    // FAQ DB 요청
    const [faqBarList, setFaqBarList] = useState([]);

    useEffect(() => {
        let url = "/faq/fList";

        axios.get(url).then(response => {
            setFaqBarList(response.data);
            console.log("FAQBar 출력 성공" + response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[FAQBar 입력 오류] 다시 시도하세요.");
            } else {
                alert("[FAQBar 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);

    return (
        <div>
            <div className="center m_c">
                <div className="csTotal">
                    <div className="title_route">
                        <h2><strong>CUSTOMER SERVICE</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>CUSTOMER SERVICE</li>
                        </ul>
                    </div>

                    {/* =====================검색 상단바======================= */}
                    <FAQsearch faqBarList={faqBarList} />

                    {/* =====================검색 퀵메뉴======================= */}
                    <QuickMenu />

                    {/* =====================CS 목록 - 상품문의======================= */}
                    <div>
                        {loginState && <InquiryProduct />}

                        {/* =====================CS 목록 - 자주 찾는 질문======================= */}
                        <FreqQuestion />

                        {/* =====================CS 목록 - 신규 서비스======================= */}
                        <NewmembersService />

                        {/* ====================CS 목록 - NEWS======================= */}
                        <NewsCS />
                    </div>
                </div>
            </div>
        </div>//최종div
    );
};

export default CS_total;
