import React from 'react';
import {ISection} from "./Start";
import styled, {css} from "styled-components";
import {Avatar, Container, Stack, Typography} from "@mui/material";

const TeachersSection = styled.div<ISection>`
  padding: 40px;
  background-image: ${props=>`url(${props.url})`};
  background-size: cover;
  text-align: center;

  &>div{
    display: flex;
    justify-content: space-around;
  }

  @media(max-width:842px) {
    &>div {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
    }
  }
  
  ${props=>props.repeat && css`
    background-size: auto auto;
    background-repeat: repeat;
  `}

  ${props=>!props.url && css`
    background-color: white;
  `}
`

const Teachers = () => {
    return (
        <TeachersSection>
            <div className={'about_title'}>Наши преподаватели</div>
            <Container>
                <Stack spacing={2}>
                    <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src="http://robotic/img/teacher2.png" />
                    <Typography variant={'h6'}>Шевченко А. С.</Typography>
                </Stack>
                <Stack spacing={2}>
                    <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src="http://robotic/img/teacher2.png" />
                    <Typography variant={'h6'}>Шевченко А. С.</Typography>
                </Stack>
                <Stack spacing={2}>
                    <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src="http://robotic/img/teacher2.png" />
                    <Typography variant={'h6'}>Шевченко А. С.</Typography>
                </Stack>
            </Container>
        </TeachersSection>
    );
};

export default Teachers;