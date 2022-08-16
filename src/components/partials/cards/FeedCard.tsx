import React, {FC} from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Button, Card, CardActions} from "@mui/material";
import MyCard from "../../common/MyCard";
import {IFeedback} from "../../../types/mainTypes";

interface IFeedCard{
    feedback:IFeedback;
    deleteHandler:(id?:number)=>void;
}

const FeedCard:FC<IFeedCard> = ({feedback,deleteHandler}) => {

    async function deleteItem(){
        const res = window.confirm("Удалить?");
        if(res){
            await deleteHandler(feedback.id);
        }
    }
    return (
        <Card sx={{ display: 'flex', flexDirection:'column' }}>
            <CardContent sx={{flex:'1 0 70%', maxWidth:'100%'}}>
                <Typography component="div" variant="h5">
                    Завяка на курс {feedback.courseName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {feedback.createdAt}
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div">
                    От: {feedback.email}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'flex-end', margin:'0 10px 10px 0', gap:'10px'}} disableSpacing>
                <Button onClick={deleteItem} size={'small'} variant='contained' color="error">
                    Удалить
                </Button>
            </CardActions>
        </Card>
    );
};

export default FeedCard;