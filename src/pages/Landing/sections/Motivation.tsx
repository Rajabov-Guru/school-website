import React, {FC} from 'react';
import {ISection} from "./Start";
import styled, {css} from "styled-components";
import Container from "@mui/material/Container";

const MotivSection = styled.div<ISection>`
  padding: 50px 0px;
  background-image: ${props=>`url(${props.url})`};
  background-size: cover;
  color: white;
  text-align: center;
  
  ${props=>props.repeat && css`
    background-size: auto auto;
    background-repeat: repeat;
  `};
`

const Motivation:FC<ISection> = (props) => {
    return (
        <MotivSection {...props}>
            <Container>
                <div className={'about_title'}>Каждый ученик важен!</div>
                <div className={'start_greeting'}>На протяжении любого курса каждый слушатель примет участие в творческих, проектировочных и соревновательных видах деятельности.</div>
            </Container>
        </MotivSection>
    );
};

export default Motivation;