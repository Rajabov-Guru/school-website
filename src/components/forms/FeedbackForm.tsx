import React, {FC, useState} from 'react';
import {Button, FormControl, InputLabel, Select, SelectChangeEvent, Stack, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import {ICourse, IFeedback} from "../../types/mainTypes";

interface IFeedForm{
    courses:ICourse[];
    handleSubmit:(data:IFeedback)=>void;
    isLoading:boolean;
}

const FeedbackForm:FC<IFeedForm> = ({courses,handleSubmit, isLoading}) => {
    const [courseId,setCourseId] = useState('');
    const [email, setEmail]  =useState('');
    const [error, setError] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setCourseId(event.target.value);
    };

    function submit(){
        if(courseId.length==0 || email.length==0){
            setError(true);
            return;
        }else setError(false);
        const data:IFeedback = {
            email,
            courseId:Number(courseId)
        };

        handleSubmit(data);
        setCourseId('');
        setEmail('');
    }

    return (
        <>
            <div className={'about_title'}>Записаться на курс</div>
            <Stack spacing={2}>
                <FormControl error={error} disabled = {isLoading} fullWidth variant="filled" sx={{ backgroundColor:'white', borderRadius:'7px' }}>
                    <InputLabel id="demo-simple-select-filled-label">Курс</InputLabel>
                    <Select
                        value={courseId}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        variant='standard'
                        onChange={handleChange}
                    >
                        {courses.map(c=>
                            <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                        )}

                    </Select>
                </FormControl>
                <TextField
                    error={error}
                    disabled={isLoading}
                    sx={{backgroundColor:'white', borderRadius:'7px'}}
                    id="outlined-basic"
                    label="Email"
                    variant="filled"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                <TextField
                    error={error}
                    disabled={isLoading}
                    sx={{backgroundColor:'white', borderRadius:'7px'}}
                    id="outlined-basic"
                    label="ФИО"
                    variant="filled"/>
                <TextField
                    error={error}
                    disabled={isLoading}
                    sx={{backgroundColor:'white', borderRadius:'7px'}}
                    id="outlined-basic"
                    label="Телефон"
                    variant="filled"/>

            </Stack>
            <Button
                disabled={isLoading}
                onClick={submit}
                sx={{marginTop:'24px'}}
                variant='contained'
                endIcon={<SendIcon/>}>Отправить</Button>
        </>
    );
};

export default FeedbackForm;