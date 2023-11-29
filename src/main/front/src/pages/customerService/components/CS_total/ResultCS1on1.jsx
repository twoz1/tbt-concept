import React from 'react'
import '../../../../styles/customerService/ResultCS1on1.css';
import axios from 'axios';

const ResultCS1on1 = ({ closeModal, qna_id, product_id, user_id, qna_type, qna_phone_num, qna_reply_check, qna_title, qna_content, qna_upload_file, qna_answer }) => {

    // QnA1on1 UpdateForm 출력 ===================================================
    function updateFQnA1on1() {
        let helements = document.querySelectorAll(".hiddenForUpdate");
        helements.forEach(function(element) {
            element.style.display = "none";
        });
        
        let belements = document.querySelectorAll(".blockForUpdate");
        belements.forEach(function(element) {
            element.style.display = "block";
        });


    }
    
    // QnA1on1 Update ===================================================
    function updateQnA1on1() {
		let formData = new FormData(document.querySelector("subtitle_1on1_1"));

		let url = "/qna1on1/qUpdate";

		axios.post(url, formData, {
			headers:{"Content-Type": "multipart/form-data"}
		}).then(response => {
			alert("입력 성공" + response.data);
		}).catch(err => {
			if (err.response.status == "502") {
				alert("[입력 오류] 다시 시도하세요.");
			} else {
				alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
			}
		});
    }

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
                    <form className="subtitle_1on1_1" action="/qna1on1/qUpdate" method="Post" enctype="multipart/form-data">
                        <figure>
                            <figcaption><strong>1&#58;1 문의</strong></figcaption>
                            <table>
                                <tbody>
                                    <tr>                                       
                                        <td className='disNone'>
                                            <input type="hidden" name="qna_id" id="qna_id" value={qna_id} />
                                            <input type="hidden" name="qna_phone_num" id="qna_phone_num" value={qna_phone_num} />
                                            <input type="hidden" name="qna_reply_check" id="qna_reply_check" value={qna_reply_check} />
                                        </td>
                                    </tr>

                                    <tr className="tr_custInfo_1">
                                        <th>
                                            회원정보
                                        </th>
                                        <td>
                                            <span>{user_id}</span>
                                            <input type="hidden" name="user_id" id="user_id" value={user_id}/>
                                        </td>
                                    </tr>

                                    <tr className="tr_inquiry_1">
                                        <th>
                                            문의유형
                                        </th>
                                        <td>
                                            <div>{qna_type}</div>
                                            <input type="hidden" name="qna_type" id="qna_type" value={qna_type}/>
                                        </td>
                                    </tr>

                                    <tr className="tr_inquiry_1">
                                        <th>
                                            상품ID
                                        </th>
                                        <td>
                                            <div>{product_id}</div>
                                            <input type="hidden" name="product_id" id="product_id" value={product_id}/>
                                        </td>
                                    </tr>

                                    <tr className="tr_inqTitle_1">
                                        <th>
                                            제목
                                        </th>
                                        <td>
                                            <div className='hiddenForUpdate'>{qna_title}</div>
                                            <input className='blockForUpdate' name="qna_title" type="text" maxLength="40" value={qna_title} />
                                        </td>
                                    </tr>

                                    <tr className="tr_inqContent_1">
                                        <th>
                                            문의내용
                                        </th>
                                        <td>
                                            <div className='hiddenForUpdate'>{qna_content}</div>
                                            <textarea className='blockForUpdate content_qna_update' name="qna_content" cols="120" rows="30" minLength={20} maxLength="500" placeholder="20자 이상 작성하세요. (최대 500자)">{qna_content}</textarea>
                                        </td>
                                    </tr>

                                    <tr className="tr_inqContent_1">
                                        <th>
                                            첨부사진
                                        </th>
                                        <td className='td_qna_uploadf'>
                                            {/* <img className='img_qna_uploadf' src={require(`../../../../images/cs/${qna_upload_file}`)}  alt="첨부사진" /> */}
                                            <img
                                                className='img_qna_uploadf'
                                                src={qna_upload_file ? require(`../../../../images/cs/${qna_upload_file}`) : '기본 이미지 경로 또는 다른 처리'}
                                                alt="첨부사진"
                                            />
                                            <input type="hidden" name="qna_upload_file" value={qna_upload_file}/>
					                        <input className='blockForUpdate' type="file" name="qna_upload_filef" id="qna_upload_filef"/>
                                        </td>
                                    </tr>

                                    <tr className="tr_inqContent_1">
                                        <th>
                                            답변
                                        </th>
                                        <td>
                                            <div>{qna_answer}</div>
                                            <textarea name="qna_answer" className="disNone">{qna_answer}</textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>

                        <div className="btn_submit hiddenForUpdate">
                            <button onClick={() => closeModal('titleInqProd')}>취소</button>
                            <button onClick={(e) => { e.preventDefault(); updateFQnA1on1(); }}>수정하기</button>
                        </div>

                        <div className="btn_UpdateSubmit blockForUpdate">
                            <button onClick={() => closeModal('titleInqProd')}>취소</button>
                            <button onClick={() => updateQnA1on1()}>수정완료</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>//최종div
    )
}

export default ResultCS1on1