import React from "react";
import PropTypes from "prop-types";
import { useInput } from "../hooks/useInput";
import { login } from "../utils/network-data";

function LoginInput( {login} ) {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    async function onSubmitHandler(event){
        event.preventDefault();

        await login({
            email: email,
            password: password,
        })
    }
    return (
        <form className="input-login" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Masukkan Email Kamu"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Masukkan Password Kamu"/>
            <button>Login</button>
        </form>
    );
}

LoginInput.propTypes ={
    login : PropTypes.func.isRequired,
}

export default LoginInput;