import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Button, ButtonGroup, Image } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthProvider } from "../../layout/Auth/AuthContext";
import "./Header.css";
import "../../App.css";
const Header = () => {
  const { user, logOut, togggle: toggle, setToggle} = useContext(AuthProvider);
  const navigate = useNavigate()
  //............Handle Sign Out............//
  const handleSignOut = () => {
    logOut().then(() => {
      navigate('/home')
      toast.success("Log Out Successfully");
    })
    .catch(error=> console.log(error))
  };
//...................... Handle Mode............//
  const handleMode = () => { 
    setToggle(!toggle);
    if (toggle === false) {
      
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
   
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
     
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={toggle ? "dark" : "light"}
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to="/home">
            <Image width={50} className="mb-2" fluid src={logo} />
            <span className="fs-3 fw-bold">LearnTE&copy;H</span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" justify-content-center flex-grow-1 pe-1">
            <ButtonGroup>
              <NavLink
                to="/discover"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <Button variant="outline-primary">Discover</Button>
              </NavLink>

              <NavLink
                className={`mx-2 ${({ isActive }) =>
                  isActive ? "active" : undefined}`}
                to="/faq"
              >
                <Button variant="outline-primary">FAQ</Button>
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/blog"
              >
                <Button variant="outline-primary">Blog</Button>
              </NavLink>
            </ButtonGroup>
          </Nav>
          <Nav className="justify-content-center ">
            {user?.uid ? (
              <ButtonGroup className="my-1">
                <Link>
                  <Button variant="outline-success" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </Link>
              </ButtonGroup>
            ) : (
              <ButtonGroup className="my-1">
                <NavLink
                  className={` ${({ isActive }) =>
                    isActive ? "active" : undefined}`}
                  to="/signup"
                >
                  <Button variant="outline-success">Sign Up</Button>
                </NavLink>

                <NavLink
                  className={`mx-2 ${({ isActive }) =>
                    isActive ? "active" : undefined}}`}
                  to="/login"
                >
                  <Button variant="outline-success">Log In</Button>
                </NavLink>
              </ButtonGroup>
            )}
          </Nav>{" "}
          <ButtonGroup className="d-flex justify-content-between align-items-center mx-2 my-1">
            <div className="">
              {user && 
                <Link to='/profile'><Image
                roundedCircle
                width={50}
                height={50}
                src={user.photoURL}
              /></Link>}
            </div>
            <div className="ms-1">
              {user && <>{user.displayName}</>}
            </div>
          </ButtonGroup>
          <div className="toggle">
            <FaMoon className="moon" /> <FaSun className="sun" />
            <span
              onClick={handleMode}
              className={`bol ${toggle ? "transfer" : undefined}`}
            ></span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
