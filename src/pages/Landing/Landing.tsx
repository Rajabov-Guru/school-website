import React, {useContext, useEffect, useRef} from 'react';
import StartSection from "./sections/Start";
import MainBackground from '../../assets/MainBackground.png';
import AboutBackGround from '../../assets/section-bg.png';
import AdvantagesBackground from '../../assets/robo-bg.jpg';
import Board from '../../assets/board.png';
import About from "./sections/About";
import Advantages from "./sections/Advantages";
import Motivation from "./sections/Motivation";
import Courses from "./sections/Courses";
import Teachers from "./sections/Teachers";
import Feedback from "./sections/Feedback";
import Layout from "../../components/common/Layout";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {IFeedback} from "../../types/mainTypes";

const Landing = () => {
    const {mainStore} = useContext(Context);
    const myRef = useRef();

    const executeScroll = () => {
        // @ts-ignore
        myRef.current.scrollIntoView();
        console.log("scroll")
    }

    useEffect(()=>{
        fetchAll();
    },[])

    async function handleFeedback(data:IFeedback){
        await mainStore.sendFeedback(data);
    }

    async function fetchAll(){
        await mainStore.getInform();
        await mainStore.getCourses();
        await mainStore.getAdvantages();
    }



    return (
        <Layout isLanding={true}>
            <StartSection
                url={MainBackground}
                title={mainStore.inform.main_title}
                keyword={mainStore.inform.keyword}/>
            <About url={AboutBackGround}
                   repeat
                   text={mainStore.inform.about_us}/>
            <Advantages
                url={AdvantagesBackground}
                advantages={mainStore.advantages}/>
            <Motivation url={Board}/>
            <Courses
                url={AboutBackGround}
                repeat
                courses={mainStore.courses}/>
            <Teachers/>
            <Feedback
                isLoading={mainStore.isLoading}
                handleSubmit={handleFeedback}
                courses={mainStore.courses}
                url={AboutBackGround}
                repeat/>
        </Layout>
    );
};

export default observer(Landing);