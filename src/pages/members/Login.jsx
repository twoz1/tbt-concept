import '../../styles/members/Login.css';
import Title from './components/Login/Title';
import LogPass from './components/Login/LogPass';
import Sns from './components/Login/Sns';
import { useState } from 'react';
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
