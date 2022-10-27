import React from "react";
import {Card,  Image} from "react-bootstrap";
import { Link} from "react-router-dom";
import "./MainSide.css";
const MainSideOfCourse = ({e}) => {
    const { title, image, _id , description} = e;
  return (
     <Card  className="Card" bg="info" >
       <Image  variant="top" src={image}  />
       <Card.Body>
         <Card.Text>{title}</Card.Text>
         <Card.Text>{
                        description.length > 50 ?
                            <>{description.slice(0, 50) + '...'} <Link to={`/details/${_id}`}>Read More</Link> </>
                            :
                            description
                    }</Card.Text>
       </Card.Body>
     </Card>
  );
};

export default MainSideOfCourse;
