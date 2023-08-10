import "../../styles/members/Join.css";
const Join = () => {

    return (
        <div className = "Join">
            <div className="center m_c">

                <div className="title_route">
                    <h2><strong>JOIN</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>JOIN</li>
                    </ul>
                </div>

                <div className="required_entry">
                    <p>필수 입력항목<span className="point_color">&#42;</span></p>
                </div>

                <form action="#">
                    <table>
                        <tr id="sale_coupon">
                            <td colspan="2">
                                <strong>회원으로 가입하시면 즉시 사용가능한 10&#37; 할인쿠폰을 드립니다.</strong>
                                <em>&#40;본인인증 완료한 계정당 1회 사용 가능&#41;</em>
                            </td>
                        </tr>


                        <tr>
                            <th>이메일 아이디<span className="point_color">&#42;</span></th>

                            <td>
                                <label>
                                    <input className="input_box" type="email" name="user_email"
                                        placeholder="&#64;까지 정확하게 입력해주세요." required/>
                                </label>
                            </td>
                        </tr>


                        <tr>
                            <th>비밀번호<span className="point_color">&#42;</span></th>
                            <td>
                                <label>
                                    <input className="input_box" type="password" name="password"
                                        placeholder="영문&#43;숫자&#43;특수문자 조합 8&#126;16자리" required/>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <th>비밀번호 확인<span className="point_color">&#42;</span></th>
                            <td>
                                <label>
                                    <input className="input_box" type="password" name="check_password" required/>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <th>이름<span className="point_color">&#42;</span></th>
                            <td>
                                <label>
                                    <input className="input_box" type="text" name="user_name" placeholder="예&#41;홍길동" required/>
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <th id="last_input_box">이벤트 정보<span className="point_color">&#42;</span></th>
                            <td>
                                <label>
                                    <input type="radio" name="event_info" value="reception" checked/> 수신
                                </label>
                                <label>
                                    <input type="radio" name="event_info" value=" no_reception"/> 비수신
                                </label>
                            </td>
                        </tr>
                    </table>
                </form>

                <div className="general_agreement">
                    <ul>
                        <li>
                            <input type="radio" name="agree" required/> 전체 동의합니다.
                        </li>
                        <li>
                            <span id="letter">
                                전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,개별적으로 동의를 선택하실 수 있습니다. <br/>
                                    선택항목에 대한 동의를 거부하는 경우에도 회원가입 서비스는 이용이 가능합니다.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="check_agreement">
                    <ul>
                        <li>
                            <input type="radio" name="over_fourteen1" required/> 만 14세 이상입니다.&#40;필수&#41;

                        </li>

                        <li>
                            <input type="radio" name="over_fourteen2" required/> 이용약관 동의&#40;필수&#41;
                                <a href="./modal/join_modal1.html">내용보기</a>
                        </li>

                        <li>
                            <input type="radio" name="over_fourteen3" required/> 개인정보 수집 및 이용에 대한 동의&#40;필수&#41;
                                <a href="./modal/join_modal2.html">내용보기</a>
                        </li>

                        <li>
                            <input type="radio" name="over_fourteen4"/> 개인정보 수집 및 이용안내&#40;선택&#41;
                                <a href="./modal/join_modal3.html">내용보기</a>
                        </li>
                    </ul>
                </div>

                <div className="join_button">
                    <a href="../index.html">취소</a>
                    <a href="">확인</a>

                </div>
            </div>
        </div>
    );
}
export default Join;