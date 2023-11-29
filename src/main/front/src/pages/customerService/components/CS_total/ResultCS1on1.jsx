import React from 'react'
import '../../../../styles/customerService/ResultCS1on1.css';

const ResultCS1on1 = ({ closeModal, qna_id, product_id, user_id, qna_type, qna_phone_num, qna_reply_check, qna_title, qna_content, qna_upload_file, qna_answer }) => {

    return (
        <div>
            {/* =====================팝업창 코드 - 1:1 문의========================= */}
            <div className="modal_cover_1">
                <div className="modal_cs1on1_1">
                    <div className="title_route">
                        <h2><strong>CUSTOMER SERVICE</strong></h2>
                        <ul>
                            <li>HOME</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>CUSTOMER SERVICE</li>
                            <li>&nbsp;&gt;&nbsp;</li>
                            <li>1 &#58; 1 문의</li>
                        </ul>
                    </div>

                    {/* ==========1:1 문의 입력 정보창=========== */}
                    <form className="subtitle_1on1_1" action="#">
                        <figure>
                            <figcaption><strong>1&#58;1 문의</strong></figcaption>
                            <table>
                                <tbody>
                                    <tr className="tr_custInfo_1">
                                        <th>
                                            회원정보
                                        </th>
                                        <td>
                                            <span>{user_id}</span>
                                        </td>
                                    </tr>

                                    <tr className="tr_inquiry_1">
                                        <th>
                                            문의유형
                                        </th>
                                        <td>
                                            <div>{qna_type}</div>
                                        </td>
                                    </tr>

                                    <tr className="tr_inqTitle_1">
                                        <th>
                                            제목
                                        </th>
                                        <td>
                                            <div>{qna_title}</div>
                                        </td>
                                    </tr>

                                    <tr className="tr_inqContent_1">
                                        <th>
                                            문의 내용
                                        </th>
                                        <td>
                                            <div>{qna_content}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>

                        <div className="resCloseBTN">
                            <button onClick={() => closeModal('titleInqProd')}>취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>//최종div
    )
}

export default ResultCS1on1