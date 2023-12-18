import React from 'react';
import '../../../../styles/members/ReviewModal.css';
import { useState, useEffect } from "react";
import axios from 'axios';

export function useStar() {

    const array = [0, 1, 2, 3, 4];
    const [checkStar, setCheckStar] = useState([true, true, true, true, true]);
    const clickStar = (index) => {
        const starStates = array.map((i) => { return (i <= index) });
        setCheckStar(starStates);
    };
    // 별점값 내보내기
    let starScore = checkStar.filter(Boolean).length;

    return { starScore };

}

export const ReviewModal = ({ order_detail_id, closeModal, product_id, user_id}) => {


    function insertReview() {

        const review_content = document.getElementById("review_content").value;
        if (review_content.length < 30) {
            alert("리뷰는 30자 이상이어야 합니다.");
            return;
        }

        let formData = new FormData(document.getElementById("subtitleID_review"));

        let url = "/review/reviewInsert";

        axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(response => {
            console.log("reviewInsert 등록 완료");
            alert("등록되었습니다");
            //navigateInsertTo("/detail");
        }).catch(err => {
            if (err.response.status == "502") {
                alert("[입력 오류] 다시 시도하세요.");
            } else {
                alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
            }
        });
    }


    const array = [0, 1, 2, 3, 4];
    const [checkStar, setCheckStar] = useState([true, true, true, true, true]);
    const clickStar = (index) => {
        const starStates = array.map((i) => { return (i <= index) });
        setCheckStar(starStates);
    };
    // 별점값 내보내기
    let starScore = checkStar.filter(Boolean).length;
    console.log(starScore);

    return (
        <p className="ReviewModal">
            <div className="review_cover">
                <div className="modal_review" >
                    <form id='subtitleID_review' enctype="multipart/form-data">
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
                                <td>파일첨부
                                    <input type='hidden' name="review_star" id="review_star" value={starScore} />
                                    <input type='hidden' name="product_id" id="product_id" value={product_id} />
                                    <input type='hidden' name="user_id" id="user_id" value={user_id} />
                                    <input type='hidden' name="order_detail_id" id="order_detail_id" value={order_detail_id} />

                                </td>
                                <td><input type="file" name="review_upload_filef" id="review_upload_filef" multiple  accept="image/*"/></td>
                            </tr>
                            <tr>
                                <td>리뷰작성</td>
                                <td><textarea name="review_content" id="review_content" placeholder="30자 이상 200자 이하" minLength={30} maxLength={200} required></textarea></td>
                            </tr>
                        </table>
                        <div className="review_button">
                            <button type="reset" onClick={() => closeModal('review')}>취소</button>
                            <button onClick={() => insertReview()}>완료</button>
                        </div>
                    </form>
                </div>
            </div>
        </p>
    );
}