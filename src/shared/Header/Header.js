import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky='top'>
        <Container>
          <Navbar.Brand><Link className='text-decoration-none' to='/home'><Image width={50} className='mb-2' fluid src={logo}/><span className='fs-4 fw-bold'>MiTech</span></Link></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className=" justify-content-center flex-grow-1 pe-1">
              <NavLink to='/courses' className={({ isActive }) =>
              isActive ? 'active' : undefined
            }><Button variant='outline-primary'>Courses</Button></NavLink>
              <NavLink className={`mx-2 ${({ isActive }) =>
              isActive ? 'active' : undefined
            }`} to='/faq'><Button variant='outline-primary'>FAQ</Button></NavLink>
              <NavLink className={({ isActive }) =>
              isActive ? 'active' : undefined
            } to='/blog'><Button variant='outline-primary'>Blog</Button></NavLink>
            </Nav>
            <Nav className='justify-content-center '>
            <Link className={({ isActive }) =>
              isActive ? 'active' : undefined
            } to='/signup'><Button variant='primary'>Sign Up</Button></Link>
            <Link  className='mx-2' to='/login'><Button variant='primary'>Log In</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;