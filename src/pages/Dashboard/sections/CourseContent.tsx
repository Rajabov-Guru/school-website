import React, {useContext, useEffect, useState} from 'react';
import DashHeader from "../../../components/partials/DashHeader";
import DashLayout from "../../../components/common/DashLayout";
import CourseList from "../../../components/partials/lists/CourseList";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import useModal from "../../../hooks/useModal";
import {IArticle, ICourse} from "../../../types/mainTypes";
import AddArticleForm from "../../../components/forms/AddArticleForm";
import FormModal from "../../../components/partials/FormModal";
import AddCourseForm from "../../../components/forms/AddCourseForm";
import Loading from "../../../components/common/Loading";

const CourseContent = () => {
    const {dashboardStore} = useContext(Context);
    const {open, handleOpen, handleClose} = useModal(false);
    const [targetCourse,setTargetCourse]  = useState<ICourse | undefined>(undefined);

    function openForm(course?:ICourse){
        if(course){
            setTargetCourse(course);
        }
        else{
            setTargetCourse(undefined);
        }
        handleOpen();
    }

    useEffect(()=>{
        fetchCourses();
    },[])

    async function fetchCourses(){
        await dashboardStore.getCourses();
    }

    async function handleSubmit(data:FormData, flag?:boolean){
        if(dashboardStore.admin) data.append('adminId',dashboardStore.admin?.id.toString());
        if(!flag) await dashboardStore.addCourse(data);
        else{
            await dashboardStore.updateCourse(data);
        }
    }

    async function remove(id?:number){
        if(id) await dashboardStore.deleteCourse(id);
    }


    return (
        <DashLayout>
            <DashHeader title={"Список курсов"} addButton handleAddButton={openForm}/>
            {dashboardStore.isLoading? <Loading/>:
                <div className={'content_block'}>
                    <CourseList editHandler={openForm} deleteHandler={remove} courses={dashboardStore.courses} fordDashboard/>
                </div>
            }
            <FormModal open={open} handleClose={handleClose}>
                <AddCourseForm handleSubmit={handleSubmit} course={targetCourse} handleAfter={handleClose}/>
            </FormModal>
        </DashLayout>
    );
};

export default observer(CourseContent);