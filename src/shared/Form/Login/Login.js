import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../layout/Auth/AuthContext";
import toast from "react-hot-toast";
import "../SignUp/signup.css";
const Login = () => {
  const { loginExistUser, logInWithPopUp, resetPassword } =
    useContext(AuthProvider);
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState("");
  //..............Navigation Section..............//
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  //.............. Google Pop Up Section..........//
  const googleProvider = new GoogleAuthProvider();
  const handleGooglePopUp = () => {
    logInWithPopUp(googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  //.............. Github Pop Up Section..........//
  const githubProvider = new GithubAuthProvider();
  const handleGithubPopup = () => {
    logInWithPopUp(githubProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  const facebookProvider = new FacebookAuthProvider();
  const handleFacebook = () => {
    logInWithPopUp(facebookProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  //.............. Login With Email Password Section..........//
  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginExistUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //.............. Password reset Section..........//
  const handleResetPassword = () => {
    resetPassword(emailValue)
      .then(() => {
        toast.success("Password reset email send");
      })
      .catch((error) => console.log(error));
  };
  return (
    <Form onSubmit={handleLoginUser} className="login mt-2">
      <h3 className="fw-bold text-center underline">
        <span className="fs-2 text-primary">Log</span>In
      </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={(event) => setEmailValue(event.target.value)}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox"></Form.Group>
      <Form.Label>
        <button
          onClick={handleResetPassword}
          className="label-text-alt link link-hover"
        >
          Forgot password?
        </button>
        {error && (
          <p className="text-danger">
            <small>{error}</small>
          </p>
        )}
      </Form.Label>
      <br />
      <Form.Text className="text-muted">
        Don't have an account? <Link to="/signup">SignUp</Link>
      </Form.Text>
      <br />
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div className="text-center">
        <h4 className="text-muted fs-5 fw-bold">Login with Social Link</h4>
        <div className="d-flex justify-content-center icon-style">
          <p className="fw-semibold">
            <FaGoogle onClick={handleGooglePopUp} className="icon" />
            <br />
            Google
          </p>
          <p className="fw-semibold">
            <FaGithub onClick={handleGithubPopup} className="icon" />
            <br />
            Github
          </p>
          <p className="fw-semibold">
            <FaFacebook onClick={handleFacebook} className="icon" />
            <br />
            Facebook
          </p>
        </div>
      </div>
    </Form>
  );
};

export default Login;
