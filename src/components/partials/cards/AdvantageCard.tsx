import React, {FC} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import MyCard from "../../common/MyCard";
import {IAdvantage, ICard} from "../../../types/mainTypes";


interface IAdvantageCard extends ICard{
    advantage:IAdvantage;
    editHandler?:(adv?:IAdvantage)=>void;
    deleteHandler?:(id?:number)=>void;
}

const AdvantageCard:FC<IAdvantageCard> = ({forDashboard, advantage,editHandler, deleteHandler}) => {
    async function deleteItem(){
        const res = window.confirm("Удалить?");
        if(res && deleteHandler){
            await deleteHandler(advantage.id);
        }
    }

    return (
        <MyCard forDashboard={forDashboard} styles={{ width:'100%'}}>
            <CardMedia
                component="img"
                height="140"
                image={`${process.env.REACT_APP_URL}/${advantage.image}`}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {advantage.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {advantage.description}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'flex-end', margin:'0 10px 10px 0', gap:'10px'}} disableSpacing>
                {forDashboard && editHandler && deleteHandler &&
                    <>
                        <Button onClick={()=>editHandler(advantage)} size={'small'} variant='contained' color="success">
                            Редактировать
                        </Button>
                        <Button onClick={deleteItem} size={'small'} variant='contained' color="error">
                            Удалить
                        </Button>
                    </>
                }
            </CardActions>
        </MyCard>
    );
};

export default AdvantageCard;