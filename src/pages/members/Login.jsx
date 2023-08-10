import '../../styles/members/Login.css'
const Login = () => {
    return (
        <div>
            <div className="center m_c">
                <section className="container">
                    <div className="title_route">
                        <h2>
                            <strong>Login</strong>
                        </h2>
                    </div>
                    <hr />
                    <div className="member_log">
                        <div className="log_cont">
                            <div className="login_wrap">
                                <form action="#" className="login" method="post" name="login">
                                    <table className="log_input">
                                        <tr>
                                            <th colspan="1">아이디</th>
                                            <td>
                                                <input type="email" placeholder="이메일 아이디를 @까지 정확하게 입력하세요." required />
                                            </td>
                                        </tr>

                                        <tr>
                                            <th colspan="1">비밀번호</th>
                                            <td>
                                                {' '}
                                                <input type="text" id="password" name="password" maxlength="16" minlength="8" placeholder="영문+숫자 조합 8~16자리." required />
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
                            </div>
                            <hr />
                            <div className="new_join_wrap">
                                <div className="join_sns">
                                    <div>
                                        <p className="join_sns_tilte">SNS계정으로&nbsp;TBT컨셉을&nbsp;이용해&nbsp;보세요.</p>
                                    </div>
                                    <div className="join_opt">
                                        <ul>
                                            <li className="naver">
                                                <a href="https://www.naver.com/">
                                                    <img src={require("../../images/naver.png")} alt="naver" />
                                                </a>
                                            </li>
                                            <li className="kakao">
                                                <a href="https://www.kakaocorp.com/page/">
                                                    <img src={require("../../images/kakao.jpeg")} alt="kakao" />
                                                </a>
                                            </li>
                                            <li className="insta">
                                                <a href="https://www.instagram.com/">
                                                    <img src={require("../../images/insta.jpeg")}alt="instagram" />
                                                </a>
                                            </li>
                                            <li className="google">google.jpeg
                                                <a href="https://www.google.co.kr/?hl=ko">
                                                    <img src={require("../../images/google.jpeg")} alt="google" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;