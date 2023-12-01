import '../../../../styles/customerService/InquiryProduct.css';
import Modal_cs1on1 from './Modal_cs1on1';
import InqProdItems from './InqProdItems';
import { useEffect, useState } from 'react';
import useModal from '../../../customHooks/useModal';
import axios from 'axios';
import Pagination from './../../../customHooks/Pagination';

//모달을 노출하는 페이지
const InquiryProduct = () => {

    // custom modal hook을 이용한 모달창 구현 ===============================
    const {openModal, closeModal, isModal} = useModal();
    
    // QnA1on1 List 출력 ===================================================
    const [qna1on1List, setQna1on1List] = useState([]);

    console.log(qna1on1List);

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

    // pagination 구현
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
    const listPerPage = 5;  // 페이지 당 게시글 개수
    const totalPages = Math.ceil(qna1on1List.length / listPerPage);    // 전체 페이지 번호

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * listPerPage;
        const endIndex = startIndex + listPerPage;
        return qna1on1List.slice(startIndex, endIndex);
    };

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
                            <th>답글</th>
                            <th></th>
                        </thead>

                        {getPaginatedData().length === 0 ? (
                            <tr className='noInqProd'>
                                <td colSpan="4">작성한 게시물이 없습니다.</td>
                            </tr>
                        ) : getPaginatedData().map((qna1on1) => {
                            return (<InqProdItems key={qna1on1.qna_id} {...qna1on1} />);
                        })
                        }
                    </table>
                    
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
                </div>
            </section>

        </div>//최종div
    )
}; //InquiryProduct

export default InquiryProduct;