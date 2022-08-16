import {Stack} from "@mui/material";
import {IAdvantage, IList} from "../../../types/mainTypes";
import {FC} from "react";
import AdvantageCard from "../cards/AdvantageCard";

interface IAdvantageList extends IList{
    advantages:IAdvantage[];
    editHandler?:(adv?:IAdvantage)=>void;
    deleteHandler?:(id?:number)=>void;
}

const AdvantageList:FC<IAdvantageList> = ({fordDashboard,advantages,editHandler,deleteHandler}) => {
    return (
        <Stack spacing={2}>
            {advantages.map(adv=>
                <AdvantageCard
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                    key={adv.id}
                    advantage={adv}
                    forDashboard={fordDashboard}/>
            )}
        </Stack>
    );
};

export default AdvantageList;