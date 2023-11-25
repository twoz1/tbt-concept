import { useStar } from '../../../members/components/Mypage/ReviewModal';
import { useState } from 'react';
import DpReviewItem from './DpReviewItem';
import PageNation from '../PageNation';

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
        reviewText: "라식 수술하면서 선글라스가 필요해서 구매했어요ㅇ.ㅇ 사람들이 저보고 연예인이래요.",
    },
    {
        id: 3,
        userId: "passion",
        reviewDate: "2023.06.15",
        starLength: 3,
        reviewText: "화면과 색이 좀 다르네요.. 그래도 예뻐요.",
    },
    {
        id: 4,
        userId: "musician",
        reviewDate: "2023.06.25",
        starLength: 4,
        reviewText: "저랑 찰떡입니당!",
    }
]


const DpReviewScore = () => {

    const [review, setReview] = useState(reviewList);
    const reviewScoreText = ["아주 좋아요", "마음에 들어요", "보통이에요", "그냥 그래요", "별로에요"];

    const [spanActive, setspanActive] = useState("");

    const starLengths = review.map(item => item.starLength);
    const totalStar = starLengths.reduce((acc, star) => acc + star, 0);
    const totalStar2 = (totalStar / review.length).toFixed(1);

    const starFrequency = starLengths.reduce((frequency, star) => {
        frequency[star] = (frequency[star] || 0) + 1;
        return frequency;
    }, {});

    const clickNewest = () => {
        const rivewNewest = [...review].sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
        setReview(rivewNewest);
        setspanActive("spanNewest");
    }
    const clickGradHigh = () => {
        const rivewGradHigh = [...review].sort((a, b) => b.starLength - a.starLength);
        setReview(rivewGradHigh);
        setspanActive("spanGradHigh");
    }
    const clickGradRow = () => {
        const rivewGradRow = [...review].sort((a, b) => a.starLength - b.starLength);
        setReview(rivewGradRow);
        setspanActive("spanGradRow");
    }

    const [page, setPage] = useState(1);
    const listPerPage = 3;
    const startIndex = ((page) - 1) * listPerPage;


    return (

        <div>
            <div className="review_score_percent" id="review">
                <div className="review_left">

                    <span>
                        <strong>상품만족도&#40;{review.length}&#41;</strong></span>
                    <p>구매하신 분들이 상품에 대한 평점입니다.</p>
                    <div id="star_icon">
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div style={{ width: `${(totalStar2 / 5) * 100}%` }}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div id="star_score">
                        <strong>{totalStar2}</strong>
                        <span>/</span>
                        <em>5.0</em>
                    </div>
                </div>

                <div className="review_right">
                    {reviewScoreText.map((text, index) => (
                        <div key={index}>
                            <strong>{text}</strong>
                            <div className="bar">
                                <div style={{ width: `${(starFrequency[5 - index] || 0) / review.length * 100}%` }}></div>
                            </div>
                            <em>{((starFrequency[5 - index] || 0) / review.length * 100).toFixed(1)}%</em>
                        </div>
                    ))}
                </div>
            </div>
            <div className="review_nav">
                <span onClick={clickNewest} className={spanActive === 'spanNewest' ? 'active' : ''}>최신순</span>
                <span onClick={clickGradHigh} className={spanActive === 'spanGradHigh' ? 'active' : ''}>평점높은순</span>
                <span onClick={clickGradRow} className={spanActive === 'spanGradRow' ? 'active' : ''}>평점낮은순</span>
                {/* <span>추천순</span> */}
            </div >
            <hr />
            {/* ----------------리뷰2---------------- */}
            {review.slice(startIndex, startIndex + listPerPage).map((it) => <DpReviewItem key={it.id}{...it} reviewScoreText={reviewScoreText} />)}
            <div className='page_nation'>

            <PageNation setPage={setPage} />
            </div>
        </div >
    );

}

export default DpReviewScore;