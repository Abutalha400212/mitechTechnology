import React from "react";
import {  Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import './Details.css'
const Details = () => {
  const techDetails = useLoaderData();
  console.log(techDetails);
  const { title, description, image,id } = techDetails;
  return (
    <Card bg="info">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={`/discover/${id}`}><Button>Back to Previous Page</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Details;
