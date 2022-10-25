import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './DataLoad.css'
import LeftSideNav from "../../../../shared/leftSideBar/LeftSideNav";
const DataLoaded = ({ e }) => {
  console.log(e);
  const { name, title, image } = e;
  return (
    <Container className="mt-5" >
         <Row>
          <Col lg='2'></Col>
          <Col lg='10'>
          <Card style={{ width: "22rem" }}>
            <Image fluid variant="top" src={image} />
            <Card.Body>
              <Card.Text>{title}</Card.Text>
              <Button variant="primary">Details Here</Button>
            </Card.Body>
          </Card>
          </Col>
         </Row>
    </Container>
  );
};

export default DataLoaded;
