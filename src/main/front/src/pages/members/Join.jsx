import "../../styles/members/Join.css";
import useScrollToTop from '../customHooks/useScrollToTop';
import JoinCheckbox from "./components/Join/JoinCheckbox";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import navigateTo from "../config/navigateTo";

const Join = () => {

    useScrollToTop();

    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [emailDupValid, setEmailDupValid] = useState(false);
    const special = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    const [pW, setPw] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [pWValid, setPwValid] = useState(false);

    const [secondPw, setSecondPw] = useState('');
    const [secondPwMessage, setSecondPwMessage] = useState('');
    const [secondPwValid, setSecondPwValid] = useState(false);

    const [userName, setUserName] = useState('');
    const [userNameMessage, setUserNameMessage] = useState('');
    const [userNameValid, setUserNameValid] = useState(false);

    const [eventCheck, setEventCheck] = useState('');


    const handleEmail = (e) => {

        const newEmail = e.target.value;
        if (email != newEmail) {
            setEmailDupValid(false);
        }
        setEmail(newEmail);
        // 이메일 형식 검사
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (0 < newEmail.length && newEmail.length < 5) {
            setEmailMessage("아이디를 5자 이상으로 입력해주세요.");
            setEmailValid(false);
        } else if (newEmail.length >= 5 && !emailPattern.test(newEmail)) {
            setEmailMessage("아이디는 이메일 형식으로 입력해주세요.");
            setEmailValid(false);
        } else {
            setEmailValid(true);
            setEmailMessage('ID중복확인을 해주세요.');
        }

        if (newEmail == '') {
            setEmailValid(false);
            setEmailDupValid(false);
            setEmailMessage('아이디를 입력해주세요');
        }

    }

    const idDupCheck = () => {
        if (emailValid) {
            axios
                .get('/user/idDupCheck?id=' + email)
                .then((response) => {
                    console.log(response.data);
                    if (response.data == "미존재") {
                        setEmailMessage("사용 가능합니다.");
                        setEmailDupValid(true);
                    } else if (response.data == "존재") {
                        setEmailMessage("이미 사용중인 아이디입니다.");
                        setEmailDupValid(false);
                    }

                    console.log(`** checkdata 서버연결 성공 => ${response.data}`);
                }).catch((err) => {
                    alert(`** checkdata 서버연결 실패 => ${err.message}`);
                });
        }
    }

    console.log("유효성검사 => " + emailValid + ", 중복검사 => " + emailDupValid)
    // =======================================================

    const handlePw = (e) => {

        const newPw = e.target.value.slice(0, 16);

        if (newPw.length <= 7 || newPw.length > 16) {
            setPwMessage('8자~16자로 입력해주세요.');
            setPwValid(false);

        } else if (!/[a-zA-Z]/.test(newPw) || !/\d/.test(newPw) || !special.test(newPw)) {
            setPwMessage('영문, 숫자, 특수문자를 모두 사용하여 입력하세요.');
            setPwValid(false);
        }
        else {
            setPwMessage('사용 가능합니다.');
            setPwValid(true);
        }

        if (newPw == '') {
            setPwMessage('비밀번호를 입력해주세요');
        }

        setPw(newPw);
    }

    // ============================================================

    const handleSecondPw = (e) => {

        const newSecondPw = e.target.value;

        if (newSecondPw != pW) {
            setSecondPwMessage('비밀번호 정보가 일치하지 않습니다.');
            setSecondPwValid(false);
        } else {
            setSecondPwMessage('');
            setSecondPwValid(true);
        }

        if (newSecondPw == '') {
            setSecondPwMessage('비밀번호를 입력해주세요');
        }

        setSecondPw(newSecondPw);
    }
    // ===================================================

    const handleUserName = (e) => {

        const newUserName = e.target.value.slice(0, 10);

        if (newUserName.trim() === '') {
            setUserNameMessage('이름을 입력하세요.');
            setUserNameValid(false);
        } else {
            setUserNameMessage('');
            setUserNameValid(true);
        }

        setUserName(newUserName);
    }

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
                .post('/user/uJoin', {
                    user_id: email,
                    user_name: userName,
                    user_pw: pW,
                    user_birth: document.getElementById('user_birth').value,
                    user_event_check: eventCheck,
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data > 0) {
                        alert("회원가입이 완료되었습니다.");
                        navigateTo("/login");
                    } else {
                        alert("회원가입에 실패했습니다.");
                    }

                    console.log(`** checkdata 서버연결 성공 => ${response.data}`);
                }).catch((err) => {
                    alert(`** checkdata 서버연결 실패 => ${err.message}`);
                });
        } else {
            alert("입력 내용을 확인해주세요.");
        }
    }

    return (
        <div className="Join">
            <div className="center m_c">

                <div className="title_route">
                    <h2><strong>JOIN</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>JOIN</li>
                    </ul>
                </div>

                <form action="/user/uJoin" method="post" onSubmit={e => { clickJoin(e) }}>
                    <div className="required_entry">
                        <p>필수 입력항목 <span className="point_color">&#42;</span></p>
                    </div>

                    {/* =============================================================================================================================================== */}
                    <table className='join_table'>
                        <tr id="sale_coupon">
                            <td colspan="2">
                                <strong>회원으로 가입하시면 즉시 사용가능한 10&#37; 할인쿠폰을 드립니다. </strong>
                                <em>&#40;본인인증 완료한 계정당 1회 사용 가능&#41;</em>
                            </td>
                        </tr>

                        <tr>
                            <th>이메일 아이디 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box"
                                    id="user_id"
                                    name="user_id"
                                    value={email}
                                    onChange={e => handleEmail(e)}
                                    onKeyDown={(e) => {
                                        if (!emailValid) {
                                            if (e.key === 'Tab') {
                                                e.preventDefault();
                                                setEmail('');
                                            }
                                        }
                                    }}
                                    placeholder="&#64;까지 정확하게 입력해주세요." required />
                                <button type="button" id="idDup" onClick={() => idDupCheck()}>ID중복확인</button>
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
                                    onChange={e => handlePw(e)}
                                    placeholder="영문&#43;숫자&#43;특수문자 조합 8&#126;16자리"
                                    onKeyDown={(e) => {
                                        if (!pWValid) {
                                            if (e.key === 'Tab') {
                                                e.preventDefault();
                                                setPw('');
                                            }
                                        }
                                    }}
                                    required />
                                <div>
                                    <span>{pwMessage}</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>비밀번호 확인 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box" type="password"
                                    onChange={e => handleSecondPw(e)}
                                    onKeyDown={(e) => {
                                        if (!secondPwValid) {
                                            if (e.key === 'Tab') {
                                                e.preventDefault();
                                                setSecondPw('');
                                            }
                                        }
                                    }}
                                    required />
                                <div>
                                    <span>{secondPwMessage}</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>이름 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box" type="text"
                                    name="user_name"
                                    value={userName}
                                    onChange={e => handleUserName(e)}
                                    placeholder="예&#41;홍길동"
                                    required />
                                <div>
                                    <span>{userNameMessage}</span>
                                </div>
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
                    </table>
                    {/* ================================================================================================================================================ */}
                    <JoinCheckbox></JoinCheckbox>

                    {/* ================================================================================================================================================ */}

                    <div className="join_button">
                        <button type="reset">초기화</button>
                        <button>가입하기</button>
                    </div>

                    {/* ================================================================================================================================================ */}
                </form>
            </div >
        </div >
    );
}
export default Join;