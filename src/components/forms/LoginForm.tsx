import React, {useContext, useState} from 'react';
import {Stack} from "@mui/material";
import AuthService from "../../services/AuthService";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {paths} from "../../routing/routes";
import Loading from "../common/Loading";

const LoginForm = () => {
    const router = useNavigate();
    const {dashboardStore} = useContext(Context);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(){
        await dashboardStore.login(email,password);
        console.log('submit');
        router(paths.ADMIN_ROUTE);
    }

    if(dashboardStore.isLoading){
        return (
            <Loading/>
        );
    }

    return (
        <div>
            <Stack>
                <div className="form__title">Вход</div>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="input-text" placeholder="Email"/>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="input-text" placeholder="Password"/>
                <input onClick={submit} type="submit" className="form__submit" value="Войти"/>
            </Stack>
        </div>
    );
};

export default observer(LoginForm);