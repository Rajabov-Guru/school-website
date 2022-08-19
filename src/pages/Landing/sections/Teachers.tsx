import React from 'react';
import {ISection} from "./Start";
import styled, {css} from "styled-components";
import {Avatar, Container, Stack, Typography} from "@mui/material";
import TeacherPhotoFirst from '../../../assets/teacher1.png';
import TeacherPhotoSecond from '../../../assets/teacher2.png';
import TeacherPhotoThird from '../../../assets/teacher3.png';

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
                <Stack spacing={2} alignItems={'center'}>
                    <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={TeacherPhotoFirst} />
                    <Stack>
                        <Typography variant={'h6'} fontWeight={'bold'}>Шевченко А. С.</Typography>
                        <Typography variant={'h6'}>Кандидат физико- математических наук, доцент</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems={'center'}>
                    <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={TeacherPhotoSecond} />
                    <Stack>
                        <Typography variant={'h6'} fontWeight={'bold'}>Камышникова Н. Н.</Typography>
                        <Typography variant={'h6'}>Кандидат химических наук, психолог</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems={'center'}>
                    <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={TeacherPhotoThird} />
                    <Stack>
                        <Typography variant={'h6'} fontWeight={'bold'}>Раджабов А. И.</Typography>
                        <Typography variant={'h6'}>Преподаватель по робототехнике</Typography>
                    </Stack>
                </Stack>
            </Container>
        </TeachersSection>
    );
};

export default Teachers;