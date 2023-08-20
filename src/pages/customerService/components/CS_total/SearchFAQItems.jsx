import React from 'react';
import useModal from '../../useModal';
import '../../../styles/customerService/SearchFAQItems.css'

const SearchFAQItems = ({ id, freqQuesCat, freqQuesTitle, contents }) => {

    // custom modal hook을 이용한 모달창 구현
    const { openModal, closeModal, isModal } = useModal();

    return (
        <div>
            <section id="freq_ask_id" className="freq_ask_1">
                <div>
                    <p>
                        <button onClick={() => openModal('freqQues01')}>
                            <strong>{freqQuesCat}</strong>
                            {freqQuesTitle}
                        </button>

                        {isModal('freqQues01') && <div className="modal_cover">
                            <div className="pop_CS">
                                {contents}

                                <div className="btn_close">
                                    <button onClick={() => closeModal('freqQues01')}>닫기</button>
                                </div>
                            </div>
                        </div>}
                    </p>
                </div>
            </section>
        </div>//최종div
    )
}

export default SearchFAQItems;