import { useState } from 'react';
import '../../../../styles/customerService/Modal_cs1on1.css';
import axios from "axios";


//모달창 컴포넌트
const Modal_cs1on1 = ({ openModal, closeModal, isModal }) => {

	// 1:1 문의 유효성 검사
	// 회원정보===================================================
	const [userEmail, setUserEmail] = useState('');
	const [emailValid, setEmailValid] = useState(false);
	const emailRegEx = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

	const emailCheck = (e) => {
		setUserEmail(e.target.value);

		if (emailRegEx.test(userEmail)) {
			setEmailValid(true);
		} else {
			setEmailValid(false);
		}
	};

	// 답변알림===================================================

	const [userPhoneNum, setUserPhoneNum] = useState('');
	const [phoneNumValid, setPhoneNumValid] = useState(false);
	const phoneNumRegEx = /^[0-9]+$/;

	const phoneNumCheck = (e) => {
		setUserPhoneNum(e.target.value);

		if (phoneNumRegEx.test(userPhoneNum)) {
			setPhoneNumValid(true);
		} else {
			setPhoneNumValid(false);
		}
	};

	// QnA1on1 insert ===================================================
	function insertQnA1on1() {

		let formData = new FormData(document.getElementById("subtitleID_1on1"));

		let url = "/qna1on1/qna1on1Insert";

		axios.post(url, formData, {
			headers:{"Content-Type": "multipart/form-data"}
		}).then(response => {
			console.log("insertQnA1on1 등록 완료");
			alert("등록되었습니다");
			navigateInsertTo("/cs");
		}).catch(err => {
			if (err.response.status == "502") {
				alert("[입력 오류] 다시 시도하세요.");
			} else {
				alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
			}
		});
	}

	function navigateInsertTo(url) {
        window.location.href = url;
    }

	return (
		<div>
			{/* =====================팝업창 코드 - 1:1 문의========================= */}
			<div className="modal_cover modal_1">
				<div className="modal_cs1on1">
					<div className="title_route">
						<h2><strong>CUSTOMER SERVICE</strong></h2>
						<ul>
							<li>HOME</li>
							<li>&nbsp;&gt;&nbsp;</li>
							<li>CUSTOMER SERVICE</li>
							<li>&nbsp;&gt;&nbsp;</li>
							<li>1 &#58; 1 문의</li>
						</ul>
					</div>

					{/* ==========1:1 문의 입력 정보창=========== */}
					<form id='subtitleID_1on1' className="subtitle_1on1" enctype="multipart/form-data">
						<figure>
							<figcaption><strong>1&#58;1 문의</strong></figcaption>

							<table>
								<tbody>
									<tr className="tr_custInfo">
										<th>
											회원정보
                                            <span className="spanRed">&#42;</span>
										</th>
										<td>
											<input type="email"
												name="user_id"
												value={userEmail}
												placeholder='이메일형태로 입력해주세요.'
												required
												onChange={emailCheck} />

											<div className='validCheck'>
												{0 < userEmail.length && userEmail.length < 5 && (
													<span>이메일을 5자 이상으로 입력해주세요.</span>
												)}

												{userEmail.length >= 5 && !emailValid && (
													<span>회원정보는 이메일 형식으로 입력해주세요.</span>
												)}
											</div>
										</td>
									</tr>

									<tr className="tr_inquiry">
										<th>
											문의유형
                                            <span className="spanRed">&#42;</span>
										</th>
										<td>
											<select name="qna_type" required>
												<option value="문의유형선택">문의 유형 선택</option>
												<option value="취소문의">취소문의</option>
												<option value="배송문의">배송문의</option>
												<option value="반품문의">반품문의</option>
												<option value="교환문의">교환문의</option>
												<option value="환불문의">환불문의</option>
												<option value="AS문의">AS문의</option>
												<option value="오류문의">오류문의</option>
											</select>

											<span>
												&#8903; 구매 전 상품문의는 상품페이지 하단 상품 Q&#38;A로 문의해주시기 바랍니다.
                                            </span>
										</td>
									</tr>

									<tr className="tr_replyAlert">
										<th>
											답변 알림
                                            <span className="spanRed">&#42;</span>
										</th>
										<td>
											<select required>
												<option value="선택">선택</option>
												<option value="010">010</option>
												<option value="011">011</option>
												<option value="016">016</option>
												<option value="017">017</option>
												<option value="018">018</option>
												<option value="070">070</option>
											</select>
                                            &nbsp;&ndash;&nbsp;<input type="text"
												name="qna_phone_num"
												value={userPhoneNum}
												maxLength={8}
												placeholder='"-"를 제외하고 입력'
												required
												onChange={phoneNumCheck} />

											<div className='alertDiv'>
												<span>
													&#8903; 답변이 등록되면 휴대폰 SMS로 알려드립니다.
                                                </span>

												<label>
													<input type="radio" name="qna_reply_check" id="answerYes" value="yes" checked required />예
                                                </label>

												<label>
													<input type="radio" name="qna_reply_check" id="answerNo" value="no" required />아니오
                                                </label>
											</div>

											<div className='validCheck'>
												{0 < userPhoneNum.length && userPhoneNum.length < 8 && (
													<span>"-" 제외하고 8자 입력해주세요.</span>
												)}

												{userPhoneNum.length == 8 && !phoneNumValid && (
													<span>숫자로 입력해주세요.</span>
												)}
											</div>
										</td>
									</tr>

									<tr className="tr_inqTitle">
										<th>
											제목
                                            <span className="spanRed">&#42;</span>
										</th>
										<td>
											<input name="qna_title" type="text" maxLength="40" required />
										</td>
									</tr>

									<tr className="tr_inqContent">
										<th>
											문의 내용
                                            <span className="spanRed">&#42;</span>
										</th>
										<td>
											<div>
												<textarea name="qna_content" cols="120" rows="30" minLength={20} maxLength="500" placeholder="20자 이상 작성하세요. (최대 500자)"></textarea>
											</div>
										</td>
									</tr>

									<tr className="tr_fileRef">
										<th>
											파일첨부
                                        </th>
										<td>
											<input className='fileUpload' type="file" name="qna_upload_filef" id="btn_fileRef" multiple />
										</td>
									</tr>
								</tbody>
							</table>
						</figure>

						<div className="privacy_Agree">
							<input type="radio" required />
                            개인정보 수집 및 이용에 대한 동의 &#40;필수&#41;
                        </div>

						<div className="btn_submit">
							<button onClick={() => closeModal('inqProdCS1on1')}>취소</button>
							<button onClick={() => insertQnA1on1()}>등록</button>
						</div>
					</form>
				</div>
			</div>
		</div>//최종div
	);
};

export default Modal_cs1on1;