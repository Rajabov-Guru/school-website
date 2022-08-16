import React, {useContext, useEffect, useState} from 'react';
import DashHeader from "../../../components/partials/DashHeader";
import DashLayout from "../../../components/common/DashLayout";
import AdvantageList from "../../../components/partials/lists/AdvantageList";
import {Context} from '../../../index';
import {observer} from "mobx-react-lite";
import FormModal from "../../../components/partials/FormModal";
import useModal from "../../../hooks/useModal";
import {IAdvantage} from "../../../types/mainTypes";
import AddAdvantageForm from "../../../components/forms/AddAdvantageForm";
import Loading from "../../../components/common/Loading";

const AdvantageContent = () => {
    const {dashboardStore} = useContext(Context);
    const {open, handleOpen, handleClose} = useModal(false);
    const [targetAdvantage,setTargetAdvantage]  = useState<IAdvantage | undefined>(undefined);

    function openForm(advantage?:IAdvantage){
        if(advantage){
            setTargetAdvantage(advantage);
        }else setTargetAdvantage(undefined);
        handleOpen();
    }

    useEffect(()=>{
        fetchAdvantages();
    },[])

    async function fetchAdvantages(){
        await dashboardStore.getAdvantages();
    }

    async function handleSubmit(data:FormData, flag?:boolean){
        if(dashboardStore.admin) data.append('adminId',dashboardStore.admin?.id.toString());
        if(!flag) await dashboardStore.addAdvantage(data);
        else{
            await dashboardStore.updateAdvantage(data);
        }
    }

    async function remove(id?:number){
        if(id) await dashboardStore.deleteAdvantage(id);
    }



    return (
        <DashLayout>
            <DashHeader title={"Список преимуществ"} addButton handleAddButton={openForm}/>
            {dashboardStore.isLoading?<Loading/>:
                <div className={'content_block'}>
                    <AdvantageList editHandler={openForm} deleteHandler={remove} advantages={dashboardStore.advantages} fordDashboard/>
                </div>
            }
            <FormModal open={open} handleClose={handleClose}>
                <AddAdvantageForm handleSubmit={handleSubmit} advantage={targetAdvantage} handleAfter={handleClose}/>
            </FormModal>
        </DashLayout>
    );
};

export default observer(AdvantageContent);