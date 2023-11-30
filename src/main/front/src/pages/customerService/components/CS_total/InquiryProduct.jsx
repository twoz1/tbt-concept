import '../../../../styles/customerService/InquiryProduct.css';
import Modal_cs1on1 from './Modal_cs1on1';
import InqProdItems from './InqProdItems';
import { useEffect, useRef, useState } from 'react';
import useModal from '../../../customHooks/useModal';
import axios from 'axios';
import App from './../../../../App';


//모달을 노출하는 페이지
const InquiryProduct = () => {

    // custom modal hook을 이용한 모달창 구현 ===============================
    const {openModal, closeModal, isModal} = useModal();
    
    // QnA1on1 List 출력 ===================================================
    const [qna1on1List, setQna1on1List] = useState([]);

    useEffect(() => {
        let url = "/qna1on1/qList";

        axios.post(url).then(response => {
                setQna1on1List(response.data);
                //alert("QnA1on1List 출력 성공" + response.data);
            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[입력 오류] 다시 시도하세요.");
                } else {
                    alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });
    }, []);

    return (
        <div>
            <section id="cs1on1_ask_id" className="cs1on1_ask">
                <h3><strong>상품 문의</strong></h3>
                <div className="btn_cs1on1">
                    <div className='openCS1on1' onClick={() => openModal('inqProdCS1on1')}><strong>1&#58;1 문의하기</strong></div>
                    {isModal('inqProdCS1on1') && <Modal_cs1on1 closeModal={closeModal} />}
                </div>
                <hr />

                <div>
                    <table className='tableInqProd'>
                        <thead className='tHeadInqProd'>
                            <th>문의 유형</th>
                            <th>작성자</th>
                            <th>제목</th>
                            <th></th>
                        </thead>

                        {qna1on1List.length == 0 ? <tr className='noInqProd'><td colspan="2">작성한 게시물이 없습니다.</td></tr> : qna1on1List.map((qna1on1) => { return (<InqProdItems key={qna1on1.qna_id}{...qna1on1} />); })}
                    </table>
                </div>
            </section>
        </div>//최종div
    )
}; //InquiryProduct

export default InquiryProduct;