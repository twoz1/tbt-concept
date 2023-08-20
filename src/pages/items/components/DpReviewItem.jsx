import { useState } from 'react';

const DpReviewItem = ({ id, starLength, reviewText, reviewImg }) => {

    const { reviewState, setreviewState } = useState();

    return (
        <div className="customer_review" id="question_answer">
            <div className="star_id_date">
                <span>
                    {Array.from({ length: starLength }, (i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                    ))} 아주 좋아요
                </span>
                <span>tb&#176;&#176;&#176;&#176;&#176;&#176;&#176; 2023.06.20</span>
            </div>

            <p>{reviewText}</p>

            {/* <div className="customer_review_button">
                <div>
                    <a href="">신고</a> &#124;
                    <a href="">숨김</a>
                </div>
                <a href="">like <i className="fa-regular fa-thumbs-up"></i></a>
            </div> */}
        </div>
    );
}

export default DpReviewItem;