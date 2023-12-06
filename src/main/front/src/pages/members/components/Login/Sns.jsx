import { useEffect } from 'react';
const Sns = () => {
    const Rest_api_key = 'eaa193bc4b12c52ab159d0c57e094b2d'; //REST API KEY
    const redirect_uri = 'http://localhost:3000/oauth/callback/kakao'; //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    const handleLogin = () => {
        window.location.href = kakaoURL;
    };

    // const KAKAO_REST_API_KEY = 'eaa193bc4b12c52ab159d0c57e094b2d';
    // const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'; 
    // const KakaoLoginAPI = `https://kauth.kakao.com/oauth/authorize?
    //     lient_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    // const openKakaoLogin = () => {
    //     window.open(KakaoLoginAPI, "_self");
    //   };
    // // --------------------------------------------- KAKAO




    // --------------------------------------------- GOOGLE

    // useEffect(() => {
    //     let naverLogin = new window.naver.LoginWithNaverId({
    //         clientId: 'Ow51S9QIj9Op03c56Ssu',
    //         callbackUrl: `http://localhost:3000`,
    //         loginButton: { color: 'green', type: 1, height: '50' },
    //     });
    //     naverLogin.init();
    //     naverLogin.logout();
    //     try {
    //         naverLogin.getLoginStatus((status) => {
    //             if (status) {
    //                 console.log(naverLogin.user);
    //             }
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, []);

  
    const handle = {
            clickNaverLogin: () => {
                const clientId = 'Ow51S9QIj9Op03c56Ssu'; // 앱 키 중 Client ID
                const redirectUri = 'http://localhost:3000'; // 등록한 Callback URL
    
                window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
            },
        };

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
                                <button id="naverIdLogin" onClick={handle.clickNaverLogin}>
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
