import React, {ChangeEvent, FC, useState} from 'react';
import {IArticle, IForm, INews} from "../../types/mainTypes";
import {Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PhotoIcon from "@mui/icons-material/Photo";

interface IAddNews extends  IForm{
    news?:INews;
    handleSubmit:(data:FormData, flag?:boolean)=>void;
}

const AddNewsForm:FC<IAddNews> = ({handleAfter,news,handleSubmit}) => {
    const [title, setTitle] = useState(news?.title?news.title:'');
    const [preview, setPreview] = useState(news?.preview?news.preview:'');
    const [text, setText] = useState(news?.text?news.text:'');
    const [image, setImage] = useState<any>(null);

    function cancel(){
        handleAfter();
    }

    function submit(){
        const formData = new FormData();
        if(news && news.id) formData.append('id', news.id.toString());
        formData.append('title', title);
        formData.append('preview', preview);
        formData.append('text', text);
        formData.append('image', image);
        handleSubmit(formData,news?true:false);
        handleAfter();
    }

    function selectFile(e:ChangeEvent<HTMLInputElement>){
        if(e?.target?.files) setImage(e.target.files[0]);
    }


    return (
        <Stack spacing={2}>
            <Stack spacing={3}>
                <Typography variant={'h6'}>Добавить новость</Typography>
                <TextField
                    id="title"
                    label="Загловок"
                    variant="outlined"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>

                <TextField
                    id="preview"
                    label="Описание"
                    variant="outlined"
                    value={preview}
                    onChange={(e)=>setPreview(e.target.value)}/>

                <TextField
                    id="description"
                    label="Полный текст"
                    variant="outlined"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}/>
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

export default AddNewsForm;