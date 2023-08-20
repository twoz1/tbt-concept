import { useStar } from '../../members/ReviewModal'
import { useState } from 'react';
import DpReviewItem from './DpReviewItem';

const reviewList = [
    {
        id: 0,
        starLength: 5,
        reviewText: "선글라스 색감이 너무 예뻐요 친구들이 잘 어울린다고 칭찬해줘서 기쁘네요. tbt 컨셉에 예쁜 선글라스랑 안경이 너무 많아서 다 사고 싶어요 ㅠㅠ tbt 컨셉 최고",
        reviewImg: "",
    },
    {
        id: 1,
        starLength: 4,
        reviewText: "구현하는게 왜 이렇게 어려울까요........진짜 화가난다.......",
        reviewImg: "",
    }
]
const DpReview = () => {


    const [review, setReview] = useState(reviewList);


    return (
        <div>
            <div className="review_score_percent" id="review">
                <div className="review_left">

                    <span>
                        <strong>상품만족도&#40;{review.length}&#41;</strong></span>
                    <p>구매하신 분들이 상품에 대한 평점입니다.</p>
                    <div id="star_icon">
                        <strong>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </strong>
                    </div>

                    <div id="star_score">
                        <strong>5</strong>
                        <span>/</span>
                        <em>5.0</em>
                    </div>
                </div>


                <div className="review_right">
                    <div>

                        <strong>아주 좋아요</strong>
                        <div className="bar" id="top_bar"></div>
                        <em>100%</em>
                    </div>

                    <div>
                        <strong>마음에 들어요</strong>
                        <div className="bar"></div>
                        <em>0%</em>
                    </div>

                    <div>
                        <strong>보통이에요</strong>
                        <div className="bar"></div>
                        <em>0%</em>
                    </div>

                    <div>
                        <strong>그냥 그래요</strong>
                        <div className="bar"></div>
                        <em>0%</em>
                    </div>

                    <div>
                        <strong>별로에요</strong>
                        <div className="bar"></div>
                        <em>0%</em>
                    </div>
                </div>
            </div >
            <div className="review_nav">
                <span>최신순</span>
                <span>평점높은순</span>
                <span>평점낮은순</span>
                {/* <span>추천순</span> */}
            </div>
            <hr />
            {/* <!-- ===============리뷰2============================================================================= --> */}
            {review.map((it) => <DpReviewItem key={it.id} {...it} />)}
        </div >

    );

}

export default DpReview;