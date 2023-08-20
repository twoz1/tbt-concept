import { useStar } from '../../../members/components/Mypage/ReviewModal';
import { useState } from 'react';
import DpReviewItem from './DpReviewItem';

const reviewList = [
    {
        id: 0,
        userId: "tbtconcept",
        reviewDate: "2023.08.11",
        starLength: 5,
        reviewText: "선글라스 색감이 너무 예뻐요!! 친구들이 다 잘 어울린다고 칭찬해줘서 너무 기쁘네요 ㅠㅠ"
    },
    {
        id: 1,
        userId: "concepttbt",
        reviewDate: "2023.07.14",
        starLength: 4,
        reviewText: "전에 구매하고 너무 좋아서 재구매 했어요. 너무 만족해요~",
    },
    {
        id: 2,
        userId: "kcmchanmi",
        reviewDate: "2023.06.20",
        starLength: 5,
        reviewText: "라식 수술하면서 선글라스가 필요해서 구매했어요ㅇ.ㅇ 사람들이 다 놀러가는 줄 알아요.",
    }

]


const DpReviewScore = () => {

    const [review, setReview] = useState(reviewList);
    const reviewScoreText = ["아주 좋아요", "마음에 들어요", "보통이에요", "그냥 그래요", "별로에요"];

    const starLengths = review.map(item => item.starLength);
    const totalStar = starLengths.reduce((acc, star) => acc + star, 0);

    const starFrequency = review.reduce((frequency, item) => {
        const { starLength } = item;
        frequency[starLength] = (frequency[starLength] || 0) + 1;
        return frequency;
    }, {});

    const starPercent = Object.keys(starFrequency).map(starLength => {
        const frequency = starFrequency[starLength];
        const percentage = (frequency / review.length) * 100;
        return { starLength, percentage };
    });


    return (

        <div>
            <div className="review_score_percent" id="review">
                <div className="review_left">

                    <span>
                        <strong>상품만족도&#40;{review.length}&#41;</strong></span>
                    <p>구매하신 분들이 상품에 대한 평점입니다.</p>
                    <div id="star_icon">
                        <strong><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </strong>
                    </div>

                    <div id="star_score">
                        <strong>{(totalStar / review.length).toFixed(1)}</strong>
                        <span>/</span>
                        <em>5.0</em>
                    </div>
                </div>
                <div className="review_right">
                    <div>{reviewScoreText.map((it) => <strong>{it}</strong>)}</div>
                    <div>{starPercent.map(({ percentage }) => (
                        <div>
                            <div className="bar">
                                <div style={{ width: `${percentage}%` }}></div>
                            </div>
                            <em>{percentage.toFixed(1)}%</em>
                        </div>
                    ))}
                    </div>
                </div>

                {/* <div className="review_right">
                    <div>
                        <strong>아주 좋아요</strong>
                        <div className="bar">
                            <div></div>
                        </div>
                        <em>100%</em>
                    </div>
                    <div>
                        <strong>마음에 들어요</strong>
                        <div className="bar">
                            <div></div>
                        </div>
                        <em>0%</em>
                    </div>
                    <div>
                        <strong>보통이에요</strong>
                        <div className="bar">
                            <div></div>
                        </div>
                        <em>0%</em>
                    </div>
                    <div>
                        <strong>그냥 그래요</strong>
                        <div className="bar">
                            <div></div>
                        </div>
                        <em>0%</em>
                    </div>
                    <div>
                        <strong>별로에요</strong>
                        <div className="bar">
                            <div></div>
                        </div>
                        <em>0%</em>
                    </div>
                </div> */}
            </div>
            <div className="review_nav">
                <span>최신순</span>
                <span>평점높은순</span>
                <span>평점낮은순</span>
                {/* <span>추천순</span> */}
            </div>
            <hr />
            {/* ----------------리뷰2---------------- */}
            {review.map((it) => <DpReviewItem key={it.id}{...it} reviewScoreText={reviewScoreText} />)}
        </div>
    );

}

export default DpReviewScore;