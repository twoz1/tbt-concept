// import '../../../styles/customerService/InquiryProduct.css';
import '../../../../styles/customerService/InquiryProduct.css';
import Modal_cs1on1 from './Modal_cs1on1';
import InqProdItems from './InqProdItems';
import { useRef, useState } from 'react';
import useModal from '../../../customHooks/useModal';


//모달을 노출하는 페이지
const InquiryProduct = ({ askInqProd }) => {

    //객체의 길이를 알기 위한 useRef
    const mockInqProdCount = useRef(askInqProd);

    // custom modal hook을 이용한 모달창 구현
    const {openModal, closeModal, isModal} = useModal();


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
                        </thead>

                        {mockInqProdCount.current.length == 0 ? <tr className='noInqProd'><td colspan="2">작성한 게시물이 없습니다.</td></tr> : askInqProd.map((InqProd) => { return (<InqProdItems key={InqProd.id}{...InqProd} />); })}
                    </table>
                </div>
            </section>
        </div>//최종div
    )
}; //InquiryProduct

export default InquiryProduct;