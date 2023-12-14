import React from 'react';
import '../../../../styles/customerService/FreqQuestion.css';
import useModal from '../../../customHooks/useModal';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FreqQuestion = () => {

    // custom modal hook을 이용한 모달창 구현
    const { openModal, closeModal, isModal } = useModal();

    // FAQ DB 요청
    const [faqList, setFaqList] = useState([]);

    useEffect(() => {
        let url = "/faq/fList";

        axios.get(url).then(response => {
            setFaqList(response.data);
            console.log("FAQ 출력 성공" + response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[FAQ 입력 오류] 다시 시도하세요.");
            } else {
                alert("[FAQ 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);

    return (
        <div>
            <section id="freq_ask_id" className="freq_ask">
                <h3><strong>자주 찾는 질문</strong></h3>
                <hr />

                {faqList.length === 0 ? <div className='noFaqList'>작성한 게시물이 없습니다.</div>
                    : faqList.map((f) => (
                        <div key={f.faq_id}>
                            <p>
                                <button onClick={() => openModal(`fModal${f.faq_id}`)}>
                                    <strong>[{f.faq_type}]</strong>
                                    &nbsp;{f.faq_title}&#63;
                                </button>
                                {isModal(`fModal${f.faq_id}`) && <div className="modal_cover">
                                    <div className="pop_CS">
                                        <div>
                                            <span><strong>[{f.faq_type}]</strong></span>
                                            <span>{f.faq_title}</span>
                                            <div className="d-flex">
                                                <p className='faqContWS'>{f.faq_content}</p>
                                            </div>
                                        </div>

                                        <div className="btn_close">
                                            <button onClick={() => closeModal(`fModal${f.faq_id}`)}>닫기</button>
                                        </div>
                                    </div>
                                </div>}
                            </p>
                        </div>
                    ))}
            </section>
        </div>//최종div
    )
}

export default FreqQuestion;