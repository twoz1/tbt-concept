import "../../styles/members/Join.css";
import useScrollToTop from '../customHooks/useScrollToTop';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import navigateTo from "../config/navigateTo";

const Update = () => {

    const loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
    const [pageState, setPageState] = useState(false);
    const [eventCheck, setEventCheck] = useState(loginUser?.user_event_check || 'N'); // 초기값 설정
    console.log(loginUser);


    useEffect(() => {

        if (loginUser == null) {
            alert("로그인 후 이용해주세요.");
            navigateTo("/");
        } else {
            setPageState(true);
        }
    }, []);

    useScrollToTop();




    
    // ------------------------------------------------------------------------


    const clickUpdate = (e) => {
        e.preventDefault();
            axios
                .post('/user/uUpdate', {
                    user_id: document.getElementById('update_id').value,
                    user_name: document.getElementById('update_name').value,
                    user_rank: document.getElementById('update_rank').value,
                    user_pw: document.getElementById('update_pw').value,
                    user_birth: document.getElementById('update_birth').value,
                    // user_event_check: document.getElementById('update_event_check').value,
                    user_event_check: eventCheck,
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data == "성공") {
                        alert("수정이 완료되었습니다.");
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

    return ( pageState && (
        <div className="Join">
            <div className="center m_c">

                <div className="title_route">
                    <h2><strong>개인정보수정</strong></h2>
                    <ul>
                        <li>Mypage</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>Update</li>
                    </ul>
                </div>

                <form action="/user/uUpdate" method="post" onSubmit={e => { clickUpdate(e) }}>
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
                            <th>이메일 아이디 <span className="point_color">&#42;</span></th>
                            <td>{loginUser.user_id}
                                <input type="hidden" id="update_id" value={loginUser.user_id}/>
                                <input type="hidden" id="update_birth" value={loginUser.user_birth} />
                                <input type="hidden" id="update_rank" value={loginUser.user_rank} />
                            </td>

                        </tr>
                        <tr>
                            <th>사용자 이름 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box"
                                    id="update_name"
                                    
                                    placeholder={loginUser.user_name}/>
                               
                            </td>

                        </tr>

                        <tr>
                            <th>비밀번호 <span className="point_color">&#42;</span></th>
                            <td>
                                <input className="input_box" type="password" id="update_pw" value={loginUser.user_pw}  required readOnly />
                            </td>
                        </tr>


                        <tr>
                            <th id="last_input_box">이벤트 정보&#40;이메일&#41; <span className="point_color">&#42;</span></th>
                            <td>
                                <label className='event_info_radio'>
                                    {/* <input type="radio" id="update_event_check" value="Y"
                                         required />  수신 */}
                                         <input
                                        type="radio"
                                        id="update_event_check_Y"
                                        value="Y"
                                        checked={eventCheck === "Y"}
                                        onChange={() => handleEventCheckChange("Y")}
                                        required
                                    />
                                    수신
                                </label>

                                <label>
                                    {/* <input type="radio" id="update_event_check" value="N"
                                        required /> 비수신 */}
                                    <input
                                        type="radio"
                                        id="update_event_check_N"
                                        value="N"
                                        checked={eventCheck === "N"}
                                        onChange={() => handleEventCheckChange("N")}
                                        required
                                    />
                                    비수신
                                </label>
                                <div>
                                    <p>회원정보 및 구매 정보, 주요 정책 안내는 수신 여부와 관계 없이 발송됩니다.</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div className="join_button">
                        <button type="reset">초기화</button>
                        <button type="submit" >수정하기</button>
                    </div>
                  

                </form>
            </div >
        </div >
    ));
}
export default Update;