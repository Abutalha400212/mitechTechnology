import React from "react";
import "./DataLoad.css";
import { useLoaderData } from "react-router-dom";
import MainSideOfCourse from "../MainSideOfCourse";
const DataLoaded = () => {
  const dataLoad = useLoaderData();
  return (
    <div className="grid-style" >
      {dataLoad.map((e) => (
        <MainSideOfCourse e={e} />
      ))}
    </div>
  );
};

export default DataLoaded;
