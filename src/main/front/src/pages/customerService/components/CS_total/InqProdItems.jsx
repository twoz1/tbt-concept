import React from 'react';
import { useState } from 'react';
import '../../../../styles/customerService/InqProdItems.css';
import ResultCS1on1 from '../CS_total/ResultCS1on1';
import useModal from '../../../customHooks/useModal';

const InqProdItems = ({ qna_id, product_id, user_id, qna_type, qna_phone_num, qna_reply_check, qna_title, qna_content, qna_upload_file, qna_answer }) => {

    console.log("**** qna_content => " + qna_content);

    // custom modal hook을 이용한 모달창 구현
    const {openModal, closeModal, isModal} = useModal();

    return (
        <tbody className='tBodyInqProdItems'>
            <tr>
                <td>{qna_type}</td>
                <td>{user_id}</td>
                <td className='curPointer' onClick={() => openModal('titleInqProd')}>{qna_title}</td>
                {isModal('titleInqProd') && <ResultCS1on1 closeModal={closeModal}
                                            qna_id={qna_id}
                                            product_id={product_id}
                                            user_id={user_id}
                                            qna_type={qna_type}
                                            qna_phone_num={qna_phone_num}
                                            qna_reply_check={qna_reply_check}
                                            qna_title={qna_title}
                                            qna_content={qna_content}
                                            qna_upload_file={qna_upload_file}
                                            qna_answer={qna_answer}
                                            />}
            </tr>
        </tbody>
    )
}

export default InqProdItems;