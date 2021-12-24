import React from 'react';
import '../scss/UserLogin.scss';

import Login from './Auth-Component/login';
import Register from './Auth-Component/Register';

import '../scss/userRegister.scss'

const SignIn = ()=>(
    <div className="user-registration">
        <Login />
        <Register />
    </div>
)

export default SignIn