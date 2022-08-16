import React, {FC} from 'react';
import {Typography} from "@mui/material";
import MyModal, {IModal} from "../common/MyModal";

interface ICardModal extends  IModal{
    title:string;
    text:string;
}

const CardModal:FC<ICardModal> = ({title, text, open, handleClose}) => {
    return (
        <MyModal open={open} handleClose={handleClose}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {text}
            </Typography>
        </MyModal>
    );
};

export default CardModal;