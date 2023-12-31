import { useState } from 'react';
import '../../../../styles/customerService/Modal_cs1on1.css';
import axios from "axios";


//모달창 컴포넌트
const DpProductCSModal = ({ closeModal, product_id }) => {

   const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));

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

   // QnA1on1 등록 ===================================================
   function insertQnA1on1(e,product_id) {
      e.preventDefault();
      let formData = new FormData(document.getElementById("DpProductqnaModal"));

      let url = "/qna1on1/qna1on1Insert/" + product_id;

      axios.post(url, formData, {
         headers: { "Content-Type": "multipart/form-data" }
      }).then((response) => {
         console.log("insertProductQnA1on1 등록 완료");
         alert("등록되었습니다.");
         window.location.reload();
      }).catch(err => {
         if (err.response.status == "502") {
            alert("[입력 오류] 다시 시도하세요.");
         } else {
            alert("[시스템 오류] 잠시 후에 다시 시도하세요." + err.message);
         }
      });
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
               <form id='DpProductqnaModal' className="subtitle_1on1"  onSubmit={(e) => insertQnA1on1(e, product_id)} enctype="multipart/form-data">
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
                                    value={loginUser.user_id}
                                 />
                                 <input type='hidden' name='product_id' value={product_id} />
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
                                    <option value="사이즈">사이즈</option>
                                    <option value="재입고">재입고</option>
                                    <option value="상품상세문의">상품상세문의</option>
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
                                 <input type="text"
                                    name="qna_phone_num"
                                    value={userPhoneNum}
                                    maxLength={11}
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
                                       <span>"-" 제외하고 11자 입력해주세요.</span>
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
                                 <input className='fileUpload' type="file" name="qna_upload_filef" id="btn_fileRef"  accept="image/*" multiple  />
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
                     <button type='button' onClick={() => closeModal('dpProductCSModal')}>취소</button>
                     <button>등록</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default DpProductCSModal;