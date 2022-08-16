import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {IAdvantage, IForm} from "../../types/mainTypes";
import PhotoIcon from '@mui/icons-material/Photo';
import SendIcon from "@mui/icons-material/Send";

interface IAddAdvantage extends  IForm{
    advantage?:IAdvantage;
    handleSubmit:(data:FormData, flag?:boolean)=>void;
}


const AddAdvantageForm:FC<IAddAdvantage> = ({handleAfter,advantage,handleSubmit}) => {
    const [title, setTitle] = useState(advantage?advantage.title:'');
    const [description, setDescription] = useState(advantage?advantage.description:'');
    const [image, setImage] = useState<any>(null);

    function cancel(){
        handleAfter();
    }

    function submit(){
        const formData = new FormData();
        if(advantage && advantage.id) formData.append('id', advantage.id.toString());
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);
        handleSubmit(formData,advantage?true:false);
        handleAfter();
    }

    function selectFile(e:ChangeEvent<HTMLInputElement>){
        if(e?.target?.files) setImage(e.target.files[0]);
    }

    return (
        <Stack spacing={2}>
            <Stack spacing={3}>
                <Typography variant={'h6'}>Добавить преимущество</Typography>
                <TextField
                    id="title"
                    label="Загловок"
                    variant="outlined"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>

                <TextField
                    id="description"
                    label="Описание"
                    variant="outlined"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/>
                <Button variant="contained" color='success' component="label" endIcon={<PhotoIcon/>}>
                    Картинка
                    <input hidden accept="image/*" multiple type="file" onChange={selectFile}/>
                </Button>
            </Stack>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
                <Button onClick={cancel} variant={'contained'}>Отмена</Button>
                <Button onClick={submit} variant={'contained'}>Добавить</Button>
            </Stack>
        </Stack>
    );
};

export default AddAdvantageForm;