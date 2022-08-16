import React, {FC, useContext, useEffect} from 'react';
import Layout from "../../components/common/Layout";
import NewsCard from "../../components/partials/cards/NewsCard";
import Container from "@mui/material/Container";
import {Stack} from "@mui/material";
import {INews} from "../../types/mainTypes";
import NewsList from "../../components/partials/lists/NewsList";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Loading from "../../components/common/Loading";



const News:FC = () => {
    const {mainStore} = useContext(Context);

    useEffect(()=>{
        fetchNews();
    },[])

    async function fetchNews(){
        await mainStore.getNews();
    }

    return (
        <Layout isLanding={false}>
            <p className={'about_title'}>Новости</p>
            <Container>
                {mainStore.isLoading?<Loading/>:
                    <NewsList newsItems={mainStore.newsItems}/>
                }
            </Container>
        </Layout>
    );
};

export default observer(News);