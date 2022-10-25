import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import lottie from '../../assets/Lottie/lottie.json'
import Background from '../../assets/Lottie/bg.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
   <div >
    <div className='home'>
    <Lottie  animationData={Background} loop={true}/>
    </div>
        <Container className='pt-5 text-white'>
            <Row className='d-lg-flex justify-content-between align-items-center text-center'>
                <Col className='w-40 ' lg='5'><Lottie 
                animationData={lottie} loop={true}/></Col>
                <Col lg='7'>
                    <div>
                    <h2 className='fw-bold'>A WORLD OF DIGITAL SOLUTIONS</h2>
                    <Link to='/courses'><Button>Learn About Courses</Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>     
   </div>
    );
};

export default Home;