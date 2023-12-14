import React from 'react';
import '../../../../styles/customerService/InqProdItems.css';
import ResultCS1on1 from '../CS_total/ResultCS1on1';
import useModal from '../../../customHooks/useModal';
import axios from 'axios';

const InqProdItems = ({ qna_id, product_id, user_id, qna_type, qna_phone_num, qna_reply_check, qna_title, qna_content, qna_upload_file, qna_answer }) => {

    // custom modal hook을 이용한 모달창 구현
    const { openModal, closeModal, isModal } = useModal();

    // QnA1on1 delete
    function deleteInqProd(qna_id) {
        let url = "/qna1on1/qDelete/" + qna_id;

        if (window.confirm("삭제하시겠습니까?")) {
            axios.delete(url)
                .then(response => {
                    console.log("deleteInqProd 삭제 완료");
                    alert("삭제되었습니다.");
                    navigateDeleteTo("/cs");
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

    function navigateDeleteTo(url) {
        window.location.href = url;
    }

    return (

        <tr className='tBodyInqProdItems'>
            <td>{qna_type}</td>
            <td>{user_id}</td>
            <td onClick={() => openModal('titleInqProd')}><span id="curPointer">{qna_title}</span></td>
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
            {qna_answer !== null && qna_answer !== undefined && qna_answer.length !== 0 ? <td className='qnaAnswer_td'>Y</td> : <td>N</td>}
            <td><button onClick={() => { deleteInqProd(qna_id) }}>삭제</button></td>
        </tr>

    )
}

export default InqProdItems;