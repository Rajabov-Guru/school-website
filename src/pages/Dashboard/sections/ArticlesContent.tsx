import React, {useContext, useEffect, useState} from 'react';
import DashHeader from "../../../components/partials/DashHeader";
import DashLayout from "../../../components/common/DashLayout";
import ArticleList from "../../../components/partials/lists/ArticleList";
import {Context} from '../../../index';
import {observer} from "mobx-react-lite";
import useModal from "../../../hooks/useModal";
import { IArticle} from "../../../types/mainTypes";
import FormModal from "../../../components/partials/FormModal";
import AddArticleForm from "../../../components/forms/AddArticleForm";
import Loading from "../../../components/common/Loading";

const ArticlesContent = () => {
    const {dashboardStore} = useContext(Context);
    const {open, handleOpen, handleClose} = useModal(false);
    const [targetArticle,setTargetArticle]  = useState<IArticle | undefined>(undefined);

    function openForm(article?:IArticle){
        if(article){
            setTargetArticle(article);
        }else setTargetArticle(undefined);
        handleOpen();
    }

    useEffect(()=>{
        fetchArticles();
    },[])

    async function fetchArticles(){
        await dashboardStore.getArticles();
    }

    async function remove(id?:number){
        if(id) await dashboardStore.deleteArticle(id);
    }

    async function handleSubmit(data:FormData, flag?:boolean){
        if(dashboardStore.admin) data.append('adminId',dashboardStore.admin?.id.toString());
        if(!flag) await dashboardStore.addArticle(data);
        else{
            await dashboardStore.updateArticle(data);
        }
    }

    return (
        <DashLayout>
            <DashHeader title={"Список статей"} addButton handleAddButton={openForm}/>
            {dashboardStore.isLoading?<Loading/>:
                <div className={'content_block'}>
                    <ArticleList editHandler={openForm} deleteHandler={remove} articles={dashboardStore.articles} fordDashboard/>
                </div>
            }
            <FormModal open={open} handleClose={handleClose}>
                <AddArticleForm handleSubmit={handleSubmit} article={targetArticle} handleAfter={handleClose}/>
            </FormModal>
        </DashLayout>
    );
};

export default observer(ArticlesContent);