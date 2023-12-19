import React from 'react';
import '../../../../styles/members/ReviewModal.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import '../../../../styles/items/DpReviewModal.css'

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

export const DpReviewModal = ({ closeModal, product_id, review_id, review_date, user_id, review_star, review_content, review_upload_file }) => {


    function uploadReview() {

        let helements = document.querySelectorAll(".hiddenForRUpdate");
        helements.forEach(function (element) {
            element.style.display = "none";
        });

        let belements = document.querySelectorAll(".blockForRUpdate");
        belements.forEach(function (element) {
            element.style.display = "block";
        });

    }

    // 파일 update 시에 사진 스위치를 위한 useEffect
    useEffect(() => {
        const fileInput = document.getElementById('review_upload_filef');

        if (fileInput) {
            fileInput.addEventListener('change', handleFileChange);

            return () => {
                // 컴포넌트가 언마운트될 때 리스너를 제거
                fileInput.removeEventListener('change', handleFileChange);
            };
        }
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

    const handleFileChange = (e) => {
        // 파일 변경 시 실행되는 로직
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (e) {
                const imgElement = document.querySelector('.img_upload_filef');
                if (imgElement) {
                    imgElement.src = e.target.result;
                    imgElement.style.width = '150px';
                }
            };
        }
    };

    function updateReview(e) {

        e.preventDefault();

        const reviewContent = document.getElementById("review_content").value;
        if (reviewContent.length < 30) {
            alert("리뷰는 30자 이상으로 작성해야 합니다.");
            return;
        }

        let formData = new FormData(document.getElementById("update_review"));

        let url = "/review/rUpdate";
        axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(response => {
            console.log("reviewUpdate 완료");
            alert("등록되었습니다");
            window.location.reload();
        }).catch(err => {
            if (err.response.status == 502) {
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
            <div className="modal_cover">
                <div className="modal_review" >
                    <form id='update_review' action='post' onSubmit={(e) => updateReview(e)} enctype="multipart/form-data">
                        <table>
                            <caption>리뷰작성</caption>

                            <tr className='disNone'>
                                <td>
                                    <input type="hidden" name="review_id" id="review_id" value={review_id} />
                                    <input type="hidden" name="product_id" id="product_id" value={product_id} />
                                    <input type="hidden" name="user_id" id="user_id" value={user_id} />
                                    <input type="hidden" name="review_date" id="review_date" value={review_date} />
                                </td>
                            </tr>

                            <tr>
                                <td>별점</td>
                                <td>
                                    <p className="review_star hiddenForRUpdate" >
                                        {Array.from({ length: review_star }, (i) => (
                                            <i className="fa-solid fa-star active" key={i}></i>
                                        ))}
                                    </p>

                                    <p className="review_star blockForRUpdate">
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
                                <td className='dp_review_img'>
                                    {review_upload_file ?
                                        <img className='img_upload_file' src={require(`../../../../images/review/${review_upload_file}`)} alt="첨부사진" ></img>
                                        : "첨부파일 없음"}
                                    <input type="hidden" name="review_upload_file" value={review_upload_file} />
                                    <input className='blockForRUpdate' type="file" name="review_upload_filef" id="review_upload_filef" accept="image/*" />
                                </td>
                            </tr>

                            <input type='hidden' name="review_star" id="review_star" value={starScore} />

                            <tr>
                                <td>리뷰작성</td>

                                <td>
                                    <div className='hiddenForRUpdate contentUpdate'>{review_content}</div>
                                    <textarea className='blockForRUpdate' name="review_content" id="review_content" placeholder="30자 이상 200자 이하" minLength={30} maxLength={200} >{review_content}</textarea>
                                </td>
                            </tr>
                        </table>

                        <div className="first_review_button hiddenForRUpdate">
                            <button type="reset" onClick={() => closeModal('DpReviewModal')}>취소</button>
                            <button type='button' onClick={() => uploadReview()}>수정하기</button>
                        </div>

                        <div className="review_button blockForRUpdate">
                            <button type='button' onClick={() => closeModal('DpReviewModal')}>취소</button>
                            <button >수정완료</button>
                        </div>
                    </form>
                </div>
            </div>
        </p>
    );
}

export default DpReviewModal;