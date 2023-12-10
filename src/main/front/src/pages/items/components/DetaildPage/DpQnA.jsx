import React from 'react'
import Pagination from '../../../customHooks/Pagination';
import axios from "axios";
import { useState, useEffect } from 'react';
import useModal from '../../../customHooks/useModal';
import ResultCS1on1 from '../../../customerService/components/CS_total/ResultCS1on1';

const DpQnA = ({ product_id }) => {
  const { openModal, closeModal, isModal } = useModal();
  const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
  const [dpQnAList, setDpQnAList] = useState([]);

  useEffect(() => {
    let url = "/qna1on1/pqList/" + product_id;

    axios.post(url).then(response => {
      setDpQnAList(response.data);
      //alert("QnA1on1List 출력 성공" + response.data);
    }).catch(err => {
      if (err.response.status == "502") {
        alert("[입력 오류] 다시 시도하세요.");
      } else {
        alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
      }
    });
  }, []);

  function deleteDpQnA(qna_id) {
    let url = "/qna1on1/qDelete/" + qna_id;

    if (window.confirm("삭제하시겠습니까?")) {
      axios.delete(url)
        .then(response => {
          console.log("deleteDpQnA 삭제 완료");
          alert("삭제되었습니다.");
          window.location.reload();
        })
        .catch(err => {
          if (err.response && err.response.status === 502) {
            alert("[삭제 오류]" + err.response.data);
          } else {
            alert("[시스템 오류]" + err.message);
          }
        });
    } else {
      alert("취소되었습니다.");
    }
  }

  // pagination 구현
  const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
  const listPerPage = 4;  // 페이지 당 게시글 개수
  const totalPages = Math.ceil(dpQnAList.length / listPerPage);    // 전체 페이지 번호


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * listPerPage;
    const endIndex = startIndex + listPerPage;
    return dpQnAList.slice(startIndex, endIndex);
  };

  return (
    <div>
      <table className='tableDpQnA'>
        <thead>
          <th>문의 유형</th>
          <th>작성자</th>
          <th>제목</th>
          <th>답글</th>
          <th></th>
        </thead>

        <tbody>
          {getPaginatedData().length === 0 ? (
            <tr className='customer_q_a'>
              <td colSpan="5">작성한 게시물이 없습니다.</td>
            </tr>
          ) : getPaginatedData().map((qna) => (
            <tr key={qna.qna_id} className="customer_q_a">
              <td id="q_a_inquiy">{qna.qna_type}</td>

              <td>{qna.user_id.replace(/^(.{3}).*/, (_, chars) => chars + "*".repeat(qna.user_id.length - 3))}</td>

              {qna.user_id == loginUser.user_id ? <td className='titCurPoint' onClick={() => openModal('titleInqProd')}>{qna.qna_title}</td>
                : <td>{qna.qna_title}</td>}
              {isModal('titleInqProd') && <ResultCS1on1 closeModal={closeModal}
                qna_id={qna.qna_id}
                product_id={qna.product_id}
                user_id={qna.user_id}
                qna_type={qna.qna_type}
                qna_phone_num={qna.qna_phone_num}
                qna_reply_check={qna.qna_reply_check}
                qna_title={qna.qna_title}
                qna_content={qna.qna_content}
                qna_upload_file={qna.qna_upload_file}
                qna_answer={qna.qna_answer}
              />}

              {qna.qna_answer !== null && qna.qna_answer !== undefined && qna.qna_answer.length !== 0 ? <td className='dpQnAReply'>답변완료</td> : <td>답변대기</td>}

              <td>{qna.user_id == loginUser.user_id ? <button onClick={() => { deleteDpQnA(qna.qna_id) }}>삭제</button> : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {getPaginatedData().length !== 0 ?
      <div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
      </div> 
      : <div></div>
      }

    </div>
  )
}

export default DpQnA;