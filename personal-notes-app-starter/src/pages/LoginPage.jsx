import React from "react";
import LoginInput from "../components/LoginInput";
import {Link} from "react-router-dom";
import {login} from "../utils/network-data";
import PropTypes from "prop-types";


function LoginPage({loginSuccess}) {

    async function onLoginForm({email, password}) {

        const {error, data} = await login({email, password});

        if (!error) {
            loginSuccess(data);
        }
    }
    return (
        <section>
            <h2>Yuk, login untuk menggunakan aplikasi.</h2>
            <LoginInput login={onLoginForm}/>
            <p>
                Belum punya akun?
                <Link to='/register'>
                    Daftar Disini
                </Link>
            </p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired
}

export default LoginPage;