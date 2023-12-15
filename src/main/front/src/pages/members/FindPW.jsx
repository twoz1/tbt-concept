import "../../styles/members/Join.css";
import useScrollToTop from "../customHooks/useScrollToTop";
import navigateTo from "../config/navigateTo";
import axios from "axios";
import React, { useState } from 'react';

const FindPW = () => {
    useScrollToTop();

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');

    const findingPW = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(userName)


        axios.post('/user/uFindPW', {
            user_id: email,
            user_name: userName,
        }).then((response) => {
            console.log(response.data);

            if (response.data !== null) {
                alert(response.data);
                navigateTo("/login");
            } else {
                alert(response.data);
            }

        }).catch((err) => {
            alert(`[checkdata 서버연결 실패] => ${err.message}`);
        })
    }



    return (
        <div className="Join">
            <div className="center m_c">
                <div className="title_route">
                    <h2><strong>Find Password</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>Find Password</li>
                    </ul>
                </div>

                <form action="/user/uFindPW" method="post" onSubmit={e => { findingPW(e) }}>
                    <div className="required_entry">
                        <p>필수 입력항목 <span className="point_color">&#42;</span></p>
                    </div>

                    {/* =============================================================================================================================================== */}
                    <table className='join_table'>
                        <tr id="sale_coupon">
                            <td colspan={2}>
                                <strong>가입한 이메일 아이디와 이름을 정확하게 입력해주세요. </strong>
                            </td>
                        </tr>

                        <tr>
                            <th>이메일 아이디 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box"
                                    id="user_id"
                                    name="user_id"
                                    placeholder="&#64;까지 정확하게 입력해주세요."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </td>
                        </tr>

                        <tr>
                            <th>이름 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box" type="text"
                                    name="user_name"
                                    placeholder="예&#41;홍길동"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                            </td>
                        </tr>
                    </table>

                    {/* ================================================================================================================================================ */}

                    <div className="join_button">
                        <button type="reset">초기화</button>
                        <button>비밀번호 찾기</button>
                    </div>
                </form>
            </div >
        </div >
    );
}
export default FindPW;