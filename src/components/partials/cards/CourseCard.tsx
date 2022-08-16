import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import {Button, CardActionArea, CardActions, Stack} from '@mui/material';
import useModal from "../../../hooks/useModal";
import CardModal from "../CardModal";
import {FC} from "react";
import MyCard from "../../common/MyCard";
import {IArticle, ICard, ICourse} from "../../../types/mainTypes";
import {API_URL} from "../../../http";

interface ICourseCard extends ICard{
    course:ICourse;
    editHandler?:(course?:ICourse)=>void;
    deleteHandler?:(id?:number)=>void;
}



const CourseCard:FC<ICourseCard> = ({forDashboard,course, editHandler, deleteHandler}) => {
    const {open, handleOpen, handleClose} = useModal(false);

    async function deleteItem(){
        const res = window.confirm("Удалить?");
        if(res && deleteHandler){
            await deleteHandler(course.id);
        }
    }

    return (
        <MyCard  styles={{ maxWidth: 450, margin:'0 auto' }} forDashboard={forDashboard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={`${process.env.REACT_APP_URL}/${course.image}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {course.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {course.preview}
                    </Typography>
                    <Stack direction="row" sx={{justifyContent:'space-around', marginTop:'15px'}}>
                        <Stack sx={{alignItems:'center'}}>
                            <GroupIcon color={'secondary'} fontSize="large"/>
                            <Typography sx={{color:'#9c27b0'}}>Возраст</Typography>
                            <Typography variant="h6" sx={{color:'#000', marginTop:'5px'}}>{course.age} лет</Typography>
                        </Stack>
                        <Stack sx={{alignItems:'center'}}>
                            <GroupsIcon color={'secondary'} fontSize="large"/>
                            <Typography sx={{color:'#9c27b0'}}>Группа</Typography>
                            <Typography variant="h6" sx={{color:'#000', marginTop:'5px'}}>До {course.student_count} человек</Typography>
                        </Stack>
                        <Stack sx={{alignItems:'center'}}>
                            <AccessAlarmIcon color={'secondary'} fontSize="large"/>
                            <Typography sx={{color:'#9c27b0'}}>Длительность</Typography>
                            <Typography variant="h6" sx={{color:'#000', marginTop:'5px'}}>{course.lesson_count} занятия</Typography>
                        </Stack>
                        <Stack sx={{alignItems:'center'}}>
                            <CurrencyRubleIcon color={'secondary'} fontSize="large"/>
                            <Typography sx={{color:'#9c27b0'}}>Цена</Typography>
                            <Typography variant="h6" sx={{color:'#000', marginTop:'5px'}}>{course.price}</Typography>
                        </Stack>
                    </Stack>

                </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent:'flex-end', margin:'0 10px 10px 0', gap:'10px'}} disableSpacing>
                {!forDashboard &&
                    <Button onClick={handleOpen} size={'small'} variant='contained'>
                        Подробнее
                    </Button>
                }
                {forDashboard && editHandler && deleteHandler &&
                    <>
                        <Button onClick={()=>editHandler(course)} size={'small'} variant='contained' color="success">
                            Редактировать
                        </Button>
                        <Button onClick={deleteItem} size={'small'} variant='contained' color="error">
                            Удалить
                        </Button>
                    </>
                }
            </CardActions>
            <CardModal open={open} handleClose={handleClose} title={course.name} text={course.description}/>
        </MyCard>
    );
}

export default CourseCard;
