import React from 'react';
import Pagination from '../../../customHooks/Pagination';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useModal from '../../../customHooks/useModal';
import ResultCS1on1 from '../../../customerService/components/CS_total/ResultCS1on1';
import DpQnAList from './DpQnAList';

const DpQnA = ({ product_id }) => {
  const { openModal, closeModal, isModal } = useModal();
  const loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
  const [dpQnAList, setDpQnAList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const listPerPage = 4;
  const totalPages = Math.ceil(dpQnAList.length / listPerPage);

  useEffect(() => {
    let url = `/qna1on1/pqList/${product_id}`;

    axios.post(url)
      .then(response => {
        setDpQnAList(response.data);
      })
      .catch(err => {
        if (err.response && err.response.status === 502) {
          alert('[입력 오류] 다시 시도하세요.');
        } else {
          alert('[시스템 오류] 잠시 후에 다시 시도하세요.' + err.message);
        }
      });
  }, [product_id]);

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
      <table className="tableDpQnA">
        <thead>
          <tr>
            <th>문의 유형</th>
            <th>작성자</th>
            <th>제목</th>
            <th>답글</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {getPaginatedData().length === 0 ? (
            <tr>
              <td className='review_board' colSpan="5">작성한 게시물이 없습니다.</td>
            </tr>
          ) : getPaginatedData().map((qna) => {
            return (<DpQnAList key={qna.qna_id}{...qna} />);
          })}
        </tbody>
      </table>

      {getPaginatedData().length !== 0 ? (
        <div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
        </div>
      ) : <div></div>}
    </div>
  );
};

export default DpQnA;