const DpReviewScore = ({ reviewDate, starLength, reviewText, userId, reviewScoreText }) => {
   
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

    return (
        <div className="customer_review" id="question_answer">
            <div className="star_id_date">
                <span>
                    {Array.from({ length: starLength }, (i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                    ))} {reviewScoreTextView}
                </span>
                <span>{userId.replace(/^(.{3}).*/, (_, chars) => chars + "*".repeat(userId.length - 3))} {reviewDate}</span>
            </div>
            <p>{reviewText}</p>
            
        </div>
    );
}

export default DpReviewScore;