import { useStar } from '../../../members/components/Mypage/ReviewModal';
import { useState, useEffect } from 'react';
import DpReviewItem from './DpReviewItem';
import PageNation from '../PageNation';
import axios from 'axios';




const DpReviewScore = ({product_id}) => {

    const [review, setReview] = useState([]);
    useEffect(() => {
        let url = "/review/rList/" + product_id;

        axios.get(url).then(response => {
            setReview(response.data);
            console.log(response.data);
            }).catch(err => {
                if (err.response.status == "502") {
                    alert("[입력 오류] 다시 시도하세요.");
                } else {
                    alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
                }
            });
    }, []);

   
    
    const reviewScoreText = ["아주 좋아요", "마음에 들어요", "보통이에요", "그냥 그래요", "별로에요"];

    const [spanActive, setspanActive] = useState("");

    const starLengths = review.map(item => item.review_star);
    const totalStar = starLengths.reduce((acc, star) => acc + star, 0);
    const totalStar2 = (totalStar / review.length).toFixed(1);

    const starFrequency = starLengths.reduce((frequency, star) => {
        frequency[star] = (frequency[star] || 0) + 1;
        return frequency;
    }, {});

    const clickNewest = () => {
        const rivewNewest = [...review].sort((a, b) => new Date(b.review_date) - new Date(a.review_date));
        setReview(rivewNewest);
        setspanActive("spanNewest");
    }
    const clickGradHigh = () => {
        const rivewGradHigh = [...review].sort((a, b) => b.review_star - a.review_star);
        setReview(rivewGradHigh);
        setspanActive("spanGradHigh");
    }
    const clickGradRow = () => {
        const rivewGradRow = [...review].sort((a, b) => a.review_star - b.review_star);
        setReview(rivewGradRow);
        setspanActive("spanGradRow");
    }

    const [page, setPage] = useState(1);
    const listPerPage = 3;
    const startIndex = ((page) - 1) * listPerPage;

    //console.log('아이디',product_id);





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
            {review.slice(startIndex, startIndex + listPerPage).map((it) => <DpReviewItem key={it.id}{...it} reviewScoreText={reviewScoreText}/>)}
            <div className='page_nation'>

            <PageNation setPage={setPage} />
            </div>
        </div >
    );

}

export default DpReviewScore;