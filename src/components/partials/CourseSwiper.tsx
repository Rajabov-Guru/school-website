import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, {FC} from "react";
import CourseCard from "./cards/CourseCard";
import {ICourse} from "../../types/mainTypes";

interface ICourseSwiper{
    courses:ICourse[];
}

const CourseSwiper:FC<ICourseSwiper> = ({courses})=>{
    return (
        <Swiper
            height={800}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
        >
            {courses.map(course=>
                <SwiperSlide key={course.id}>
                    <CourseCard course={course} />
                </SwiperSlide>
            )}

        </Swiper>
    );
}

export default CourseSwiper