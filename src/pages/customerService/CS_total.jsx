import { useState } from 'react';
import '../../styles/customerService/CS_total.css';
import FAQsearch from './components_csTotal/FAQsearch';
import InquiryProduct from './components_csTotal/InquiryProduct';
import QuickMenu from './components_csTotal/QuickMenu';
import NewmembersService from './components_csTotal/NewmembersService';
import FreqQuestion from './components_csTotal/FreqQuestion';
import NewsCS from './components_csTotal/NewsCS';

const mockInqProd = [
    /*     {
            id: 0,
            userEmail: "aaa@naver.com",
            typeInquiry: "반품문의",
            alertReply1: "010-1234-4567",
            alertReply2: true,
            titleInqProd: "반품하고 싶은데 반품 신청 어디서 하나요?",
            contentsInqProd: "반품하고 싶은데 아무리 찾아도 반품을 어디서 하는지 모르겠네요.. 혹시 반품 신청 어디서 하나요??",
            uploadFile: "../../../images/g_antonCrystal_02.jpg"
        },
        {
            id: 1,
            userEmail: "aaa@naver.com",
            typeInquiry: "반품문의",
            alertReply1: "010-1234-4567",
            alertReply2: true,
            titleInqProd: "반품하고 싶은데 반품 신청 어디서 하나요?",
            contentsInqProd: "반품하고 싶은데 아무리 찾아도 반품을 어디서 하는지 모르겠네요.. 혹시 반품 신청 어디서 하나요??",
            uploadFile: "../../../images/g_antonCrystal_02.jpg"
        },
        {
            id: 2,
            userEmail: "aaa@naver.com",
            typeInquiry: "반품문의",
            alertReply1: "010-1234-4567",
            alertReply2: true,
            titleInqProd: "반품하고 싶은데 반품 신청 어디서 하나요?",
            contentsInqProd: "반품하고 싶은데 아무리 찾아도 반품을 어디서 하는지 모르겠네요.. 혹시 반품 신청 어디서 하나요??",
            uploadFile: "../../../images/g_antonCrystal_02.jpg"
        } */
];


const CS_total = () => {

    const [askInqProd, setAskInqProd] = useState(mockInqProd);
    // const []

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
                    <FAQsearch />

                    {/* =====================검색 퀵메뉴======================= */}
                    <QuickMenu />

                    {/* =====================CS 목록 - 상품문의======================= */}
                    <div>
                        <InquiryProduct askInqProd={askInqProd} />

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
