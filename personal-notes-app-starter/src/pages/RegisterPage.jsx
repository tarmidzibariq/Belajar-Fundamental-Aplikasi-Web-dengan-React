import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";

function RegisterPage(){
    const navigate = useNavigate();

    async function onRegisterForm(user) {
        const {error} = await register(user);
        if (!error) {
            navigate('/');
        }
    }
    return(
        <section>
            <h2>Isi form untuk mendaftar akun.</h2>
            <RegisterInput register={onRegisterForm}/>
            <p>
                Sudah punya akun? 
                <Link to='/'>
                    Login Disini
                </Link>
            </p>
        </section>
    );
}

export default RegisterPage;