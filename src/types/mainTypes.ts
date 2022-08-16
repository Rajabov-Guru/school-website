import {SxProps} from "@mui/material";
import React from "react";

export interface ICard{
    forDashboard?:boolean;
    styles?:SxProps;
    children?:React.ReactNode;
}

export interface IList{
    fordDashboard?:boolean;
    children?:React.ReactNode;
}

export interface IForm{
    handleAfter:()=>void;
}

export interface IArticle{
    id?:number;
    image:string;
    title:string;
    preview:string;
    text:string;
    createdAt:string;
}

export interface INews{
    id?:number;
    image:string;
    title:string;
    preview:string;
    text:string;
    createdAt:string;
}

export interface ICourse{
    id?:number;
    image:string;
    name:string;
    description:string;
    preview:string;
    age:number;
    student_count:number;
    lesson_count:number;
    price:number;
}

export interface IAdvantage{
    id?:number;
    image:string;
    title:string;
    description:string;
}

export interface IFeedback{
    id?:number;
    courseId:number;
    email:string;
    createdAt?:string;
    courseName?:string;
}

export interface IInform{
    id?:number;
    adminId?:number;
    main_title:string;
    keyword:string;
    about_us:string;
}

export interface IAdmin{
    id:number;
    email:string;
    password:string;
    createdAt:string;
    updatedAt:string;
}