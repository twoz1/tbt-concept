import { useStar } from '../../../members/components/Mypage/ReviewModal';
import { useState, useEffect } from 'react';
import DpReviewItem from './DpReviewItem';
import Pagination from '../../../customHooks/Pagination';
import axios from 'axios';




const DpReviewScore = ({ product_id }) => {

    const [review, setReview] = useState([]);
    useEffect(() => {
        let url = "/review/rList/" + product_id;

        axios.get(url).then(response => {
            setReview(response.data);
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[입력 오류] 다시 시도하세요.");
            } else {
                alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }, []);

    console.log(review);

    const reviewScoreText = ["아주 좋아요", "마음에 들어요", "보통이에요", "그냥 그래요", "별로에요"];

    const [spanActive, setspanActive] = useState("");

    const starLengths = review.map(item => item.review_star);
    const totalStar = starLengths.reduce((acc, star) => acc + star, 0);
    let totalStar2;

    if (totalStar == 0 || review.length == 0) {
        totalStar2 = 0;
    } else {
        totalStar2 = (totalStar / review.length).toFixed(1);
    }

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

    // pagination 구현
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
    const listPerPage = 4;  // 페이지 당 게시글 개수
    const totalPages = Math.ceil(review.length / listPerPage);    // 전체 페이지 번호


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * listPerPage;
        const endIndex = startIndex + listPerPage;
        return review.slice(startIndex, endIndex);
    };

    return (

        <div>
            <div className="review_score_percent" id="review">
                <div className="review_left">

                    <span>
                        <strong>상품만족도&#40;{review.length}&#41;</strong></span>
                    <p>구매하신 분들의 상품에 대한 평점입니다.</p>
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

                            {review.length === 0 ? (
                                <div>
                                    <div className="bar">
                                        <div style={{ width: `${0}%` }}></div>
                                    </div>
                                    <em>0%</em>
                                </div>
                            ) : (
                                <div>
                                    <div className="bar">
                                        <div style={{ width: `${(starFrequency[5 - index] || 0) / review.length * 100}%` }}></div>
                                    </div>
                                    <em>{((starFrequency[5 - index] || 0) / review.length * 100).toFixed(1)}%</em>
                                </div>
                            )}
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
            

            {/* ----------------리뷰2---------------- */}
            {getPaginatedData().length !== 0 ?
            
            getPaginatedData().map((dpReview) => <DpReviewItem key={dpReview.qna_id}{...dpReview} reviewScoreText={reviewScoreText} />) :
             <div className='review_board'><span>작성한 게시물이 없습니다.</span></div>}
            
            {getPaginatedData().length !== 0 ?
                <div>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
                </div>
                : <div></div>
            }
        </div >
    );

}

export default DpReviewScore;