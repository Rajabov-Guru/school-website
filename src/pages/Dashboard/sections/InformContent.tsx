import React, {useContext, useEffect} from 'react';
import DashHeader from "../../../components/partials/DashHeader";
import DashLayout from "../../../components/common/DashLayout";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import Button from "@mui/material/Button";
import FormModal from "../../../components/partials/FormModal";
import useModal from "../../../hooks/useModal";
import EditInform from "../../../components/forms/EditInform";
import {Divider, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {IInform} from "../../../types/mainTypes";

const InformContent = () => {
    const {dashboardStore} = useContext(Context);
    const {open, handleOpen, handleClose} = useModal(false);

    useEffect(()=>{
        fetchInform();
    },[])

    async function fetchInform(){
        await dashboardStore.getInform();
    }

    async function handleSubmit(data:FormData){
        if(dashboardStore.admin) data.append('adminId',dashboardStore.admin?.id.toString());
        await  dashboardStore.updateInform(data);
    }

    return (
        <DashLayout>
            <DashHeader title={"Общая информация"}/>
            <div className={'content_block'}>
                <Stack spacing={3} sx={{color:'white'}}>
                    <Stack spacing={2} >
                        <Typography variant={'h6'} sx={{textTransform:'uppercase'}}>
                            Название школы:
                        </Typography>
                        <Typography variant={'h5'}>
                            {dashboardStore.inform.main_title}
                        </Typography>
                    </Stack>
                    <Divider/>
                    <Stack spacing={2} >
                        <Typography variant={'h6'} sx={{textTransform:'uppercase'}}>
                            Слоган школы:
                        </Typography>
                        <Typography variant={'h5'}>
                            "{dashboardStore.inform.keyword}"
                        </Typography>
                    </Stack>
                    <Divider/>
                    <Stack spacing={2}>
                        <Typography variant={'h6'} sx={{textTransform:'uppercase'}}>
                            Блок "О нас"
                        </Typography>
                        <Typography variant={'h5'}>
                            {dashboardStore.inform.about_us}
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} sx={{justifyContent:'flex-end'}}>
                        <Button color='success' variant='contained' onClick={handleOpen}>Отредактировать</Button>
                    </Stack>
                </Stack>

            </div>
            <FormModal open={open} handleClose={handleClose}>
                <EditInform handleSubmit={handleSubmit} inform={dashboardStore.inform} handleAfter={handleClose}/>
            </FormModal>
        </DashLayout>
    );
};

export default observer(InformContent);