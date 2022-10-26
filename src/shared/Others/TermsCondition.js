import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image from "../../assets/terms.jpg";
const TermsCondition = () => {
  return (
    <Container>
      <Row>
        <Col lg="5" className="h-50 my-auto">
          <div>
            <p className="fs-5">
              <span className="fs-4 text-success">Terms and conditions</span>{" "}
              are the rules, specifications, and requirements of a contract.
            </p>
          </div>
        </Col>
        <Col lg="7">
          <Image width="80%" fluid src={image}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsCondition;
