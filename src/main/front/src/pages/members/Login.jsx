import '../../styles/members/Login.css';
import Sns from './components/Login/Sns';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../customHooks/useScrollToTop';
const Login = () => {
    useScrollToTop();

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


        if (matchedCredential) {
            setLoggedIn(true);
            setEmailMessage('');
            window.location.href = '/'; // 로그인 성공 시 페이지 이동
        } else {
            setLoggedIn(false);
            setEmailMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    };
    return (
        <div>
            <div className="center m_c">
                <section className="container">
                    <div>
                        <div className="title_route">
                            <h2>
                                <strong>Login</strong>
                            </h2>
                        </div>
                    </div>
                    <hr />
                    <div className="member_log">
                        <div className="login_wrap">
                            <form action="#" className="login" name="login">
                                <table className="log_input">
                                    <tbody>
                                        <tr>
                                            <th colSpan="1">아이디</th>
                                            <td>
                                                <label>
                                                    <input
                                                        name="user_id"
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
                                                        name="user_pw"
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
                    </div>
                    <hr />
                    <Sns></Sns>
                </section>
            </div>
        </div>
    );
};

export default Login;
