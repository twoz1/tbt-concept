import './join_modal3.css';
const Join_Modal03 = () => {
    return (
        <div className="Join_Modal03">
            <div class="modal_cover">
                <div class="modal_3">
                    <h2>개인정보 수집 및 이용안내&#40;선택&#41;</h2>

                    <table>
                        <tr id="first_tr">
                            <td>구분</td>
                            <td>수집항목</td>
                            <td>이용목적</td>
                        </tr>

                        <tr id="second_tr">
                            <td class="second_tr_td" id="other_services">
                                기타서비스
                            </td>
                            <td class="second_tr_td">휴대폰 번호</td>
                            <td>
                                <strong>앱 설치 URL 전송</strong>
                            </td>
                        </tr>
                    </table>

                    <ul className='text_underLine3'>
                        <li>개인정보의 보유 및 이용 기간 &#58; 회원 탈퇴 시 30일 뒤 또는 법정 의무 보유기간</li>
                        <li>선택사항의 동의를 거부하시는 경우에도 회원가입 및 구매결제 등 필수서비스는 이용할 수 있습니다. 단,일부 부가서비스는 제한될 수 있습니다.</li>
                    </ul>
                    <div class="close_button">
                        <a href="../join.html">닫기</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join_Modal03;
