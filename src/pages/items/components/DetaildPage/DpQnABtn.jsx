import React, { useState } from 'react'
import useModal from '../../../customHooks/useModal';
import Modal_cs1on1 from '../../../customerService/components/CS_total/Modal_cs1on1';


// const QnaList = [
//   {
//     id: 0,
//     userId: "tbtconcept",
//     reviewDate: "2023.08.11",
//   },
//   {
//     id: 1,
//     userId: "passion",
//     reviewDate: "2023.08.11",
//   },
//   {
//     id: 2,
//     userId: "KCMKM",
//     reviewDate: "2023.08.11",
//   },
// ]



const DpQnABtn = () => {
  const { openModal, closeModal, isModal } = useModal();
  // const [page, setPage] = useState(1);
  // const listPerPage = 2;
  // const startIndex = ((page) - 1) * listPerPage;

  return (
    <div>

      <div className="q_a_button">
        <button className='QnA_Button' onClick={() => { openModal('inqProdCS1on1') }}>상품문의</button>
        {isModal('inqProdCS1on1') && <Modal_cs1on1 closeModal={closeModal} />}
      </div>
{/* =========================================================================================================================================== */}
      <div className="customer_q_a">

        <span id="q_a_answer_complecation">
          <em>답변완료</em></span>
        <span id="q_a_inquiy">출고문의</span>
        <span id="q_a_user_id">nic&#176;&#176;&#176;&#176;&#176;&#176;</span>
        <span id="q_a_date">2023.05.25</span>

      </div>
      </div>
      );
}

      export default DpQnABtn;