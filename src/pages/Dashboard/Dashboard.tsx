import React, {useContext, useEffect, useState} from 'react';
import Sidebar from "./sections/Sidebar";
import NewsContent from "./sections/NewsContent";
import ArticlesContent from "./sections/ArticlesContent";
import FeedContent from "./sections/FeedContent";
import CourseContent from "./sections/CourseContent";
import AdvantageContent from "./sections/AdvantageContent";
import {Context} from '../../index';
import {observer} from "mobx-react-lite";
import InformContent from "./sections/InformContent";
import Loading from "../../components/common/Loading";
import { useNavigate} from "react-router-dom";
import {paths} from "../../routing/routes";


const DashboardContents = [
    <FeedContent/>,
    <NewsContent/>,
    <ArticlesContent/>,
    <CourseContent/>,
    <AdvantageContent/>,
    <InformContent/>
];

const Dashboard = () => {
    const router = useNavigate();
    const {dashboardStore} = useContext(Context);

    function switchContent(id:number){
        dashboardStore.setDashboardContentIndex(id);
    }

    async function logoutHandler(){
        await dashboardStore.logout();
        router(paths.LANDING_ROUTE);
        dashboardStore.setDashboardContentIndex(0);
    }

    useEffect(()=>{
        if (!dashboardStore.isAuth) {
            router(paths.LOGIN_ROUTE);
        }
    },[])


    return (
        <div className={'dash_main'}>
            <Sidebar logoutHandler={logoutHandler} switchContent={switchContent}/>
            {DashboardContents[dashboardStore.dashboardContentIndex]}
        </div>
    );
};

export default observer(Dashboard);