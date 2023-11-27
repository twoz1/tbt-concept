import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const virtualCredentials = [
    {
    email: 'user@naver.com',
    password: 'password123'
},
    {
    email: 'user1@naver.com',
    password: 'password123'
},
    {
    email: 'user3@naver.com',
    password: 'password123'
},
];

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');


    const handleCredentialsChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const changeButton = (event) => {
        event.preventDefault();
    
        let matchedCredential = false;
    
        for (const credential of virtualCredentials) {
            if (
                credentials.email === credential.email &&
                credentials.password === credential.password
            ) {
                matchedCredential = true;
                break; // 일치하는 경우 반복문 종료
            }
        }
    
        if (matchedCredential) {
            setLoggedIn(true);
            setEmailMessage('');
            window.location.href = '/'  ; // 로그인 성공 시 페이지 이동
        } else {
            setLoggedIn(false);
            setEmailMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <div className="login_wrap">
            <form action="#" className="login" name="login">
                <table className="log_input">
                    <tbody>
                        <tr>
                            <th colSpan="1">아이디</th>
                            <td>
                                <label>
                                    <input
                                        name="email"
                                        value={credentials.email}
                                        onChange={handleCredentialsChange}
                                        placeholder="&#64;까지 정확하게 입력해주세요."
                                        required
                                    />
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <th colSpan="1">비밀번호</th>
                            <td>
                                <label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={credentials.password}
                                        maxLength="16"
                                        minLength="8"
                                        placeholder="영문+숫자 조합 8~16자리."
                                        onChange={handleCredentialsChange}
                                        required
                                    />
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={changeButton}
                    onKeyDown={(e) => {
                        if (
                            credentials.email === virtualCredentials.email &&
                            credentials.password === virtualCredentials.password
                        ) {
                            if (e.key === 'Enter') {
                                window.location.href = '/';
                            }
                        }
                    }}
                >
                    로그인
                </button>
            </form>
            <div className="remember">
                <input className="user_remember" type="checkbox" />
                아이디&nbsp;저장
                <Link to="/join" className="join">
                    회원가입&nbsp;바로가기
                </Link>
            </div>
            <div className="error_message">
                <span>{emailMessage}</span>
            </div>
        </div>
    );
}

export default Login;