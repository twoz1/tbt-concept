import "../../styles/members/Join.css";
import "./components/JoinForm";
import JoinForm from "./components/JoinForm";
import JoinCheckbox from "./components/JoinCheckbox";
// import JoinBtn from "./components/JoinBtn";
import { useState } from "react";
const Join = () => {

    return (
        <div className="Join">
            <div className="center m_c">

                <div className="title_route">
                    <h2><strong>JOIN</strong></h2>
                    <ul>
                        <li>HOME</li>
                        <li>&nbsp;&gt;&nbsp;</li>
                        <li>JOIN</li>
                    </ul>
                </div>

                <form action="" method="post">
                    <div className="required_entry">
                        <p>필수 입력항목<span className="point_color">&#42;</span></p>
                    </div>

                    {/* =============================================================================================================================================== */}
                    <JoinForm></JoinForm>
                    {/* ================================================================================================================================================ */}
                    <JoinCheckbox></JoinCheckbox>
                    {/* ================================================================================================================================================ */}

                    <div className="join_button">
                        <button>취소</button>
                        <button>확인</button>
                    </div>
                    
                    {/* ================================================================================================================================================ */}
                </form>
            </div>
        </div>
    );
}
export default Join;