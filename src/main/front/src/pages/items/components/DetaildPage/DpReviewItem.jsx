import { DpReviewModal } from './DpReviewModal';
import useModal from '../../../customHooks/useModal';
import { useState } from 'react';
import axios from "axios";

const DpReviewItem = ({ review_id, starLength, reviewScoreText, user_id, review_star, review_content, review_upload_file, product_id, review_date }) => {

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

    const { openModal, closeModal, isModal } = useModal();
    let reviewScoreTextView;

    switch (review_star) {
        case 1:
            reviewScoreTextView = reviewScoreText[4];
            break;
        case 2:
            reviewScoreTextView = reviewScoreText[3];
            break;
        case 3:
            reviewScoreTextView = reviewScoreText[2];
            break;
        case 4:
            reviewScoreTextView = reviewScoreText[1];
            break;

        default: reviewScoreTextView = reviewScoreText[0];
    }


    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };

//=================리뷰 삭제==========================================

    function deleteReview(review_id) {
        let url = "/review/rDelete/" + review_id;

        if (window.confirm("삭제하시겠습니까?")) {
            axios.delete(url)
                .then(response => {
                    console.log("deleteReview 삭제 완료");
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

    return (
        <div className="customer_review" id="question_answer">
            <div className="star_id_date">
                <span>
                    {Array.from({ length: review_star }, (i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                    ))} {reviewScoreTextView}
                </span>
                <div className='review_id_date'>
                    <span >{user_id.replace(/^(.{3}).*/, (_, chars) => chars + "*".repeat(user_id.length - 3))}</span>
                    <span>{review_date}</span>
                </div>
            </div>

            <p className='revContWS'>{review_content}</p>

            {review_upload_file ? (
                <div className="image-container" style={{ height: isImageExpanded ? '500px' : '100px' }} onClick={handleImageClick}>
                    <img
                        style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
                        src={require(`../../../../images/review/${review_upload_file}`)}
                        alt="review_upload_file"
                    />
                </div>
            ) : (
                isImageExpanded ? (

                    <img
                        style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
                        src={require(`../../../../images/review/${review_upload_file}`)}
                        alt="review_upload_file"
                    />
                ) : null
            )}

            {loginUser && loginUser.user_id && user_id === loginUser.user_id ?
                <div className="reviewList_button">
                    <span onClick={() => { openModal("DpReviewModal") }}>수정</span>
                    {isModal("DpReviewModal") && <DpReviewModal closeModal={closeModal} product_id={product_id}
                        review_id={review_id}
                        starLength={starLength}
                        reviewScoreText={reviewScoreText}
                        user_id={user_id}
                        review_star={review_star}
                        review_content={review_content}
                        review_upload_file={review_upload_file}
                        review_date={review_date}
                    />}
                    <span onClick={() => { deleteReview(review_id) }}>삭제</span>
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default DpReviewItem;