import "../../styles/members/Join.css";
import JoinCheckbox from "./components/Join/JoinCheckbox";
import React, { useState } from 'react';

const Join = () => {

    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [emailValid, setEmailValid] = useState(false);
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



    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // 이메일 형식 검사
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmailValid(emailPattern.test(newEmail));

    }
    // =======================================================

    // const [pW, setPw] = useState('');
    const handlePw = (e) => {
        // console.log('첫번쩨');
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
        setSecondPw(newSecondPw);
    };
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

    const handleBlur = () => {
        if (!emailValid) {
            setEmailMessage('아이디를 입력해주세요');
            setEmail('');
        }
        if (!pWValid) {
            setPw('');
        }
        if (!secondPwValid) {
            setSecondPw('');
        }
    }

    const [eventInfo, setEventInfo] = useState(""); // 선택된 이벤트 정보를 추적

    const handleEventInfo = (e) => {
        setEventInfo(e.target.value);
    };


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

                <form action="/user/uJoin" method="post">
                    <div className="required_entry">
                        <p>필수 입력항목<span className="point_color">&#42;</span></p>
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
                                <label>
                                    <input className="input_box"
                                        name="user_id"
                                        value={email}
                                        onChange={handleEmail}
                                        onKeyDown={(e) => {
                                            if (!emailValid) {
                                                if (e.key === 'Tab') {
                                                    e.preventDefault();
                                                    setEmail('');
                                                }
                                            }
                                        }}
                                        onBlur={handleBlur}
                                        placeholder="&#64;까지 정확하게 입력해주세요." required />
                                    <input type="hidden" name="user_birth" value={new Date().toLocaleString()} />
                                </label>
                                <div>
                                    {0 < email.length && email.length < 5 && (
                                        <span>아이디를 5자 이상으로 입력해주세요.</span>
                                    )}

                                    {email.length >= 5 && !emailValid && (
                                        <span>아이디는 이메일 형식으로 입력해주세요.</span>
                                    )}
                                    {emailValid && (<span>사용 가능한 아이디입니다.</span>)}
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <th>비밀번호 <span className="point_color">&#42;</span></th>
                            <td>
                                <label>
                                    <input className="input_box" type="password"
                                        name="user_pw"
                                        value={pW}
                                        onChange={handlePw}
                                        placeholder="영문&#43;숫자&#43;특수문자 조합 8&#126;16자리"
                                        onKeyDown={(e) => {
                                            if (!pWValid) {
                                                if (e.key === 'Tab') {
                                                    e.preventDefault();
                                                    setPw('');
                                                }
                                            }
                                        }}
                                        onBlur={handleBlur}
                                        required />
                                </label>
                                <div>
                                    <span>{pwMessage}</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>비밀번호 확인 <span className="point_color">&#42;</span></th>
                            <td>
                                <label>
                                    <input className="input_box" type="password"
                                        value={secondPw}
                                        onChange={handleSecondPw}
                                        onKeyDown={(e) => {
                                            if (!secondPwValid) {
                                                if (e.key === 'Tab') {
                                                    e.preventDefault();
                                                    setSecondPw('');
                                                }
                                            }
                                        }}
                                        onBlur={handleBlur}
                                        required />
                                </label>
                                <div>
                                    <span>{secondPwMessage}</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>이름 <span className="point_color">&#42;</span></th>
                            <td>
                                <label>
                                    <input className="input_box" type="text"
                                        name="user_name"
                                        value={userName}
                                        onChange={handleUserName}
                                        placeholder="예&#41;홍길동"
                                        required />
                                </label>
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
                                        onChange={handleEventInfo}
                                        required />  수신
                                </label>

                                <label>
                                    <input type="radio" name="user_event_check" value="N"
                                        onChange={handleEventInfo}
                                        required /> 비수신

                                </label>
                                <div>
                                    {(eventInfo === "reception" || eventInfo === "no_reception") && (
                                        <p>회원정보 및 구매 정보, 주요 정책 안내는 수신 여부와 관계 없이 발송됩니다.</p>
                                    )}
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
            </div>
        </div>
    );
}
export default Join;