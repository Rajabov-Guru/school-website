import {Stack} from "@mui/material";
import {ICourse, IList} from "../../../types/mainTypes";
import {FC} from "react";
import CourseCard from "../cards/CourseCard";

interface ICourseList extends  IList{
    courses:ICourse[];
    editHandler:(course?:ICourse)=>void;
    deleteHandler:(id?:number)=>void;
}

const CourseList:FC<ICourseList> = ({fordDashboard,courses,editHandler,deleteHandler}) => {
    return (
        <Stack spacing={2}>
            {courses.map(course=>
                <CourseCard
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                    key={course.id} course={course}
                    forDashboard={fordDashboard}/>
            )}
        </Stack>
    );
};

export default CourseList;