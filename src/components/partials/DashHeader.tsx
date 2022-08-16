import React, {FC} from 'react';
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

interface IDashHeader{
    title:string;
    addButton?:boolean;
    handleAddButton?:(data?:any)=>void;
}

const DashHeader:FC<IDashHeader> = ({title, addButton,handleAddButton}) => {

    function addHandler(){
        if(handleAddButton) handleAddButton();
    }

    return (
        <div className={'dash-header'}>
            <div className="cont">
                <div className="dash-header__title">{title}</div>
            </div>
            {addButton &&
                <IconButton onClick={addHandler} aria-label="add" size="large">
                    <AddIcon fontSize="inherit" sx={{color:'white'}}/>
                </IconButton>
            }
        </div>
    );
};

export default DashHeader;