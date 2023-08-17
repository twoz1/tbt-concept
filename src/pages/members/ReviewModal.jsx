import React from 'react';
import { useState } from 'react';
import '../../styles/members/ReviewModal.css';

const ReviewModal = () => {

    const array = [0, 1, 2, 3, 4];
    const [checkStar, setCheckStar] = useState([false, false, false, false, false]);
    const clickStar = (index) => {
        const starStates = array.map((i) => {return( i <= index )});
        setCheckStar(starStates);
    };
    // 별점값 내보내기
    let starScore = checkStar.filter(Boolean).length;
    console.log(starScore);

    const clickReset = () => {
        setCheckStar([false, false, false, false, false]);
    }

    return (
        <p className="ReviewModal">
            <div className="modal_cover">
                <div className="modal_review modal">
                    <form action="#">
                        <table>
                            <caption>리뷰작성</caption>
                            <tr>
                                <td>별점</td>
                                <td>
                                    <p className="review_star">
                                        {array.map((i) => (
                                            <i className={`fa-solid fa-star ${checkStar[i] ? 'active' : ''}`}
                                                key={i}
                                                onClick={() => clickStar(i)}>
                                            </i>
                                        ))}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>파일첨부</td>
                                <td><input type="file" name="review_file" /></td>
                            </tr>
                            <tr>
                                <td>리뷰작성</td>
                                <td><textarea name="review_text" id="review_text" placeholder="30자 이상 200자 이하"></textarea></td>
                            </tr>
                        </table>
                        <div className="review_button">
                            <button type="reset" onClick={clickReset}>초기화</button>
                            <button type="submit">완료</button>
                        </div>
                    </form>
                </div>
            </div>
        </p>
    );
}

export default ReviewModal;
