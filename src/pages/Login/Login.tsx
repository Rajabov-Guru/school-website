import React from 'react';
import {Stack} from "@mui/material";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
    return (
        <div className={'login-main centered'}>
            <LoginForm/>
        </div>
    );
};

export default Login;