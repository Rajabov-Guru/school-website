import React, {FC} from 'react';
import {Stack} from "@mui/material";
import ArticleCard from "../cards/ArticleCard";
import {IArticle, IList} from "../../../types/mainTypes";

interface IArticleList extends IList{
    articles:IArticle[];
    editHandler?:(article?:IArticle)=>void;
    deleteHandler?:(id?:number)=>void;
}

const ArticleList:FC<IArticleList> = ({fordDashboard,articles,editHandler,deleteHandler}) => {
    return (
        <Stack spacing={2}>
            {articles.map(art=>
                <ArticleCard
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                    key={art.id}
                    article={art}
                    forDashboard={fordDashboard}/>
            )}
        </Stack>
    );
};

export default ArticleList;