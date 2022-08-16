import React, {FC} from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MyCard from "../../common/MyCard";
import {Button, CardActions} from "@mui/material";
import {IAdvantage, IArticle, ICard} from "../../../types/mainTypes";

interface IArticleCard extends ICard{
    article:IArticle;
    editHandler?:(article?:IArticle)=>void;
    deleteHandler?:(id?:number)=>void;
}

const ArticleCard:FC<IArticleCard> = ({forDashboard,article, editHandler, deleteHandler}) => {
    async function deleteItem(){
        const res = window.confirm("Удалить?");
        if(res && deleteHandler){
            await deleteHandler(article.id);
        }
    }
    return (
        <MyCard forDashboard={forDashboard}  styles={{ display: 'flex', flexDirection:'column' }}>
            <CardContent sx={{flex:'1 0 70%', maxWidth:'100%'}}>
                <Typography component="div" variant="h5">
                    {article.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {article.createdAt}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {article.preview}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'flex-end', margin:'0 10px 10px 0', gap:'10px'}} disableSpacing>
                {forDashboard && editHandler && deleteHandler &&
                    <>
                        <Button onClick={()=>editHandler(article)} size={'small'} variant='contained' color="success">
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

export default ArticleCard;