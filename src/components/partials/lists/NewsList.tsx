import React, {FC} from 'react';
import NewsCard from "../cards/NewsCard";
import {Stack} from "@mui/material";
import {IList, INews} from "../../../types/mainTypes";

interface INewsList extends IList{
    newsItems:INews[];
    editHandler?:(news?:INews)=>void;
    deleteHandler?:(id?:number)=>void;
}

const NewsList:FC<INewsList> = ({fordDashboard,newsItems, editHandler, deleteHandler}) => {
    return (
        <Stack spacing={2}>
            {newsItems.map(item=>
                <NewsCard
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                    key={item.id}
                    newsItem={item}
                    forDashboard={fordDashboard}/>
            )}
        </Stack>
    );
};

export default NewsList;