import React from 'react';
import '../../../../styles/customerService/NewsCS.css';
import useModal from '../../../customHooks/useModal';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsCS = () => {

    // custom modal hook을 이용한 모달창 구현
    const { openModal, closeModal, isModal } = useModal();

    // News DB 요청
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        let url = "/news/nList";

        axios.get(url).then(response => {
            setNewsList(response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[News 입력 오류] 다시 시도하세요.");
            } else {
                alert("[News 시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);

    return (
        <div className='newsZ_index'>
            <section id="news_id" className="news">
                <h3><strong>NEWS</strong></h3>
                <hr />

                {newsList.map((n) => (
                <div key={n.news_id} className="news_list">
                    <p>
                        <button onClick={() => openModal(`nModal${n.news_id}`)}>
                            <strong>&#91;안내&#93;</strong>
                            {n.news_title}
                        </button>
                        {isModal(`nModal${n.news_id}`) && <div className="modal_cover">
                            <div className="pop_CS">
                                <div>
                                    <span><strong>&#91;안내&#93;</strong></span>
                                    <span>{n.news_title}</span>
                                    <div className="d-flex">
                                        <p className='newsConWS'>{n.news_content.replaceAll('\\n','<br>')}</p>
                                    </div>
                                </div>

                                <div className="newsCloseBTN">
                                    <button onClick={() => closeModal(`nModal${n.news_id}`)}>닫기</button>
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

export default NewsCS;