import React from 'react';
import useModal from '../../../customHooks/useModal';
import '../../../../styles/customerService/SearchFAQItems.css'

const SearchFAQItems = ({ faq_id, faq_type, faq_title, faq_content }) => {

    // custom modal hook을 이용한 모달창 구현
    const { openModal, closeModal, isModal } = useModal();

    console.log("SearchFAQItems => " + faq_id + faq_title + faq_type);

    return (
        <div>
            <section id="freq_ask_id" className="freq_ask_1">
                <div>
                    <p>
                        <button onClick={() => openModal(`fbModal${faq_id}`)}>
                            <strong>[{faq_type}]</strong>
                            <span>{faq_title}</span>
                        </button>

                        {isModal(`fbModal${faq_id}`) && <div className="modal_cover">

                            <div className="pop_CS">
                                <div>
                                    <span><strong>[{faq_type}]</strong></span>
                                    <span>{faq_title}</span>
                                    <div className="d-flex">
                                        <p className='faqContWS'>{faq_content.replaceAll('\\n','<br>')}</p>
                                    </div>
                                </div>

                                <div className="btn_close">
                                    <button onClick={() => closeModal(`fbModal${faq_id}`)}>닫기</button>
                                </div>
                            </div>

                        </div>
                        }
                    </p>
                </div>
            </section>
        </div>//최종div
    )
}

export default SearchFAQItems;