import React from 'react'
import Form from './Login/Form';
import '../static/login.scss';

const Login = () => {
    return (
        <div className = "login-component-container">
            <h1 className = "login-title"> Login. </h1>
            <Form />
        </div>
    )
}

export default Login;
