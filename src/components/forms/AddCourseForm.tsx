import React, {ChangeEvent, FC, useState} from 'react';
import {ICourse, IForm} from "../../types/mainTypes";
import {Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PhotoIcon from "@mui/icons-material/Photo";

interface IAddCourse extends IForm{
    course?:ICourse;
    handleSubmit:(data:FormData, flag?:boolean)=>void;
}

const AddCourseForm:FC<IAddCourse> = ({handleAfter,course,handleSubmit}) => {
    const [name, setName] = useState(course?course.name:'');
    const [preview, setPreview] = useState(course?course.preview:'');
    const [description, setDescription] = useState(course?course.description:'');
    const [studentCount, setStudentCount] = useState(course?course.student_count:0);
    const [lessonCount, setLessonCount] = useState(course?course.lesson_count:0);
    const [price, setPrice]  = useState(course?course.price:0);
    const [age, setAge] = useState(course?course.age:0);
    const [image, setImage] = useState<any>(null);

    function cancel(){
        handleAfter();
    }

    function submit(){
        const formData = new FormData();
        if(course && course.id) formData.append('id', course.id.toString());
        formData.append('name', name);
        formData.append('description', description);
        formData.append('preview', preview);
        formData.append('student_count',studentCount.toString());
        formData.append('lesson_count',lessonCount.toString());
        formData.append('price',price.toString());
        formData.append('age',age.toString());
        formData.append('image', image);
        handleSubmit(formData,course?true:false);
        handleAfter();
    }

    function selectFile(e:ChangeEvent<HTMLInputElement>){
        if(e?.target?.files) setImage(e.target.files[0]);
    }

    return (
        <Stack spacing={2}>
            <Stack spacing={3}>
                <Typography variant={'h6'}>Добавить новый курс</Typography>
                <TextField
                    id="name"
                    label="Название"
                    variant="outlined"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>

                <TextField
                    id="preview"
                    label="Короткое описание"
                    variant="outlined"
                    value={preview}
                    onChange={(e)=>setPreview(e.target.value)}/>

                <TextField
                    id="description"
                    label="Полный текст"
                    variant="outlined"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/>

                <TextField
                    id="age"
                    label="Возраст"
                    variant="outlined"
                    value={age}
                    onChange={(e)=>setAge(Number(e.target.value))}/>

                <TextField
                    id="studentCount"
                    label="Кол-во людей в группе"
                    variant="outlined"
                    value={studentCount}
                    onChange={(e)=>setStudentCount(Number(e.target.value))}/>

                <TextField
                    id="lessonCount"
                    label="Кол-во заданий"
                    variant="outlined"
                    value={lessonCount}
                    onChange={(e)=>setLessonCount(Number(e.target.value))}/>

                <TextField
                    id="price"
                    label="Цена"
                    variant="outlined"
                    value={price}
                    onChange={(e)=>setPrice(Number(e.target.value))}/>


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

export default AddCourseForm;