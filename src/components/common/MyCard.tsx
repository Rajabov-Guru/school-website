import React, {FC} from 'react';
import {Card,SxProps} from "@mui/material";
import {ICard} from "../../types/mainTypes";



const MyCard:FC<ICard> = ({forDashboard, styles, children}) => {
    if(forDashboard){
        return (
            <Card sx={{...styles,maxWidth:'none',width:'100%'}} raised>
                {children}
            </Card>
        );
    }
    return (
        <Card sx={styles} raised>
            {children}
        </Card>
    );
};

export default MyCard;