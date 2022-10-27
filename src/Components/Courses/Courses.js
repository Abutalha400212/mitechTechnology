import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSideOfCourse from "./MainSideOfCourse/MainSideOfCourse";
import "./Courses.css";
const Courses = () => {
  const data = useLoaderData();
  return (
    <div className="grid-style">
      {data.map((e) => (
        <MainSideOfCourse key={e._id} e={e} />
      ))}
    </div>
  );
};

export default Courses;
