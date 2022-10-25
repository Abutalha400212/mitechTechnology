import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../shared/leftSideBar/LeftSideNav';

const MainCourse = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col lg='3' className='mb-2'><LeftSideNav/></Col>
                <Col lg='9'><Outlet/></Col>
            </Row>
        </Container>
    );
};

export default MainCourse;