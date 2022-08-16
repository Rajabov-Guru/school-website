import React, {FC, useState} from 'react';
import {IForm, IInform} from "../../types/mainTypes";
import {Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface IEditInform extends IForm{
    inform:IInform;
    handleSubmit:(data:FormData)=>void;
}

const EditInform:FC<IEditInform> = ({inform,handleAfter,handleSubmit}) => {
    const [title, setTitle] = useState(inform.main_title);
    const [keyword, setKeyWord] = useState(inform.keyword);
    const [about_us, setAboutUs] = useState(inform.about_us);

    function cancel(){
        handleAfter();
    }

    function submit(){
        const formData = new FormData();
        if(inform && inform.id) formData.append('id', inform.id.toString());
        formData.append('main_title', title);
        formData.append('keyword', keyword);
        formData.append('about_us', about_us);
        handleSubmit(formData);
        handleAfter();
    }

    return (
        <Stack spacing={2}>
            <Stack spacing={3}>
                <Typography variant={'h6'}>Изменить общие данные</Typography>
                <TextField
                    id="title"
                    label="Название школы"
                    variant="outlined"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>

                <TextField
                    id="keyword"
                    label="Слоган"
                    variant="outlined"
                    value={keyword}
                    onChange={(e)=>setKeyWord(e.target.value)}/>

                <TextField
                    id="aboutus"
                    label="О нас"
                    variant="outlined"
                    value={about_us}
                    onChange={(e)=>setAboutUs(e.target.value)}/>
            </Stack>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
                <Button onClick={cancel} variant={'contained'}>Отмена</Button>
                <Button onClick={submit} variant={'contained'}>Добавить</Button>
            </Stack>
        </Stack>
    );
};

export default EditInform;