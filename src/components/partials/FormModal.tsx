import React, {FC} from 'react';
import MyModal, {IModal} from "../common/MyModal";

interface IFormModal extends IModal{
    children:React.ReactNode;
}

const FormModal:FC<IFormModal> = ({open, handleClose, children}) => {
    return (
        <MyModal open={open} handleClose={handleClose}>
            {children}
        </MyModal>
    );
};

export default FormModal;