import React, { useContext } from 'react';
import toast from "react-hot-toast";
import { Button, Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthProvider } from '../../layout/Auth/AuthContext';
import './Header.css'
const Header = () => {
  const {user,logOut} = useContext(AuthProvider)
  const handleSignOut =()=>{
    logOut()
    .then(()=>{toast.success('Log Out Successfully')})
    
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky='top'>
        <Container>
          <Navbar.Brand><Link className='text-decoration-none' to='/home'><Image width={50} className='mb-2' fluid src={logo}/><span className='fs-3 fw-bold'>LearnTE&copy;H</span></Link></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className=" justify-content-center flex-grow-1 pe-1">
              <NavLink to='/courses' className={({ isActive }) =>
              isActive ? 'active' : undefined
            }><Button variant='outline-primary'>Discover</Button></NavLink>
              <NavLink className={`mx-2 ${({ isActive }) =>
              isActive ? 'active' : undefined
            }`} to='/faq'><Button variant='outline-primary'>FAQ</Button></NavLink>
              <NavLink className={({ isActive }) =>
              isActive ? 'active' : undefined
            } to='/blog'><Button variant='outline-primary'>Blog</Button></NavLink>
            </Nav>
            <Nav className='justify-content-center '>
            {user?.uid ? <Button onClick={handleSignOut}>Sign Out</Button> :<><NavLink className={`mx-2 ${({ isActive }) =>
              isActive ? 'active' : undefined
            }`} to='/signup'><Button variant='outline-success'>Sign Up</Button></NavLink>
            <NavLink  className={`mx-2 ${({ isActive }) =>
              isActive ? 'active' : undefined
            }}`} to='/login'><Button variant='outline-success'>Log In</Button></NavLink></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;