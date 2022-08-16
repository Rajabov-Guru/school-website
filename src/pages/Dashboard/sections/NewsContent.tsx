import React, {useContext, useEffect, useState} from 'react';
import DashHeader from "../../../components/partials/DashHeader";
import NewsList from "../../../components/partials/lists/NewsList";
import DashLayout from "../../../components/common/DashLayout";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import useModal from "../../../hooks/useModal";
import {IArticle, INews} from "../../../types/mainTypes";
import AddArticleForm from "../../../components/forms/AddArticleForm";
import FormModal from "../../../components/partials/FormModal";
import AddNewsForm from "../../../components/forms/AddNewsForm";
import Loading from "../../../components/common/Loading";

const NewsContent = () => {
    const {dashboardStore} = useContext(Context);
    const {open, handleOpen, handleClose} = useModal(false);
    const [targetNews,setTargetNews]  = useState<INews | undefined>(undefined);
    function openForm(news?:INews){
        if(news){
            setTargetNews(news);
        }else setTargetNews(undefined);
        handleOpen();
    }

    useEffect(()=>{
        fetchNews();
    },[])

    async function fetchNews(){
        await dashboardStore.getNews();
    }



    async function handleSubmit(data:FormData, flag?:boolean){
        if(dashboardStore.admin) data.append('adminId',dashboardStore.admin?.id.toString());
        if(!flag) await dashboardStore.addNews(data);
        else{
            await dashboardStore.updateNews(data);
        }
    }

    async function remove(id?:number){
        if(id) await dashboardStore.deleteNews(id);
    }



    return (
        <DashLayout>
            <DashHeader title={"Список новостей"} addButton handleAddButton={openForm}/>
            {dashboardStore.isLoading? <Loading/>:
                <div className={'content_block'}>
                    <NewsList editHandler={openForm} deleteHandler={remove} newsItems={dashboardStore.news} fordDashboard/>
                </div>
            }
            <FormModal open={open} handleClose={handleClose}>
                <AddNewsForm handleSubmit={handleSubmit} news={targetNews} handleAfter={handleClose}/>
            </FormModal>
        </DashLayout>
    );
};

export default observer(NewsContent);