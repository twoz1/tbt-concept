import { useEffect } from 'react';
const Sns = () => {
    const Rest_api_key = 'REST API KEY'; //REST API KEY
    const redirect_uri = 'http://localhost:3000/auth'; //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    const handleLogin = () => {
        window.location.href = kakaoURL;
    };
    // --------------------------------------------- KAKAO

    // --------------------------------------------- GOOGLE
    useEffect(() => {
        let naverLogin = new window.naver.LoginWithNaverId({
            clientId: 'Ow51S9QIj9Op03c56Ssu',
            callbackUrl: `http://localhost:3000`,
            loginButton: { color: 'green', type: 1, height: '50' },
        });
        naverLogin.init();
        naverLogin.logout();
        try {
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log(naverLogin.user);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    // --------------------------------------------- NAVER
    return (
        <div>
            <div className="new_join_wrap">
                <div className="join_sns">
                    <div>
                        <p className="join_sns_tilte">SNS계정으로&nbsp;TBT컨셉을&nbsp;이용해&nbsp;보세요.</p>
                    </div>
                    <div className="join_opt">
                        <ul>
                            <li className="naver">
                                {/* <a href="https://www.naver.com/"> */}
                                <button id="naverIdLogin">
                                    <img src={require('../../../../images/naver.png')} className='naver'/>
                                </button>
                                {/* </a> */}
                            </li>
                            <li className="kakao">
                                {/* <a href="https://www.kakaocorp.com/page/"> */}
                                <button onClick={handleLogin}>
                                    <img src={require('../../../../images/kakao.jpeg')} className='kakao'/>
                                </button>
                                {/* </a> */}
                            </li>
                            <li className="insta">
                                <a href="https://www.instagram.com/">
                                    <img src={require('../../../../images/insta.jpeg')} className='insta'/>
                                </a>
                            </li>
                            <li className="google">
                                {/* <a href="https://www.google.co.kr/?hl=ko"> */}
                                <button>
                                    <img src={require('../../../../images/google.jpeg')} className='google'/>
                                </button>
                                {/* </a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sns;
