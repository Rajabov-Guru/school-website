import React, {useContext, useEffect} from 'react';
import Container from "@mui/material/Container";
import {Stack} from "@mui/material";
import Layout from "../../components/common/Layout";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ArticleCard from "../../components/partials/cards/ArticleCard";
import ArticleList from "../../components/partials/lists/ArticleList";
import Loading from "../../components/common/Loading";

const Articles = () => {
    const {mainStore} = useContext(Context);

    useEffect(()=>{
        fetchArticles();
    },[])

    async function fetchArticles(){
        await mainStore.getArticles();
    }

    return (
        <Layout isLanding={false}>
            <p className={'about_title'}>Статьи</p>
            <Container>
                {mainStore.isLoading?<Loading/>:
                    <ArticleList articles={mainStore.articles}/>
                }
            </Container>
        </Layout>
    );
};

export default Articles;