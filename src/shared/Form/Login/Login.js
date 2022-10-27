import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../layout/Auth/AuthContext";
import toast from "react-hot-toast";
import "../SignUp/signup.css";
const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const { loginExistUser, logInWithPopUp, resetPassword,setLoading } =
    useContext(AuthProvider);
  const [emailValue, setEmailValue] = useState("");
  console.log(emailValue);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathName || "/";
  const handleGooglePopUp = () => {
    logInWithPopUp(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginExistUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleResetPassword = () => {
    resetPassword(emailValue)
      .then(() => {
        toast.success("Password reset email send");
      })
      .catch((error) => console.log(error));
  };
  return (
    <Form onSubmit={handleLoginUser} className='login'>
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

export default Login;
