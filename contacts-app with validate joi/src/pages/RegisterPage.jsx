import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import {register} from '../utils/api';
import {useNavigate} from 'react-router-dom';

function RegisterPage() {
    
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        
        const {error} = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <section className='register-page'>
            <h2>Gak perlu serius-serius ya isinya ...</h2>
            <RegisterInput register={onRegisterHandler}/>
            <p>Kembali ke
                <Link to="/">Masuk</Link>
            </p>
        </section>
    )
}

export default RegisterPage;