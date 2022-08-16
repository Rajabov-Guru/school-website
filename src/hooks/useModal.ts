import {useState} from "react";

export default function useModal(initial:boolean){
    const [open, setOpen] = useState<boolean>(initial);

    function handleClose():void{
        setOpen(false);
    }
    function handleOpen():void{
        setOpen(true);
    }

    return {open,handleOpen, handleClose};
}