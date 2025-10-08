import React from "react";
import PropTypes from "prop-types";
import {useInput} from "../hooks/useInput";

function RegisterInput({ register }) {
    const [name, handleNameChange] = useInput('');
    const [email, handleEmailChange ] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');

    async function onSubmitHandler(event){
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password tidak cocok');
            return;
        }

        await register({
            name : name,
            email : email,
            password : password,
        });
    }

    return (
        <form className="input-register" onSubmit={onSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name"/>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email"/>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password"/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm your password"/>
            <button>Register</button>
        </form>
    );
}
RegisterInput.propTypes ={
    register: PropTypes.func.isRequired
}

export default RegisterInput;