import '../../../../styles/members/join_modal02.css';
const Join_Modal02 = ({closeModal}) => {
    return (
        <div className="Join_Modal02">
            <div className="modal_cover1">
                <div className="modal_2">
                    <h3>개인정보 수집 및 이용안내&#40;필수&#41;</h3>

                    <table className='modal_2_t'>
                        <tr>
                            <th>구분</th>
                            <th>수집항목</th>
                            <th className="third_column">이용목적</th>
                        </tr>
                        <tr>
                            <th>가입</th>
                            <td>이메일 아이디,성명,비밀번호</td>
                            <td className="third_column">회원가입 후 서비스 이용공지사항 전달</td>
                        </tr>
                        <tr>
                            <th>본인확인</th>
                            <td>성명,휴대폰번호,생년월일,중복가입확인</td>
                            <td className="third_column">본인인증,연령 확인,회원가입</td>
                        </tr>
                        <tr>
                            <th rowspan="2">서비스</th>
                            <td>이메일 아이디,성명</td>
                            <td className="third_column">리뷰내역</td>
                        </tr>
                        <tr>
                            <td>이메일 아이디,성명,휴대폰번호</td>
                            <td class="third_column">상담&#40;1대1문의,상품문의&#41; 및 불만처리</td>
                        </tr>
                        <tr>
                            <th>주문</th>
                            <td>주문자 정보,결제정보</td>
                            <td className="third_column">본인확인,주문 상품의 결제 및 환불</td>
                        </tr>
                    </table>

                    <ul className='text_underLine2'>
                        <li>개인정보의 보유 및 이용 기간: 회원 탈퇴 시&#40;이메일 아이디, 휴대폰 번호, 연계정보, 중복가입확인정보는 탈퇴 후 30일 &#41; 또는 법정 의무 보유기간</li>
                    </ul>
                    <div className='close_button' >
                         <button className='close_Join_modal2' onClick={()=>{closeModal('joinModal_2')}}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join_Modal02;