import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea} from '@mui/material';
import Box from "@mui/material/Box";
import MyCard from "../../common/MyCard";
import {FC} from "react";
import {IArticle, ICard, INews} from "../../../types/mainTypes";

interface INewsCard extends ICard{
    newsItem:INews;
    editHandler?:(news?:INews)=>void;
    deleteHandler?:(id?:number)=>void;
}

const NewsCard:FC<INewsCard> = ({forDashboard,newsItem,editHandler,deleteHandler})=> {

    async function deleteItem(){
        const res = window.confirm("Удалить?");
        if(res && deleteHandler){
            await deleteHandler(newsItem.id);
        }
    }

    return (
        <MyCard forDashboard={forDashboard} styles={{ display: 'flex'}}>
            <Box sx={{ display: 'flex',flex:'1 0 70%', flexDirection: 'column' }}>
                <CardContent sx={{flex:'1 0 70%', maxWidth:'100%'}}>
                    <Typography component="div" variant="h5">
                        {newsItem.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {newsItem.createdAt.split('T')[0]}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {newsItem.text}
                    </Typography>
                </CardContent>
                {forDashboard && editHandler && deleteHandler &&
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,gap:'10px' }}>
                        <Button onClick={()=>editHandler(newsItem)} size={'small'} variant='contained' color="success">
                            Редактировать
                        </Button>
                        <Button onClick={deleteItem} size={'small'} variant='contained' color="error">
                            Удалить
                        </Button>
                    </Box>
                }
            </Box>
            <CardMedia
                component="img"
                sx={{width:300, maxHeight:250}}
                image={`${process.env.REACT_APP_URL}/${newsItem.image}`}
                alt="Live from space album cover"
            />
        </MyCard>
    );
}

export default NewsCard;
