import React, { useState } from 'react'

const JoinForm = () => {

    const [email, setEmail] = useState('');
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
        setEmail(e.target.value);

        if (special.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }

    }
    // =======================================================

    // const [pW, setPw] = useState('');
    const handlePw = (e) => {
        // console.log('첫번쩨');
        const newPw = e.target.value.slice(0, 16);

        if (newPw.length <= 7 || newPw.length > 16) {
            setPwMessage('8자~16자로 입력해주세요.;');
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


    return (

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
                        <input className="input_box"
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
                            placeholder="&#64;까지 정확하게 입력해주세요." required />

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
                <th>비밀번호<span className="point_color">&#42;</span></th>
                <td>
                    <label>
                        <input className="input_box" type="password"
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
                            required />
                    </label>
                    <div>
                        <span>{pwMessage}</span>
                    </div>
                </td>
            </tr>

            <tr>
                <th>비밀번호 확인<span className="point_color">&#42;</span></th>
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
                            required />
                    </label>
                    <div>
                        <span>{secondPwMessage}</span>
                    </div>
                </td>
            </tr>

            <tr>
                <th>이름<span className="point_color">&#42;</span></th>
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
                <th id="last_input_box">이벤트 정보<span className="point_color">&#42;</span></th>
                <td>
                    <label>
                        <input type="radio" name="event_info" value="reception" required/> 수신
                    </label>
                    <label>
                        <input type="radio" name="event_info" value=" no_reception" required /> 비수신
                    </label>
                </td>
            </tr>
        </table>

    );
}

export default JoinForm;