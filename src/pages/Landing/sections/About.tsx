import React, {FC} from 'react';
import {Container} from "@mui/material";
import {ISection} from "./Start";
import styled, {css} from "styled-components";

const AboutSection = styled.div<ISection>`
  padding: 40px 0px 90px 0px;
  background-image: ${props=>`url(${props.url})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: white;
  text-align: center;
  
  ${props=>props.repeat && css`
    background-size: auto auto;
    background-repeat: repeat;
  `}
`

interface IAboutSection extends ISection{
    text:string;
}

const About:FC<IAboutSection> = (props) => {
    return (
        <AboutSection {...props}>
            <Container>
                <h1 className={'about_title'}>О нас</h1>
                <p className={'about_text'}>{props.text}</p>
            </Container>
        </AboutSection>
    );
};

export default About;