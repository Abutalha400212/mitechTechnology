import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../shared/leftSideBar/LeftSideNav';

const Courses = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col lg='3'><LeftSideNav/></Col>
                <Col lg='9'><Outlet/></Col>
            </Row>
        </Container>
        </div>
    );
};

export default Courses;