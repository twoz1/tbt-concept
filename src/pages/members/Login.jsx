import '../../styles/members/Login.css';
import Title from './Compo/Title'
import LogPass from './Compo/LogPass'
import Sns from './Compo/Sns'
import { useState } from "react";
const Login = () => {
    return (
        <div>
            <div className="center m_c">
                <section className="container">
                    <Title></Title>
                    <hr />
                    <div className="member_log">
                        <LogPass></LogPass>
                    </div>
                    <hr />
                    <Sns></Sns>
                </section>
            </div>
        </div>
    );
};

export default Login;
