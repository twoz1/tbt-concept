import "../../styles/members/Join.css";
import axios from "axios";
import useScrollToTop from '../customHooks/useScrollToTop';
import React, { useEffect, useState } from 'react';
import navigateTo from "../config/navigateTo";


const Password = () => {

    useScrollToTop();


    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    const [pageState, setPageState] = useState(false);
    const [eventCheck, setEventCheck] = useState(loginUser?.user_event_check || 'N'); // 초기값 설정
    console.log(loginUser);


    const [pW, setPw] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [pWValid, setPwValid] = useState(false);

    const [secondPw, setSecondPw] = useState('');
    const [secondPwMessage, setSecondPwMessage] = useState('');
    const [secondPwValid, setSecondPwValid] = useState(false);
    const special = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

    useEffect(() => {

        if (loginUser == null) {
            alert("로그인 후 이용해주세요.");
            navigateTo("/");
        } else {
            setPageState(true);
        }
    }, []);

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



    // ------------------------------------------------------------------------

    console.log("아이디 " + loginUser.user_id + ", 비번 " + pW);

    const clickUpdate = (e) => {
        e.preventDefault();
        axios
            .post('/user/pwUpdate', {
                user_id: loginUser.user_id,
                user_pw: pW,

            })
            .then((response) => {
                console.log(response.data);
                if (response.data == "성공") {
                    alert("수정이 완료되었습니다.");
                    sessionStorage.setItem("loginUser", null);
                    navigateTo("/");
                } else {
                    alert("수정에 실패했습니다.");
                }

                console.log(`** checkdata 서버연결 성공 => ${response.data}`);
            }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
            });
    }

    const handleEventCheckChange = (value) => {
        setEventCheck(value);
    }

    return (pageState && (
        <div className="Join">
            <div className="center m_c">

                <div className="title_route">
                    <h2><strong>비밀번호수정</strong></h2>
                    <ul>
                        <li>Mypage</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>Update</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>Password</li>
                    </ul>
                </div>

                <form action="/user/uUpdate" method="post" onSubmit={e => { clickUpdate(e) }}>
                    {/* <form action="/user/uUpdate" method="post" > */}
                    <div className="required_entry">
                        <p>필수 입력항목 <span className="point_color">&#42;</span></p>
                    </div>

                    {/* =============================================================================================================================================== */}
                    <table className='join_table'>
                        <tr id="sale_coupon">
                            <td colspan="2">
                                <strong>회원으로 가입하시면 즉시 사용가능한 10&#37; 할인쿠폰을 드립니다. </strong>
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
                    </table>
                    <div className="join_button">
                        <button type="reset">초기화</button>
                        <button type="submit">수정하기</button>
                    </div>


                </form>
            </div >
        </div >
    ));






}
export default Password;