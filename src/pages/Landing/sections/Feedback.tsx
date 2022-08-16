import React, {FC, useState} from 'react';
import {ISection} from "./Start";
import styled, {css} from "styled-components";
import {Container, Select, Stack, TextField, FormControl, InputLabel, Button, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import {ICourse, IFeedback} from "../../../types/mainTypes";
import FeedbackForm from "../../../components/forms/FeedbackForm";

const FeedbackSection = styled.div<ISection>`
  padding: 40px 25px 90px 25px;
  background-image: ${props=>`url(${props.url})`};
  background-size: cover;
  color: white;
  text-align: center;
  
  ${props=>props.repeat && css`
    background-size: auto auto;
    background-repeat: repeat;
  `}
`

interface IFeedBackSection extends ISection{
    courses:ICourse[];
    handleSubmit:(data:IFeedback)=>void;
    isLoading:boolean;
}

const Feedback:FC<IFeedBackSection> = (props) => {




    return (
        <FeedbackSection {...props}>
            <Container>
                <FeedbackForm isLoading={props.isLoading} courses={props.courses} handleSubmit={props.handleSubmit}/>
            </Container>
        </FeedbackSection>
    );
};

export default Feedback;