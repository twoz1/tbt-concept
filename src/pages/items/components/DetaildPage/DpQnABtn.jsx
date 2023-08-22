import React, { useState } from 'react'
import useModal from '../../../customHooks/useModal';
import Modal_cs1on1 from '../../../customerService/components/CS_total/Modal_cs1on1';
import DpQnA from './DpQnA';


const DpQnABtn = () => {
  const { openModal, closeModal, isModal } = useModal();

  return (
    

      <div className="q_a_button">
        <button className='QnA_Button' onClick={() => { openModal('inqProdCS1on1') }}>상품문의</button>
        {isModal('inqProdCS1on1') && <Modal_cs1on1 closeModal={closeModal} />}
      </div>

      
  );
}

export default DpQnABtn;