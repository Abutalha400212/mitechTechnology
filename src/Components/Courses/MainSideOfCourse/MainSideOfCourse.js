import React, { useContext } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../layout/Auth/AuthContext";
import "./MainSide.css";
const MainSideOfCourse = ({ e }) => {
  const { handleShow } = useContext(AuthProvider);
  const { title, image, _id, description, proFee } = e;
  console.log(e);
  return (
    <Card className="Card" bg="info">
      <Image variant="top" src={image} />
      <Card.Body>
        <Card.Text>{title}</Card.Text>
        <Card.Text>
          {description.length > 50 ? (
            <>
              {description.slice(0, 50) + "..."}{" "}
              <Link to={`/details/${_id}`}>Read More</Link>{" "}
            </>
          ) : (
            description
          )}
        </Card.Text>
      </Card.Body>
      <div className="mb-2 w-100 d-flex justify-content-around">
        <span>
          <FaEye className="fa" />
          {proFee}
        </span>
        <span className="text-white">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </span>
      </div>
      <Link to={`/premium/${_id}`}>
        <Button
          onClick={handleShow}
          className="w-100 mx-auto"
          variant="outline-danger"
        >
          Get Premium Access
        </Button>
      </Link>
    </Card>
  );
};

export default MainSideOfCourse;
