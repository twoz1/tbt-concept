import '../../styles/members/Login.css';
import Sns from './components/Login/Sns';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useScrollToTop from '../customHooks/useScrollToTop';
import navigateTo from '../config/navigateTo';
import { useDispatch } from 'react-redux';
import { setUser } from '../config/Configstore';


const Login = () => {
    useScrollToTop();

    const [credentials, setCredentials] = useState({
        user_id: '',
        user_pw: ''
    });

    const [emailMessage, setEmailMessage] = useState('');

    const dispatch = useDispatch();

    const handleCredentialsChange = (e) => {
        const { name, value } = e.target;
        setEmailMessage('');
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const changeButton = (e) => {
        e.preventDefault();

        axios
            .post('/user/uLogin', {
                user_id: credentials.user_id,
                user_pw: credentials.user_pw,
            })
            .then((response) => {

                if (response.data) {
                    setEmailMessage('');

                    // dispatch(setUser(response.data));
                    sessionStorage.setItem("loginUser", JSON.stringify(response.data));
                    navigateTo("/");
                } else {
                    setEmailMessage("아이디와 비밀번호가 일치하지 않습니다.");
                }

            }).catch((err) => {
                alert(`서버와의 통신에서 오류가 발생했습니다. => ${err.message}`);
            });

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
                            <form action="#" className="login" onSubmit={e => changeButton(e)}>
                                <table className="log_input">
                                    <tbody>
                                        <tr>
                                            <th colSpan="1">아이디</th>
                                            <td>
                                                <label>
                                                    <input
                                                        name="user_id"
                                                        value={credentials.user_id}
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
                                                        value={credentials.user_pw}
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
                                <button>로그인</button>
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
