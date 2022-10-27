import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { Link, useLoaderData } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const pdf = useRef();
  const techDetails = useLoaderData();
  const { title, description, image, id } = techDetails;
  return (
    <div className="desktop">
      <Card bg="info">
        <div ref={pdf}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </div>
        <div className="w-50 ms-3">
          <ReactToPrint
            trigger={() => (
              <Button variant="outline-success">Save to as pdf</Button>
            )}
            content={() => pdf.current}
          />
        </div>
        <Card.Body>
          <Link to={`/discover/${id}`}>
            <Button>Back to Previous Page</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
