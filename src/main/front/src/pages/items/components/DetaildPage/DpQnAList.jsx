import React from 'react';
import Pagination from '../../../customHooks/Pagination';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useModal from '../../../customHooks/useModal';
import ResultCS1on1 from '../../../customerService/components/CS_total/ResultCS1on1';

const DpQnAList = ({ qna_id, product_id, user_id, qna_type, qna_phone_num, qna_reply_check, qna_title, qna_content, qna_upload_file, qna_answer }) => {
  console.log(qna_id, qna_title, product_id);

  const { openModal, closeModal, isModal } = useModal();
  const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));

  const deleteDpQnA = (qna_id) => {
    let url = `/qna1on1/qDelete/${qna_id}`;

    if (window.confirm('삭제하시겠습니까?')) {
      axios.delete(url)
        .then(response => {
          console.log('deleteDpQnA 삭제 완료');
          alert('삭제되었습니다.');
          window.location.reload();
        })
        .catch(err => {
          if (err.response && err.response.status === 502) {
            alert('[삭제 오류]' + err.response.data);
          } else {
            alert('[시스템 오류]' + err.message);
          }
        });
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <React.Fragment key={qna_id}>
      <tr className="customer_q_a">
        <td id="q_a_inquiy">{qna_type}</td>
        <td>{user_id.replace(/^(.{3}).*/, (_, chars) => chars + '*'.repeat(user_id.length - 3))}</td>

        {loginUser && loginUser.user_id && user_id === loginUser.user_id ? (
          <td className="titCurPoint" onClick={() => openModal('titleInqProd')}>
            {qna_title}
          </td>
        ) : (
          <td>{qna_title}</td>
        )}

        {isModal('titleInqProd') && (

          <ResultCS1on1
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
            closeModal={closeModal}
          />
        )}

        {qna_answer !== null && qna_answer !== undefined && qna_answer.length !== 0 ? (
          <td className="dpQnAReply">답변완료</td>
        ) : (
          <td>답변대기</td>
        )}

        {loginUser && loginUser.user_id && user_id === loginUser.user_id ? (
          <button onClick={() => { deleteDpQnA(qna_id) }}>삭제</button>
        ) : (
          null
        )}
      </tr>
    </React.Fragment>

  );
};

export default DpQnAList;