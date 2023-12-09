import { DpReviewModal } from './DpReviewModal';
import useModal from '../../../customHooks/useModal';
import { useState } from 'react';

const DpReviewScore = ({ starLength, reviewScoreText, user_id,review_star, review_content, review_upload_file , product_id}) => {
   
    const { openModal, closeModal, isModal } = useModal();
    let reviewScoreTextView;

    switch (starLength) {
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

    return (
        <div className="customer_review" id="question_answer">
            <div className="star_id_date">
                <span>
                    {Array.from({ length: review_star }, (i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                    ))} {reviewScoreTextView}
                </span>
                <span>{user_id.replace(/^(.{3}).*/, (_, chars) => chars + "*".repeat(user_id.length - 3))}</span>
                {/* {reviewDate} 언젠가 내가 하겠지.. */}
            </div>
            <p>{review_content}
            
            </p>
            <div className="image-container" style={{ height: isImageExpanded ? '500px' : '100px' }} onClick={handleImageClick}>
                <img
                    style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
                    src={require(`../../../../images/review/${review_upload_file}`)}
                    alt="review_upload_file"
                />
            </div>
            <div className="reviewList_button">

                <span onClick={()=>{openModal("DpReviewModal")}}>수정</span>
                {isModal("DpReviewModal") && <DpReviewModal closeModal={closeModal} product_id={product_id} />}
                
                <span>삭제</span>
            </div>
        </div>
    );
}

export default DpReviewScore;