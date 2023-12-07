import "../../styles/members/Join.css";
import useScrollToTop from '../customHooks/useScrollToTop';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import navigateTo from "../config/navigateTo";

const Update = () => {

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    const [pageState, setPageState] = useState(false);
    console.log(loginUser);


    useEffect(() => {

        if (loginUser == null) {
            alert("로그인 후 이용해주세요.");
            navigateTo("/");
        } else {
            setPageState(true);
        }
    }, []);

    useScrollToTop();

    const [emailMessage, setEmailMessage] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [emailDupValid, setEmailDupValid] = useState(false);

    const [pW, setPw] = useState('');
    const [pWValid, setPwValid] = useState(false);

    const [secondPwValid, setSecondPwValid] = useState(false);

    const [userNameValid, setUserNameValid] = useState(false);

    const [eventCheck, setEventCheck] = useState('');


    
    // ------------------------------------------------------------------------

    const [check, setCheck] = useState(false);
    useEffect(() => {
        if (emailValid && emailDupValid && pWValid && secondPwValid && userNameValid) {
            setCheck(true);
        } else {
            setCheck(false);
        }
        console.log("전부 검사 " + check);
    }, [emailValid, emailDupValid, pWValid, secondPwValid, userNameValid]);

    const clickJoin = (e) => {
        e.preventDefault();
        if (check) {
            axios
                .post('/user/uUpdate', {
                    user_id: document.getElementById('user_id').value,
                    user_name: document.getElementById('user_name').value,
                    user_pw: document.getElementById('user_pw').value,
                    user_birth: document.getElementById('user_birth').value,
                    user_event_check: document.getElementById('user_event_check').value,
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data > 0) {
                        alert("수정이 완료되었습니다.");
                        navigateTo("/login");
                    } else {
                        alert("수정에 실패했습니다.");
                    }

                    console.log(`** checkdata 서버연결 성공 => ${response.data}`);
                }).catch((err) => {
                    alert(`** checkdata 서버연결 실패 => ${err.message}`);
                });
        } else {
            alert("^^^^^^^^^^^^입력 내용을 확인해주세요.");
        }



    }

    return ( pageState && (
        <div className="Join">
            <div className="center m_c">

                <div className="title_route">
                    <h2><strong>개인정보수정</strong></h2>
                    <ul>
                        <li>Mypage</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>Update</li>
                    </ul>
                </div>

                <form action="/user/uUpdate" method="post" onSubmit={e => { clickJoin(e) }}>
                    <div className="required_entry">
                        <p>필수 입력항목 <span className="point_color">&#42;</span></p>
                    </div>

                    {/* =============================================================================================================================================== */}
                    <table className='join_table'>
                        <tr id="sale_coupon">
                            <td colspan="2">
                                <strong>회원으로 가입하시면 즉시 사용가능한 10&#37; 할인쿠폰을 드립니다. </strong>
                            </td>
                        </tr>

                        <tr>
                            <th>이메일 아이디 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box"
                                    id="user_id"
                                    name="user_id"
                                    value={loginUser.user_id}
                                    readOnly/>
                            <input type="text" id="user_birth" name="user_birth" value={loginUser.user_birth} />
                            </td>

                        </tr>
                        <tr>
                            <th>사용자 이름 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box"
                                    id="user_name"
                                    name="user_name"
                                    
                                    placeholder={loginUser.user_name}/>
                                <input type="hidden" id="user_birth" name="user_birth" value={new Date().toLocaleString()} />
                                <div>
                                    <span>{emailMessage}</span>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <th>비밀번호 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box" type="password"
                                    name="user_pw"
                                    value={loginUser.user_pw}
                                    onKeyDown={(e) => {
                                        if (!pWValid) {
                                            if (e.key === 'Tab') {
                                                e.preventDefault();
                                                setPw('');
                                            }
                                        }
                                    }}
                                    required
                                    readOnly />
                            </td>
                        </tr>


                        <tr>
                            <th id="last_input_box">이벤트 정보&#40;이메일&#41; <span className="point_color">&#42;</span></th>
                            <td>
                                <label className='event_info_radio'>
                                    <input type="radio" name="user_event_check" value="Y"
                                        onBlur={e => { setEventCheck(e.target.value) }} required />  수신
                                </label>

                                <label>
                                    <input type="radio" name="user_event_check" value="N"
                                        onBlur={e => { setEventCheck(e.target.value) }} required /> 비수신

                                </label>
                                <div>
                                    <p>회원정보 및 구매 정보, 주요 정책 안내는 수신 여부와 관계 없이 발송됩니다.</p>
                                </div>
                            </td>
                        </tr>
                    <div className="join_button">
                        <button type="reset">초기화</button>
                        <button type="submit" >수정하기</button>
                    </div>
                    </table>
                  

                    {/* ================================================================================================================================================ */}
                </form>
            </div >
        </div >
    ));
}
export default Update;