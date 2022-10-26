import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import "./signup.css";
import { AuthProvider } from "../../../layout/Auth/AuthContext";
const Signup = () => {
  const { createUser } = useContext(AuthProvider);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
    Check: false,
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const handleUserEmail = (e) => {
    const email = e.target.value
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      setError({...error,email:'Please enter an valid email'})
      setUserInfo({ ...userInfo, email: e.target.value });
    }
    else{
      setError({...error,email:''})
      setUserInfo({ ...userInfo, email: e.target.value });

    }
    
  };

  const handleUserPassword = (e) => {
    const password = e.target.value;

    if (password.length < 8) {
      setError({...error, password: 'Password must be minimum 8 characters'})
      setUserInfo({ ...userInfo, password: e.target.value });
    }
    else{
      setError({...error,password:''})
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        form.reset()
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form  onSubmit={handleSignUp} className="w-50 mx-auto mt-2">
      <h3 className="fw-bold text-center underline lh-1">
        <span className="fs-2 text-primary">Sign</span>Up
      </h3>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          value={userInfo.name}
          type="text"
          placeholder="Enter name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          onChange={(e) => setUserInfo({ ...userInfo, photo: e.target.value })}
          value={userInfo.photo}
          type="text"
          placeholder="Enter Photo Link"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleUserEmail}
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      {error.email && <p className="wrong text-danger">{error.email}</p>}
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleUserPassword}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      {error.password && <p className="wrong text-danger">{error.password}</p>}
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Form.Text className="text-muted">
        Already have an accout? <Link to="/login">Login</Link>
      </Form.Text>{" "}
      <br />
      <Button  variant="primary" type="submit">
        Sign Up
      </Button>
      <div className="text-center bg-light">
        <h4 className="text-muted">SignUp with</h4>
        <div className="d-flex justify-content-center icon-style">
          <p className="fw-semibold">
            <FaGoogle className="icon" />
            <br />
            Google
          </p>
          <p className="fw-semibold">
            <FaGithub className="icon" />
            <br />
            Github
          </p>
          <p className="fw-semibold">
            <FaFacebook className="icon" />
            <br />
            Facebook
          </p>
        </div>
      </div>
    </Form>
  );
};

export default Signup;
