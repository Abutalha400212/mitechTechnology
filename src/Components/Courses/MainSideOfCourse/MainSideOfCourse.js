import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataLoaded from './dataLoaded/DataLoaded';
import './MainSide.css'
const MainSideOfCourse = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div className="grid-cols">
            {course.map(e =><DataLoaded e={e}/>)}
        </div>
    );
};

export default MainSideOfCourse;