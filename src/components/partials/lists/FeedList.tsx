import {Stack} from "@mui/material";
import {IFeedback, IList} from "../../../types/mainTypes";
import {FC} from "react";
import FeedCard from "../cards/FeedCard";

interface IFeedList extends  IList{
    feedbacks:IFeedback[];
    deleteHandler:(id?:number)=>void;
}

const FeedList:FC<IFeedList> = ({feedbacks,deleteHandler}) => {
    return (
        <Stack spacing={2}>
            {feedbacks.map(feed=>
                <FeedCard deleteHandler={deleteHandler} key={feed.id} feedback={feed}/>
            )}
        </Stack>
    );
};

export default FeedList;