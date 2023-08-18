import { useState } from 'react';

const LogPass = () => {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const special = /[!-*.@]/gi;
    // ------------------------------------
    const handleEmail = (e) => {
        setEmail(e.target.value);

        if (special.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    // ------------------------------------------------

    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [error, setError] = useState('');
    const handlePassword = (e) => {
        setPassword(e.target.value);

        if (password.length <= 7 || password.length > 16) {
            setError('8자~ 16자로 입력해주세요.');
            setPasswordValid(false);
        } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password) || !special.test(password)) {
            setError('영문, 숫자, 특수문자를 모두 사용하여 입력하세요.');
            setPasswordValid(false);
        } else {
            setError('사용 가능합니다.');
            setPasswordValid(true);
        }
    };
    return (
        <div>
            <div className="login_wrap">
                <form action="#" className="login" method="post" name="login">
                    <table className="log_input">
                        <tr>
                            <th colspan="1">아이디</th>
                            <td>
                                <label>
                                    <input value={email} onChange={handleEmail} placeholder="&#64;까지 정확하게 입력해주세요." required />
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <th colspan="1">비밀번호</th>
                            <td>
                                <label>
                                    <input type="password" value={password} onChange={handlePassword} maxLength="16" minLength="8" placeholder="영문+숫자 조합 8~16자리." required />
                                </label>
                            </td>
                        </tr>
                    </table>
                    <button>로그인</button>
                </form>
                <div className="remember">
                    <input className="user_remember" type="radio" />
                    아이디&nbsp;저장
                    <a className="join" href="../join/join.html">
                        회원가입&nbsp;바로가기
                    </a>
                </div>
                <div className="error_message">
                    {0 < email.length && email.length < 5 && <span>아이디를 5자 이상으로 입력해주세요.</span>}

                    {email.length >= 5 && !emailValid && <span>아이디는 이메일 형식으로 입력해주세요.</span>}

                    <span>{error}</span>
                </div>
            </div>
        </div>
    );
};
export default LogPass;
