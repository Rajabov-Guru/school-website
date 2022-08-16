import styled from "styled-components";
import React, {FC} from 'react';
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export interface ISection{
    url?:string;
    repeat?:boolean;
}

const StartSection = styled.div<ISection>`
  background-image: ${props=>`url(${props.url})`};
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: white;
  text-align: center;
`

interface IStartSection extends ISection{
    title:string;
    keyword:string;
}

const Start:FC<IStartSection> = (props) => {
    return (
        <StartSection {...props}>
            <div>Добро пожаловать!</div>
            <div>
                <h3 className={'start_sup_title'}>Школа</h3>
                <h3 className={'start_sup_title'}>РоботоТехники</h3>
                <h3 className={'start_title'}>{props.title}</h3>
            </div>
            <div className={'start_greeting'}>{props.keyword}</div>
            <Button variant='contained' endIcon={<SendIcon/>}>Записаться</Button>
        </StartSection>
    );
};

export default Start;