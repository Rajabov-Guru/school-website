import React, {FC} from 'react';
import {ISection} from "./Start";
import styled, {css} from "styled-components";
import CourseSwiper from '../../../components/partials/CourseSwiper';
import CourseCard from "../../../components/partials/cards/CourseCard";
import {Container} from "@mui/material";
import {ICourse} from "../../../types/mainTypes";


const CoursesSection = styled.div<ISection>`
  padding: 60px 0px 90px 0px;
  background-image: ${props=>`url(${props.url})`};
  background-size: cover;
  color: white;
  text-align: center;
  
  ${props=>props.repeat && css`
    background-size: auto auto;
    background-repeat: repeat;
  `}
`

interface ICoursesSection extends ISection{
    courses:ICourse[];
}

const Courses:FC<ICoursesSection> = (props) => {
    return (
        <CoursesSection {...props}>
            <Container>
                <div className={'about_title'}>Наши курсы</div>
                <CourseSwiper courses={props.courses}/>
            </Container>
        </CoursesSection>
    );
};

export default Courses;