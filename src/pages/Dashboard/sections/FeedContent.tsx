import React, {useContext, useEffect} from 'react';
import DashHeader from "../../../components/partials/DashHeader";
import DashLayout from "../../../components/common/DashLayout";
import FeedList from "../../../components/partials/lists/FeedList";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import Loading from "../../../components/common/Loading";

const FeedContent = () => {
    const {dashboardStore} = useContext(Context);

    useEffect(()=>{
        fetchFeeds();
    },[])

    async function fetchFeeds(){
        await dashboardStore.getFeedbacks();
    }

    async function remove(id?:number){
        if(id) await dashboardStore.deleteFeedback(id);
    }

    return (
        <DashLayout>
            <DashHeader title={"Завки"}/>
            {dashboardStore.isLoading?<Loading/>:
                <div className={'content_block'}>
                    <FeedList deleteHandler={remove} feedbacks={dashboardStore.feedbacks}/>
                </div>
            }
        </DashLayout>
    );
};

export default observer(FeedContent);