import React, { useState } from 'react'
import '../../static/form.scss';

const Form = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    function submitFormHandler(event) {
        //Fetch API ready
        console.log(`${loginData.username}: ${loginData.password}`)
    }

    function usernameHandler(event) {
        setLoginData({
            username: event.target.value,
            password: loginData.password
        })
    }

    function passwordHandler(event) {
        setLoginData({
            username: loginData.username,
            password: event.target.value
        })
    }


    return (
        <>
            <input onChange = {usernameHandler} value = {loginData.username} className = "username-input-field" type="text" placeholder="Username" />
            <input onChange = {passwordHandler} value = {loginData.password} className = "password-input-field" type="password" placeholder= "Password"/>
            <input onClick = {submitFormHandler} className = "login-form-submit-btn" type="submit" value="Login"/>
        </>
    )
}

export default Form;
